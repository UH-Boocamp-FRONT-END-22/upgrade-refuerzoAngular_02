export interface IPeople {
  name: string;
  age: number;
  img: IPhoto;
  hairStyle: string;
  eyeColor: string;
  message: string;
}

export interface IPhoto {
  src: string;
  alt: string;
}
