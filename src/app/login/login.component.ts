import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OuthService } from 'src/serves/outh.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _auth:OuthService , private _rout:Router){

  }
  errors!:string
  isloading:boolean=false;
  loginform = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{8}$/)]),
    });
  

  logsubmit(form:FormGroup){
    this.isloading=true;
    if(this. loginform.valid){
      this._auth.log(form.value).subscribe({
        next:(response)=>{
          if(response.message=='success'){
            localStorage.setItem('usertoken',response.token)
            this._auth.saveuserdata()
            console.log(response.token)
            this._rout.navigate(['/home'])
            this.isloading=false;
          }
        },
        error:(err)=>{
          this.errors=err.error.message
        },
      })
    }

  }

}
