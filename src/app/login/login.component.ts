import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CommonService} from "../common.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email:any;
  username:any;
  mobile:any;
  password:any;
  value:any;
  obj:any;
  
  constructor(private router:Router,private service:CommonService) { }

  ngOnInit() {
    this.getData()
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


  registerDetails(){
    this.obj={
      email:this.email,
      username:this.username,
      mobile:this.mobile,
      password:this.password
    }
    this.service.registerData(this.obj).subscribe(data=>{
      console.log(data)
      alert(data['message']) 
    })

  }

  getData(){
    this.service.getData().subscribe(data=>{
      console.log(data)
    })
  }
}

/*
sessStorage store value in key pair
setItem() has two parameter
1,key
2,value
*/
