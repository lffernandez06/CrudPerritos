

export interface DogModel {
  message: { [key: string]: string[] };
  status:  string;
}

export interface DogBreedModel {
  id: number;
  name: string,
  subBreeds: string[]
  url: string;
}

    export interface DogCard {
    breed: string,
    imageUrl: string,
    id: number,
  }

