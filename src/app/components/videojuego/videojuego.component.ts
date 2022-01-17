import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideojuegosService } from 'src/app/services/videojuegos.service';

@Component({
  selector: 'app-videojuego',
  templateUrl: './videojuego.component.html',
 })
export class VideojuegoComponent {

  videojuego: any = {};

  constructor(private _videojuegoService: VideojuegosService,
              private activateRoute: ActivatedRoute) {
                this.activateRoute.params.subscribe( params => {
                  this.videojuego = this._videojuegoService.getVideojuego
                  (params['id'] );
                });
               }
}
