import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "fullness",
  pure: false
})

export class FullnessPipe implements PipeTransform {
  transform(input: Keg[], desiredFullness){
    var output: Keg[] = [];
    for(var i=0; i<input.length; ++i){
      if(input[i].pints <= 0){
        console.log("Warning! " + input[i].name + " is empty")
      }
    }
    if(desiredFullness === "almostEmpty"){
      for(var i=0; i<input.length; i++){
        if(input[i].pints < 10){
          output.push(input[i]);
        }
      }
      return output;
    }else if(desiredFullness === "full"){
      for(var i=0; i<input.length; i++){
        if(input[i].pints >= 10){
          output.push(input[i]);
        }
      }
      return output;
    }else{
      return input;
    }
  }
}
