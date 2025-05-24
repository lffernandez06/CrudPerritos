import { ChangeDetectionStrategy, Component, inject, input, output, signal } from '@angular/core';
import { DogBreedModel } from '../../../interfaces/dog-interfaces';
import { DogService } from '../../../services/dog.services';





@Component({
  selector: 'dog-list-component',
  imports: [],
  templateUrl: './dog-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class DogListComponent {


  dogService = inject(DogService);
  dogList = input.required<DogBreedModel[]>();
  dogUrl = output<string>();
  dogName = output<string>();
  dogId = output<number>();

  pickDog(dogName:string, dogId: number) {
   this.dogService.loadDogsbyName(dogName).subscribe((resp)=>
     this.dogUrl.emit(resp.message),


    )
  this.dogName.emit(dogName),
  this.dogId.emit(dogId)
  }


}
