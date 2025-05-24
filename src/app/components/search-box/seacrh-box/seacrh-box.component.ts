import { ChangeDetectionStrategy, Component, inject, output, signal } from '@angular/core';
import { DogService } from '../../../services/dog.services';
import { DogBreedModel } from '../../../interfaces/dog-interfaces';
import { map } from 'rxjs';


export interface DogInter {
    	url:string,
      dogName:string,
  }


@Component({
  selector: 'seacrh-box-component',
  imports: [],
  templateUrl: './seacrh-box.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})



export class SeacrhBoxComponent {



  listDog = output<DogBreedModel[]>();
  dogsService = inject(DogService);
  loadListDogs = signal<DogBreedModel[]>([])
  loadListByName = output<string>();

  onSearch(){



  }

  onNewSearch(newDog:string){

    this.loadListByName.emit(newDog);
  }

  // onNewSearch(newDog: string) {
  //    this.dosService.loadDogsbyName(newDog).subscribe(
  //     (resp)=>{
  //     this.loadListByName.emit(resp.message);

  //   })
  // }


}
