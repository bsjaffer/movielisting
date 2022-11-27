import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateFormat',
  standalone: true,
})
export class DateFormat implements PipeTransform {
  transform(value: string, pretext: string): string {
    return moment(value).format(pretext || 'LL');
  }
}
