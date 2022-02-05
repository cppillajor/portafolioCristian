import { Component, OnInit } from '@angular/core';
import { CvrtabangoService } from '../services/cvrtabango.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  
  profesional= [
    {"nombre":"JavaScript","valor":70},
    {"nombre":"PHP","valor":80},
    {"nombre":"HTML","valor":70},
    {"nombre":"Css","valor":60},
    {"nombre":"Flutter","valor":80},
    {"nombre":"Angular JS","valor":60},
    {"nombre":"CodeIgniter","valor":80},
    {"nombre":"C#","valor":50},
    {"nombre":"Java","valor":50},
    {"nombre":"SQL","valor":80},
    {"nombre":"GIT","valor":60},

  ];
  experiencia= [
    {"cargo":"Desarrollador Web y técnico de mantenimiento de computadoras","empresa":"U.E.C 'La Victoria'","fecha":"Marzo 2021 - Mayo 2021"},
    {"cargo":"Desarrollador Web","empresa":"Pide Rapidito","fecha":"Febrero 2021 - Octubre-2021"},

  ];
  educacion= [
    {"nombre":"Titulo de Ingeniero en Sistemas | Pontificia Universidad Católica del Ecuador SEDE Ibarra","fecha":"Octubre 2016 - Enero 2022"},
    {"nombre":"Titulo B.G.U | Colegio Checa School","fecha":"Julio 2016"},
    

  ];
  constructor() {  }

  

  ngOnInit(): void {
    
    
  }

}
