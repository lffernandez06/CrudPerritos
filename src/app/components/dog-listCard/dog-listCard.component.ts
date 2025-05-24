import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { SeacrhBoxComponent } from "../search-box/seacrh-box/seacrh-box.component";
import { DogCardsComponent } from "../dog-card/dog-cards/dog-card.component";
import { DogListComponent } from "../dog-list/dog-list/dog-list.component";
import { DogBreedModel, DogCard } from '../../interfaces/dog-interfaces';
import { DogService } from '../../services/dog.services';





@Component({
  selector: 'dog-listCard-component',
  imports: [SeacrhBoxComponent, DogCardsComponent, DogListComponent],
  templateUrl: './dog-listCard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DogListCardComponent  {









  searchDogByName = signal<string>('');
  newlistCardsDog = signal<DogBreedModel[]>([]);
  newlistDog = signal<DogBreedModel[]>([]);
  dogService = inject(DogService);
  dogUrl = signal('');
  dogName = signal('');
  dogId = signal(0);

  constructor(){
    this.createList();
  }


newName(name: string) {
  this.searchDogByName.set(name);
}

createList(){
  this.dogService.loadingListDogs().subscribe((resp)=>
      this.newlistDog.set(resp)
    )
}

loadListFilter = computed(()=>
    this.newlistDog().filter(dog =>
      dog.name.toLowerCase().startsWith(this.searchDogByName().toLowerCase())
    )
  )

  setImageDog(dogUrl:string) {
    this.dogUrl.set(dogUrl);
  }

  setDogName (dogName:string){
    this.dogName.set(dogName);
  }

  setDogId( dogId:number){
    this.dogId.set(dogId);
  }


  addDog() {

  this.newlistCardsDog.update((dogs) => [
    ...dogs,
    {
        id: this.dogId(),
        name: this.dogName(),
        url: this.dogUrl(),
        subBreeds: [],
    }
  ]);


  this.dogName = signal('');
  this.dogId = signal(0);
  this.dogUrl = signal('');

  }


  removerCard(dogIdDeleted: number) {
     this.newlistCardsDog.update((dogs) => dogs.filter((dog) => dog.id !== dogIdDeleted));
  }


}
