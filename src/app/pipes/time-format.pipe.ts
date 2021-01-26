
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'TimeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(hour) {

    var res = hour.split(":");
    var singleHhour = res[0];
    var singleMinute = res[1];

    if(singleHhour >= 12){
      return hour + ' PM';
    }else{
      if(singleHhour == "00"){
        return '12:'+singleMinute+ 'AM';
      }else{
        return  hour + ' AM';
      }
    }
  }

}


