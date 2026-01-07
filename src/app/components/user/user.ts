import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {

  userList: any[] = []
  userObj: any = {
  "userId": 0,
  "emailId": "",
  "password": "",
  "fullName": "",
  "mobileNo": ""
}

  http = inject(HttpClient);

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((Res:any) => {
      this.userList = Res
    });
  }



  onSaveUser(){
    debugger;
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register",this.userObj).subscribe({
      next:()=>{
        debugger;
        alert("User Created Success");
        this.getUsers()
      },
      error:(error)=>{
        debugger;
        alert("Error - " + error)
      }}
    )
  }

  onReset(){
      this.userObj = {
  "userId": 0,
  "emailId": "",
  "password": "",
  "fullName": "",
  "mobileNo": ""
}
  }

  onUpdateUser(){
    this.http.put("https://api.freeprojectapi.com/api/GoalTracker/updateUser?id=" + this.userObj.userId, this.userObj).subscribe({
      next:()=>{
        alert("User details updated");
        this.getUsers()
      },
      error:(error)=>{
        alert("Error - "+ error)
      }
    })

  }

  onEdit(item: any){
    this.userObj = item

  }

  onDeleteUser(id: number){
    const isDelet = confirm("Are you sure want to delete");
      if(isDelet){
     this.http.delete("https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id=" + id).subscribe({
      next:()=>{
        alert("User delete success");
        this.getUsers()
      },
      error:(error)=>{
        alert("Error - "+ error)
      }
    })
  }
}

  }
