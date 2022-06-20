export interface IPeople {
  name: string;
  age: number;
  img: IPhoto;
  hairStyle: string;
  eyeColor: string;
  ownCar: boolean;
  ownHouse: boolean;
  kids: number;
  pets: number;
  message: string;
}

export interface IPhoto {
  src: string;
  alt: string;
}

export interface ICar {
  name: string;
  src: string;
  alt: string;
}

