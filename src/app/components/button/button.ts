import { Component, EventEmitter, Input, Output } from '@angular/core';
import { required } from '@angular/forms/signals';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {

  @Input({ required: true, alias: 'text' }) buttonText: string = '';

  //posso receber um white ou purple do pai como parametro / padrao vai ser white
  @Input({ required: true, alias: 'style' }) buttonStyle: 'white' | 'purple' = 'white'

  @Output('clicked') buttonClickedEmitr = new EventEmitter<void>;



  onButtonClicked() {

    this.buttonClickedEmitr.emit();

  }


}
