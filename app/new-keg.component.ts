import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-form',
  template: `
  <h3>Tap dat Keg</h3>
  <label for="name">Name</label>
  <input #name>
  <label for="brand">Brand</label>
  <input #brand>
  <label for="style">Style</label>
  <input #style>
  <label for="price">Price</label>
  <input #price>
  <label for="abv">Alcohol by Volume</label>
  <input #abv>
  <button (click)="
    addKegClicked(name.value, brand.value, style.value, price.value, abv.value);
    name.value = '';
    brand.value = '';
    style.value = '';
    price.value = '';
    abv.value = '';
  ">Add Keg</button>
  `
})

export class NewKegComponent {
  // @Input() childKegList: Keg[];
  @Output() newKegSender = new EventEmitter();
  addKegClicked(name: string, brand: string, style: string, price: number, abv: number){
    var newKeg = new Keg(name, brand, style, price, abv);
    this.newKegSender.emit(newKeg)
  }
}
