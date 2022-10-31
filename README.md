# AngularRocks
![alt rockbands](src/assets/readme_img.jpg)
<br>
AngularRocks es un projecto FrontEnd en Angular. Es una Single Page Aplication donde se muestra una lista de bandas de rock con información relevante a ella obtenida a través de la API de LastFM. 

## Funcionalidades:

- Visualizar la lista de bandas de rock cargadas por defecto.
- Visualizar imagen de la banda e información de oyentes y reproducciones en LastFM.
- Visualizar información de la banda con enlace a más información en lastFM, top 10 albumes de la banda y top 10 canciones con enlace a visualizarlas en Youtube.
- Añadir una nueva banda a la lista.
- Editar la información de una banda seleccionada.
- Eliminar una banda seleccionada.
<br>
<br>

```
<!-- Este projecto no tiene un BackEnd donde almacenar datos en un DB por lo que, cada vez que se inicialice, la lista de bandas volverá a ser la inicial y los cambios producidos (añadir, eliminar, editar) se perderán. -->
```

API de música de LastFM. https://www.last.fm/api#getting-started
<br>
<br>
<hr>
<br>


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
