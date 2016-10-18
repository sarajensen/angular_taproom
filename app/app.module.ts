import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { KegListComponent } from './keg-list.component';
import { NewKegComponent } from './new-keg.component';
import { PourBeerComponent } from './pour-beer.component';
import { FullnessPipe } from './fullness.pipe';
import { EditKeg } from './edit-keg.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    KegListComponent,
    NewKegComponent,
    PourBeerComponent,
    FullnessPipe,
    EditKeg,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
