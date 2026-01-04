import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css',
})
export class SignalEx {
firstName: string = "Ankit";
productName = "Moto";

courseName = signal<string>("Angular");
courseDuraction = signal("15 Videos");

courseDetail = computed(()=> this.courseName() + " " + this.courseDuraction())

constructor(){

  this.firstName = "Shiv";
  console.log(this.firstName);
  
   setTimeout(() => {
        this.courseName.set("React");
   }, 5000)


}
}
