import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filteruser'
})
export class FilteruserPipe implements PipeTransform {

  transform(value: any, arg: any): any {
   const resultUser = [];
   for(const user of value){
    if(user.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
      resultUser.push(user);
    }
   }
   return resultUser;
  }

}
