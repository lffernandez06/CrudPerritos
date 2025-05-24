

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map, Observable } from 'rxjs';
import { DogBreedModel, DogModel } from '../interfaces/dog-interfaces';

@Injectable({providedIn: 'root'})
export class DogService {



  private http = inject(HttpClient);

    generateId(): number {
      return Math.floor(Math.random() * 1000000);
    }

  loadingListDogs():Observable<DogBreedModel[]>{



     return this.http.get<{message:DogModel}>(`${environment.apiUrl}/breeds/list/all`)
     .pipe<DogBreedModel[]>(
      map((response) => {
        let idCounter = this.generateId();
        return Object.entries(response.message).map(([name, subBreeds]) => ({
          id: idCounter++,
          name,
          subBreeds,
          url: `${environment.apiUrl}/breeds/list/all`,
        }))

     }))

  }

  loadDogsbyName(name:string){

   return this.http.get<{message:string}>(`${environment.apiUrl}/breed/${name}/images/random`);

  }
  // EL CODIGO ASI NO FUNCIONA HAY QUE COLOCAR RETURN
  // return this.http.get<{message:DogModel}>(`${environment.apiUrl}/breeds/list/all`)
  //    .pipe<DogBreedModel[]>(
  //     map((response) => { Object.entries(response.message).map(([name, subBreeds]) => ({
  //         name,
  //         subBreeds,
  //       }))

  //    }))

  // }


}
