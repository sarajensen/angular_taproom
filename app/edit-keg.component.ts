import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Keg} from './keg.model';

@Component ({
  selector: 'edit-keg',
  template: `
    <div *ngIf="childSelectedKeg">
      <h1>Edit Keg</h1>
      <div>
        <label>Change name:</label>
        <input [(ngModel)]="childSelectedKeg.name">
        <label>Change brand:</label>
        <input [(ngModel)]="childSelectedKeg.brand">
        <label>Change style:</label>
        <input [(ngModel)]="childSelectedKeg.style">
        <label>Change price:</label>
        <input [(ngModel)]="childSelectedKeg.price">
        <label>Change abv:</label>
        <input [(ngModel)]="childSelectedKeg.abv">
        <button (click)="boomCookedDone()">Done</button>
      </div>
    </div>
  `
})

export class EditKeg {
  @Input() childSelectedKeg: Keg;
  @Output() doneClickedSender = new EventEmitter();
  boomCookedDone() {
    this.doneClickedSender.emit();
  }
}
