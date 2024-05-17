const imageContainer = document.getElementById('imageContainer');
const titulopredict = document.getElementById('predict');
const labelImage = document.getElementById('inputFoto');
var fileInput = document.getElementById('photo');

document.getElementById('formFoto').addEventListener('change', function () {
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const image = document.createElement('img');
            image.src = e.target.result;
            image.className = 'mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6';
            imageContainer.innerHTML = '';
            imageContainer.appendChild(image);
            titulopredict.textContent = '';
        };
        reader.readAsDataURL(file);
        labelImage.textContent = '¡Envia tu foto :D!';
    }
});

document.getElementById('formFoto').addEventListener('submit', function (event) {
    event.preventDefault();
    const file = fileInput.files[0];

    var formData = new FormData();
    formData.append('file', file);

    fetch('http://127.0.0.1:8000/prediccion', {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Hubo un problema al subir la imagen.');
            }
            return response.json();
        })
        .then(data => {
            console.log(data)
            switch (data) {
                case 0:
                    titulopredict.textContent = 'La foto indica que estas estresado'
                    break;
                case 1:
                    titulopredict.textContent = 'La foto indica que estas feliz'
                    break;
                case 2:
                    titulopredict.textContent = 'La foto indica que estas triste'
                    break;
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
