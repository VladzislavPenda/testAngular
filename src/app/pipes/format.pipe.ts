import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'points'
})
export class FormatPipe implements PipeTransform {
  transform(value: number, args?: any): string {
    return value.toString() + " points";
  }
}
