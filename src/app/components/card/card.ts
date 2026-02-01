import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {

  @Input({ required: true, alias: 'plan' }) planType: string = ''

  @Input({ required: true, alias: 'price' }) planPrice: number = 0

  @Input({ required: true }) cardStyle: 'orange' | 'purple' = 'orange'

  @Output('click') buttonClickedEmitt = new EventEmitter<void>()


  onButtonClicked() {
    this.buttonClickedEmitt.emit();
  }

}
