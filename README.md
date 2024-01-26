# Todo List Challenge

Este proyecto es un desafío para construir una aplicación de lista de tareas interactiva. La aplicación permite a los usuarios agregar tareas junto con el nombre de la persona responsable de realizar esa tarea. Además, se proporciona la funcionalidad para crear y eliminar tareas. La persistencia de datos se puede lograr mediante localStorage o utilizando una API en [mockapi](https://mockapi.io/).

## Características Principales

- **Agregar Tareas**: Los usuarios pueden agregar nuevas tareas junto con el nombre de la persona asignada.

- **Eliminar Tareas (Opcional)**: Existe la opción de eliminar tareas de la lista.

- **Persistencia de Datos**: Puedes elegir implementar la persistencia de datos utilizando localStorage o una API en mockapi.

## Tecnologías Utilizadas

- HTML5 (estructura ya proporcionada)
- CSS3 (Bootstrap para estilos)
- JavaScript (¡Esta es la parte que necesitas desarrollar!)

## Uso

1. Clona este repositorio en tu máquina local:

    ```bash
    git clone git@github.com:jmontes50/challenge_2.git
    ```

2. Abre el archivo `index.html` en tu navegador web, puedes utilizar la extensión LiveServer para ello.

3. Desarrolla la funcionalidad en los archivos de JS del proyecto.

    - `script.js` es el archivo principal, este archivo debe encargarse del funcionamiento de la aplicación como la manipulación del DOM como de almacenar las nuevas tareas en la variable `tasks`.
    - El archivo `script.js` tiene un función `generateUniqueId` que genera un id mediante un [timestamp](https://www.geeksforgeeks.org/how-to-get-the-timestamp-in-javascript/)
    - el archivo persistencia es un módulo donde existiran las funciones que darán [persistencia a la aplicación](#persistencia-de-datos).

## Estructura del Proyecto

- `index.html`: La estructura HTML de la aplicación.
- `styles.css` (o archivo CSS): Estilos adicionales, incluyendo Bootstrap.
- `script.js`: Este es el archivo que necesitarás desarrollar para agregar la lógica de la lista de tareas.

## Persistencia de Datos

### Opción 1: localStorage

Si decides utilizar `localStorage` para la persistencia de datos, los datos de la lista de tareas se guardarán localmente en el navegador del usuario. Esto significa que las tareas se mantendrán incluso después de cerrar y volver a abrir la aplicación.

### Opción 2: MockAPI

Si prefieres una solución basada en una API, puedes utilizar una API en mockapi para almacenar y recuperar los datos de la lista de tareas. Las peticiones las puedes realizar utilizando fetch, haciendo una petición de tipo POST.

## Recursos

- [Guía MockAPI](https://www.youtube.com/watch?v=g2LMz4SOeqM)
- [Manipulación del DOM](https://www.digitallearning.es/intro-programacion-js/dom.html)
- [localStorage](https://es.javascript.info/localstorage)
- [Peticiones con Fetch](https://www.freecodecamp.org/espanol/news/tutorial-de-fetch-api-en-javascript-con-ejemplos-de-js-fetch-post-y-header/)
