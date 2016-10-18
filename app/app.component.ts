import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
  <h1>Give Me a Beer Bar</h1>
    <keg-list
      (clickSender)="showDetails($event)"
    ></keg-list>
    <edit-keg
      [childSelectedKeg]="selectedKeg"
      (doneClickedSender)="finishedEditing()"
    ></edit-keg>
  </div>
  `
})

export class AppComponent {
  selectedKeg = null;
  showDetails(clickedKeg: Keg) {
    this.selectedKeg = clickedKeg;
  }
  finishedEditing(){
    this.selectedKeg = null;
  }
}
