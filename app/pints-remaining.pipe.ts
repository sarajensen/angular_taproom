import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "pintsRemaining",
  pure: false
})

export class PintsRemaining implements PipeTransform {
  transform(input: Keg[], pints){
    
  }
}
