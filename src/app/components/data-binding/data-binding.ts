import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  courseName: string = "Angular 20 Tutorial";
  productPrice: number = 12500;
  maxLength: number = 5;
  minChar: number = 3;
  inputType: string = "checkBox"
  myClassName: string = "myColor";


  constructor(){
    // this.courseName = 
  }

  showWelcomeMessage() {
    alert("welcome to Angular 20")
  }

  changeCourseName() {
    this.courseName = "Reactjs Tutorial"
  }

  onCityChange(){
    alert("City Changed")
  }
}
