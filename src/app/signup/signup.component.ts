import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
alertpass:any;
alertname:any;
alertpass1:any;
color="red";
  constructor(private router:Router) { }
  abc(name:any,pass:any,cpass:any)
  {
    if((pass==cpass)&&(pass!=="")&&(name!=""))
    {
      localStorage.setItem("username",name);
      localStorage.setItem("password",pass);
      this.router.navigateByUrl("login");
    }
    else{
      this.alertpass="enter same password";
      this.alertname="enter valid name";
      this.alertpass1="enter valid password";
    }
  }
  ngOnInit(): void {
  }

}
