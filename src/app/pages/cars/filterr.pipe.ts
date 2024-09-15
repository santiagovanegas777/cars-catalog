import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterr'
})
export class FilterrPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultCharacter = [];
    for(const character of value){
      if(character.cocheName.toLowerCase().indexOf(arg.toLowerCase()) > -1){
      resultCharacter.push(character);
      }

    }
    return resultCharacter;
  }

}
