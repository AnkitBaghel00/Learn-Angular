import { DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../../pipe/na-pipe';

@Component({
  selector: 'app-pipe-ex',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe,JsonPipe, NaPipe],
  templateUrl: './pipe-ex.html',
  styleUrl: './pipe-ex.css',
})
export class PipeEx {

  courseName = "angular";
  courseDuration = "DURATION IS 3 month"

  currentDate: Date = new Date();

  studentObj: any = {
    name: 'AAA',
    mobile: '9999797',
    address: {
      city:'Pune',
      state:""
    }
  }

  

} 
