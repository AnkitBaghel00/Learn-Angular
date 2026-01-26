import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-reactive-user',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-user.html',
  styleUrl: './reactive-user.css',
})
export class ReactiveUSer implements OnInit {

  userList: any[] = []
  http = inject(HttpClient);

  userForm: FormGroup = new FormGroup({
    userId: new FormGroup(0),
    emailId: new FormGroup(""),
    password: new FormGroup(""),
    fullName: new FormGroup(""),
    mobileNo: new FormGroup("")  
  });

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((Res:any) => {
      this.userList = Res
    });
  }

  onSaveUser(){
    const formValue = this.userForm.value;
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register",formValue).subscribe({
      next:()=>{
        
        alert("User Created Success");
        this.getUsers()
      },
      error:(error)=>{
        
        alert("Error - " + error.error)
      }}
    )
  } 


}

