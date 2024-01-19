import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private form:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  register(f:NgForm){
    let user =f.value
      // console.log(data)
      this.form.registeruser(user).subscribe(response=>{
        console.log(response)
        alert("Successfully user is register?")
        this.router.navigate(['/details'])
      },error=>alert("Sorry user not register"));
  
        
      }

}
