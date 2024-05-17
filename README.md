# Desarrollo de una Aplicación de Detección de Emociones
## Descripción
En este proyecto consta de dos partes, una es la codificación del API haciendo uso de FastAPI como backend, y la segunda parte consta de realizar el HTML, CSS, JS usando JQuery y en nuestro caso TailWind CSS en vez de Bootstrap.
El API consiste en la implementación de un modelo de Inteligencia Artificial entrenado para reconocer las emociones de felicidad, frustración y tristeza, el API solo tiene dos endpoints, uno para hacer la carga del HTML y el otro para mandar al modelo las imágenes, para que este evalúa la foto y posteriormente mande una predicción.
El frontend consiste en un HTML, Tailwind para los estilos de este y un archivo JavaScript que contiene los cambios dinámicos visibles del HTML y la petición post usando JQuery.

## Instrucciones de uso
Para hacer uso del proyecto debe clonar el repositorio de GitHub con el link: https://github.com/AndresPatarroyo1517/RevMotion
Primeramente, antes de ejecutar y visualizar el proyecto con las páginas web, usted debe tener instalado en su máquina Python (Recomendable la versión 3.11.2 debido a que el desarrollo del proyecto se hizo en base a esta versión)
1. (Opcional/Windows): Activamos las políticas de ejecución de Scripts con: Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass (Se ejecuta en el powerShell de Visual Studio Code, una vez se cierra el proyecto, la política se restablecerá)
   (Opcional/MacOS): Activamos las políticas de ejecución de Scripts con: chmod +x script.sh 
2. Creamos un entorno virtual de Python para la instalación de dependencias siguiendo los comandos:
  1.Ejecutamos en nuestra terminal pip install virtualenv.
  2.Creamos el entorno virtual en la terminal virtualenv reconocimiento_emociones.
  3.Iniciamos el entorno virtual reconocimiento_emociones\Scripts\activate, en el caso de MacOS usamos source reconocimiento_emociones/bin/activate.
4. Con el entorno virtual, procedemos a instalar las dependencias correspondientes en el requirements.txt usando este comando en la terminal: pip install -r requirements.txt.
5.Una vez que se hayan instalado las librerías necesarias en el proyecto ejecutaremos el proyecto con el siguiente comando: uvicorn main:app --port 8080(Este puerto puede ser cualquiera que tenga disponible) --reload.
6.Con el servidor de uvicorn iniciado, iremos a la URL: http://127.0.0.1:8000(En este caso cambiara el puerto dependiendo del puerto seleccionado en el paso anterior).

## Tecnologías usadas
* HTML y Tailwind CSS para la maquetación, diseño y decoración de la página web.
* Python para la estructuración de todo el código y la base del framework.
* FastAPI para el backend y la construcción de endpoints.
* Uvicorn se uso para el despliegue del servido en un puerto local.
* JavaScript para los efectos visuales de la página y los elementos interactivos.
* JQuery se uso para la carga y envio de información que recibimos del API.
* TensorFlow para la creación del modelo IA y la carga del mismo en el proyecto.

## Autores
Andrés Felipe Patarroyo Muñoz  
Santiago Jair Torres Rivera
