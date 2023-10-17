import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string): string {
    const datePipe = new DatePipe('en-US');
    const currentDate = new Date();
    const inputDate = new Date(value);

    if (
      currentDate.getUTCFullYear() === inputDate.getUTCFullYear() &&
      currentDate.getUTCMonth() === inputDate.getUTCMonth() &&
      currentDate.getUTCDate() === inputDate.getUTCDate()
    ) {
      return 'Today';
    } else if(
      currentDate.getUTCFullYear() === inputDate.getUTCFullYear() &&
      currentDate.getUTCMonth() === inputDate.getUTCMonth() &&
      currentDate.getUTCDate() - 1  === inputDate.getUTCDate()) {
      return 'Yesterday';
    } else {
      return datePipe.transform(value, 'MMM-dd-yyyy'); // Formato por defecto si no es 'Today'
    }
  }
}
