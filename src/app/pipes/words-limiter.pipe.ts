import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordsLimiter'
})
export class WordsLimiterPipe implements PipeTransform {

  transform(value: any, ...args:number[]): unknown {
    return `${value.substring(0,args)}...`
  }

}
