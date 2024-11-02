

export interface CharacterInterface {
  _id: string;
  cocheName: string;
  cocheImg: string;
  cocheModel: number;
  cochePower: number;
  cochePrice: number;
  cochefuel: string;
  cocheColor:string
}


export interface CharacterResponseInterface{
  data:{

    nextPage: string;

    prevPage: string;
  };
  coches:CharacterInterface[];

}


export interface _idInterface {
  _id: string;
}

export interface CarsInterface {

  cocheName: string;
  cocheImg: string;
  cocheModel: number;
  cochePower: number;
  cochePrice: number;
  cochefuel: string;
  cocheColor:string
}

export interface User{
  apellidos: string;
  direccion: string;
  email: string;
  nombre:string;
  password: string;
  role: string;
  telefono: number;
  username: string;
  _id: string;
}

export interface response{
  token: string;
  userInfo: User;
}

export interface obj{
  email: string;
  password: string;
}

