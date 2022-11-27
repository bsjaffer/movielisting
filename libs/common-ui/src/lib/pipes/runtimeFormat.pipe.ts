

import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'runtimeFormat',
  standalone: true,
})
export class RuntimeFormat implements PipeTransform {
  transform(value: string): string {
    let runTime: any = moment.utc(moment.duration(value, 'minutes').asMilliseconds()).format('H:m');
    runTime = runTime.split(':');
    runTime = `${runTime[0]} h ${runTime[1]} m`;
    return runTime;
  }
}

