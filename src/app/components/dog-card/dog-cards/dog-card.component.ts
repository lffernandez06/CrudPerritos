import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { DogBreedModel } from '../../../interfaces/dog-interfaces';




@Component({
  selector: 'dog-card-component',
  imports: [],
  templateUrl: './dog-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DogCardsComponent {


  dogImage = input<string>('');
  dogId = input<number>();
  dogName = input<string>();
  dogListCards = input<DogBreedModel[]>();
  dogIdDeleted = output<number>();

    removeCard(idDog: number) {
    this.dogIdDeleted.emit(idDog);
    }


}
