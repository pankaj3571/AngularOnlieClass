import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email:any;
  password:any
  value:any;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  move(event){
    console.log(event)
    this.value=event.email
    sessionStorage.setItem('email',this.value)
    this.match()

  }

  match(){
    console.log("inside")
    if(this.value==sessionStorage.getItem('email')){
      this.router.navigate(['/dashboard'])
      alert("mathed")
    }
    else{
      alert('not matched')
    }
  }
}

/*
sessStorage store value in key pair
setItem() has two parameter
1,key
2,value
*/
