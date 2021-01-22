# Pokedex

## Tabla de Contenido

* [Requisitos](#requisitos)
* [Instalacion](#instalacion)
* [Deployment](#deployment)
* [Pantallas](#pantallas)
  - [HomePage](#homepage)
  - [Message](#perfil)
  - [Pokecard](#favoritas)
  - [View-message](#combos-promocionales)
  - [View-Pokemon](#tradicionales)
 * [Desarrollador](#desarrollador)
------------------------------------------------------------------------------------

### Requisitos

* [npm 6.14.6](https://www.npmjs.com/)
* [Ionic Framework 5.5.2](https://ionicframework.com/docs/)
* [Ionic CLI 6.11.0](https://ionicframework.com/docs/)
* [Cordova CLI 8.1.2](https://cordova.apache.org/docs/es/latest/guide/cli/)
* [NodeJS V12.18.3](https://nodejs.org/es/about/releases/)


### Instalacion

Las `url` en la que se consultan los servicios que la app consume pueden se consultadas en `util/constantes.ts`.

Este es un proyecto `node` por lo que para instalar las librerias externas necesarias debe ejecutar en la carpeta del proyecto:

```bash
$ npm i
```

Puede encontrar los paquetes instalados por el comando **npm** y sus versiones en el archivo `package.json`, creando una carpeta `node_modules` con los paquetes y modulos instalados que no deben ser incluidos en su sistema de control de versiones.


### Deployment

Para levantar el entorno de desarrollo localmente, podemos realizarlo de dos maneras:

```bash
$ ionic serve
```

```bash
$ ionic cordova run android
```

### Pantallas

#### HomePage

Codigo en la carpeta `/pages/home`. Se presentan las opciones de menu y **pantalla principal** de la aplicacion. Aquí podemos observar un listado de pokemon 
y poder filtrarlo por nombre. 

![Home page](README_captures/home.JPG)  

#### Message

Codigo en la carpeta `/pages/message`. Permite visualizar el contenido de cada item en la lista de mensajes(Pagina al crear un proyecto base por defecto).

![Message](README_captures/message.JPG)  

#### Pokecard

Codigo en la carpeta `/pages/pokecard`. Permite visualizar el contenido de cada item en la lista de pokemon, desde este apartado se puede modificar el contenido de cada item.

![Pokecard](README_captures/pokecard.JPG)

#### View-message

Codigo en la carpeta `/pages/view-message`. Se presenta en detalle al mensaje seleccionado en la lista de mensaje en **HomePage**.

![View-message](README_captures/view-message.JPG)

#### View-Pokemon

Codigo en la carpeta `/page/tradicionales`. Se presenta en detalle al pokemon seleccionado en la lista de pokemon en **HomePage**..

![View-Pokemon](README_captures/view-pokemon.JPG)


### Desarrollador
- [Edward Cruz Cruz](https://github.com/edwardcruzcruz)
> Pokedex | EDWARDSOLUTION | ESPOL
