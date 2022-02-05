import { Component, OnInit } from '@angular/core';
import { CvrtabangoService } from '../services/cvrtabango.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor(public cv: CvrtabangoService) { }
  portafolio =[
    {"tipo":"movil","imagen":"https://res.cloudinary.com/dltnfplos/image/upload/v1644099799/Captura_de_pantalla_2022-02-05_172256_xwmjsi.png","nombre":"Aplicación movil- Arriendo Inmobiliaria","descripcion":"Gestion de arriendos","link":"https://github.com/cppillajor/Flutter_arriendo_inmobiliario"},
    {"tipo":"web","imagen":"https://res.cloudinary.com/dltnfplos/image/upload/v1644100140/Captura_de_pantalla_2022-02-05_172842_bpdr0v.png","nombre":"Portafolio","descripcion":"Portafolio","link":"https://github.com/cppillajor/portafolioCristian"},
  ];

  ngOnInit(): void {
  }

}
