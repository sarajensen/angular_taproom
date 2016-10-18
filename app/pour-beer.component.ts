import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector:'pour-beer',
  template:`
    <button (click)="pourButtonClicked(childKeg)">Pour Beer</button>
  `
})

export class PourBeerComponent {
  @Input() childKeg: Keg;
  @Output() pourBeerSender = new EventEmitter();
  pourButtonClicked(childKeg) {
    childKeg.pints -=20;
  }
}
