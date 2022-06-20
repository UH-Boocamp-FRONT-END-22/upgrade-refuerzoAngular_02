import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css']
})
export class CopyrightComponent {
  title: string = 'ESTO ES EL FOOTER';
  subtitle: string = 'CREADO POR DANI MARTÍNEZ';
}
