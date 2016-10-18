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
      </div>
    </div>
  `
})

export class EditKeg {
  @Input() childSelectedKeg: Keg;
}
