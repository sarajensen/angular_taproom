import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';
import { PourBeerComponent } from './pour-beer.component';

// <div [class.enterclassname]="condition of childKeg">
// </div>

@Component ({
  selector: 'keg-list',
  template: `
  <keg-form (newKegSender)="addKeg($event)"></keg-form>
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all" selected="selected">Show All</option>
    <option value="almostEmpty">Almost Empty</option>
    <option value="full">Show Full</option>
  </select>
    <div *ngFor="let currentKeg of kegList | fullness:selectedFullness">
      <div [class.schwagBeer]="currentKeg.price < 5">
        <h3>{{ currentKeg.name }}</h3>
        <p>{{ currentKeg.brand }}, {{ currentKeg.style}}, {{ currentKeg.price}}, {{ currentKeg.abv}}, {{currentKeg.pints}}</p>
        <pour-beer [childKeg]="currentKeg"></pour-beer>
          <progress class="keg-progress-bar" max="124" [value]="currentKeg.pints">
          </progress>
        <button (click)="editButtonHasBeenClicked(currentKeg)">Edit</button>
      </div>
    </div>
  `
})


export class KegListComponent {
  @Output() clickSender = new EventEmitter();
  public kegList: Keg[] = [];
  addKeg(newKegFromChild: Keg) {
    this.kegList.push(newKegFromChild);
  }
  public
  public selectedFullness: string = "all";
  onChange(optionFromMenu){
    this.selectedFullness = optionFromMenu;
    console.log(this.selectedFullness);
  }
  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
}
