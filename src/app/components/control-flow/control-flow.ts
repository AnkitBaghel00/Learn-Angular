import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {

  isParaVisiable: boolean = true;

  startMonthName: string = "feb";

  citList: string[] = ['Pune', 'Mumbai', 'Nagpur'];

  studentList: any [] = [
    {name: 'Ankit', city: 'Pune', isActive:false},
    {name: 'Rashika', city: 'Banaras', isActive:true},
    {name: 'Virat', city: 'Delhi', isActive:false},
    {name: 'Rohit', city: 'Mumbai', isActive:true}
  ];

  showP()
  {
    this.isParaVisiable = true;
  }
  hideP(){
    this.isParaVisiable = false;
  }

 

}
