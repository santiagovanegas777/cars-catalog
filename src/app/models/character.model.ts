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
