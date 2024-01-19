import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private form:UserService,private router:Router) { }

  ngOnInit(): void {
  }

Login(f:NgForm){
  let user =f.value
  // console.log(data)
  this.form.userLogin(user).subscribe(response=>{
    alert("Successfully ")
    this.router.navigate(['/details']);
  },error=>alert("Sorry enter correct you email and password"));

    
  }
}



