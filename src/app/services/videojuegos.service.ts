import { Injectable } from '@angular/core';

@Injectable()
export class VideojuegosService {

    private videojuegos: Videojuego[] = [
    {
        nombre: 'Fornite',
    descripcion: 'Fortnite es un videojuego del año 2017'+ 
    'desarrollado por la empresa Epic Games, lanzado como'+
    'diferentes paquetes de software que presentan diferentes'+
    'modos de juego, pero que comparten el mismo motor'+
    'general de juego y las mecánicas. Fue anunciado en los'+
    'Spike Video Game Awards en 2011.',
    img:'assets/img/ps4/fornite.jpg',
    lanzamiento:'2017',
    consola:'PS4'

    },

    {nombre: 'God of war',
    descripcion: 'God of War es un videojuego de acción-aventura desarrollado por SCE Santa Monica Studio y publicado por Sony Interactive Entertainment. Su lanzamiento se produjo el 20 de abril de 2018 como un título exclusivo para la consola PlayStation 4.​ Posteriormente, fue lanzado en Microsoft Windows el 14 de enero de 2022.​',
    img:'assets/img/ps4/godOfWar.jpg',
    lanzamiento:'2018',
    consola:'PS4'},

    {nombre: 'Uncharted 4: el desenlace del ladrón',
    descripcion:'Uncharted 4: El desenlace del ladrón es un videojuego de acción-aventura en tercera persona, lanzado el 10 de mayo de 2016, distribuido por Sony Computer Entertainment y desarrollado por Naughty Dog exclusivamente para PlayStation 4.​ ',
    img:'assets/img/ps4/uncharted.jpg',
    lanzamiento:'2016',
    consola:'PS4'},

    {nombre: 'Crash bandicoot 4: it´s about time',
    descripcion:'Crash Bandicoot 4: It´s About Time es un videojuego de plataformas, diseñado por Toys for Bob y publicado por Activision. El videojuego es la octava entrega de la serie Crash Bandicoot, secuela de Crash Bandicoot N. Sane Trilogy y que toma lugar después de los eventos de Crash Bandicoot 3: Warped.​​​',
    img:'assets/img/ps4/crash.jpg',
    lanzamiento:'2018',
    consola:'PS4'},

    {nombre: 'Call of Duty: Vanguard',
    descripcion:'Call of Duty: Vanguard es un videojuego de disparos en primera persona desarrollado por Sledgehammer Games y distribuido por Activision.​ Es el decimoctavo título de la franquicia Call of Duty. ',
    img:'assets/img/ps4/callOfDuty.jpg',
    lanzamiento:'2021',
    consola:'PS4'},

    {nombre: 'Battlefield 6',
    descripcion:'Battlefield 2042 es un videojuego de disparos y acción bélica en primera persona, desarrollado por DICE y distribuido por Electronic Arts.​ El videojuego será lanzado el 19 de noviembre del 2021 en las plataformas PlayStation 4, PlayStation 5, Xbox One, Xbox Series X y Series S, y Windows.',
    img:'assets/img/xbox/battlefield.jpg',
    lanzamiento:'2021',
    consola:'Xbox'},

    {nombre: 'Halo infinite',
    descripcion:'Halo Infinite es un videojuego de disparos en primera persona de la franquicia de videojuegos de ciencia ficción creada por Bungie Studios y actualmente desarrollada por 343 Industries. Es exclusivo para las plataformas Xbox One, Microsoft Windows y Xbox Series X|S.',
    img:'assets/img/xbox/halo.jpg',
    lanzamiento:'2021',
    consola:'Xbox'},

    {nombre: 'Far Cry 6',
    descripcion:'Far Cry 6 es un videojuego de disparos en primera persona desarrollado por Ubisoft Toronto y publicado por Ubisoft. Es la sexta entrega principal de la serie Far Cry, fue lanzado el 7 de octubre del 2021 para las plataformas de Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S y Google Stadia. ',
    img:'assets/img/xbox/farCry.jpg',
    lanzamiento:'2021',
    consola:'Xbox'},

    {nombre: 'Watch Dogs: Legion',
    descripcion:'Watch Dogs: Legion es un videojuego perteneciente al género de acción y aventura desarrollado por Ubisoft Toronto y publicado por Ubisoft lanzado oficialmente el 29 de octubre de 2020. Es la tercera entrega de la serie Watch Dogs y la secuela de Watch Dogs 2.',
    img:'assets/img/xbox/watchDogs.jpg',
    lanzamiento:'2020',
    consola:'Xbox'},

    {nombre: 'Control',
    descripcion:'Control es un videojuego de acción-aventura y disparos en tercera persona desarrollado por Remedy Entertainment y distribuido por 505 Games. Fue lanzado el 27 de agosto de 2019 en las plataformas Stadia, Microsoft Windows, PlayStation 4, Xbox One y Nintendo Switch.​',
    img:'assets/img/xbox/control.jpg',
    lanzamiento:'2019',
    consola:'Xbox'},

];

constructor(){
    console.log('Servicio listo para usarse');
    
    }

getVideojuegos (): Videojuego[] {
    return this.videojuegos;
}

getVideojuego (idx: number) {
    return this.videojuegos[idx];
}
buscarVideojuego (termino: string): Videojuego[] {
    let videojuegosArr: Videojuego[] = [];

    termino = termino.toLowerCase();

    for (let videojuego of this.videojuegos){
        let nombre = videojuego.nombre.toLowerCase();
        if( nombre.indexOf( termino ) >= 0) {
            videojuegosArr.push(videojuego);
    }
}
    return videojuegosArr;
    }

}

export interface Videojuego {
    nombre: string;
    descripcion: string;
    img: string;
    lanzamiento: string;
    consola: string;
}
