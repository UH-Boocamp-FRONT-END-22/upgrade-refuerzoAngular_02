import { Component, OnInit } from '@angular/core';
import { IPeople, IPhoto, ICar } from './../../interface/people';

@Component({
  selector: 'app-id-cards',
  templateUrl: './id-cards.component.html',
  styleUrls: ['./id-cards.component.css']
})


export class IdCardsComponent{

  public myPeople: IPeople[] = [
    {
      name: 'El Chucky de Cieza',
      age: 31,
      img: {
        src: 'https://pbs.twimg.com/ext_tw_video_thumb/1323770217739227140/pu/img/PR32J1TSVB6XiElb.jpg:large',
        alt: 'El Chucky de Cieza'
      },
      ownCar: false,
      ownHouse: true,
      hairStyle: "Bisbal on Crack",
      eyeColor: "brown",
      kids: 0,
      pets: 0,
      message: 'Te has comio 20 pastillones y no me has dao ni media'
    },
    {
      name: 'Ramon de Pitis',
      age: 92,
      img: {
        src: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2021/09/24/16324833639372.jpg',
        alt: 'Ramón de Pitis'
      },
      ownCar: false,
      ownHouse: true,
      hairStyle: "Clásico Galante",
      eyeColor: "brown",
      kids: 0,
      pets: 0,
      message: 'Yo soy un vanidoso, sólo visto de Emidio Tucci'
    },
    {
      name: 'El Tomate',
      age: 28,
      img: {
        src: 'https://i.imgur.com/lP91X6K.jpg',
        alt: 'El tomate'
      },
      ownCar: true,
      ownHouse: false,
      hairStyle: "Degradaito SERRE7",
      eyeColor: "brown",
      kids: 0,
      pets: 0,
      message: 'El que la saca para enseñarla, es un parguela'
    },
    {
      name: 'El Guardián de las Estrellas',
      age: 200,
      img: {
        src: 'https://i.ytimg.com/vi/QYffoaQsmVk/mqdefault.jpg',
        alt: 'El Guardián de las Estrellas'
      },
      ownCar: true,
      ownHouse: true,
      hairStyle: "Boina forrada de papel de aluminio",
      eyeColor: "brown",
      kids: 5.000,
      pets: 5.000,
      message: 'El rey de España es mi padre'
    }
  ]

  // public ownsCar: ICar = [
  //   {
  //     name: '',
  //     src: '',
  //     alt: ''
  //   }

  // ]


}
