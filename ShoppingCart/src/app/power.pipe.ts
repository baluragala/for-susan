import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypower'
})
export class PowerPipe implements PipeTransform {

  transform(value: any, toPower:number): any {
    return Math.pow(value,toPower)
  }

}
