from fastapi import FastAPI, File, UploadFile, Request
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
import tensorflow as tf
import tensorflow_hub as hub
import numpy as np
from PIL import Image
import io
from fastapi.templating import Jinja2Templates

templates = Jinja2Templates(directory="templates")
app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get("/")
def get_html(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


with tf.keras.utils.custom_object_scope({'KerasLayer': hub.KerasLayer}):
    model = tf.keras.models.load_model('model/modelo_entrenado.h5')


@app.post("/prediccion")
async def predict(file: UploadFile = File(...)):
    contents = await file.read()
    image = Image.open(io.BytesIO(contents)).convert("RGB")
    image = image.resize((224, 224)) 
    image_array = np.array(image) / 255.0
    image_array = np.expand_dims(image_array, axis=0) 
    prediction = model.predict(image_array)
    predicted_class = np.argmax(prediction)  
    #{"La predicción dice que: ": prediccion[int(predicted_class)]}
    return int(predicted_class)
    

