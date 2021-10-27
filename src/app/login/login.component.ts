import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:any;
  constructor(private router:Router) { }
login(name:any,pass:any){
  this.username=localStorage.getItem("username")
  if(this.username==name)
  {
    alert("logged in")
    this.router.navigateByUrl("home");
  }else
  {
    alert("enter valid username & pass")
  }
}

  ngOnInit(): void {
  }

}
