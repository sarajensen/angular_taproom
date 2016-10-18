import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { KegListComponent } from './keg-list.component';
import { NewKegComponent } from './new-keg.component';
import { PourBeerComponent } from './pour-beer.component';
import { FullnessPipe } from './fullness.pipe';


@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    KegListComponent,
    NewKegComponent,
    PourBeerComponent,
    FullnessPipe,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
