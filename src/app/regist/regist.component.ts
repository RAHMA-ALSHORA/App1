import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OuthService } from 'src/serves/outh.service';



@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent {
  isloading:boolean=false
  errors!:string
  constructor(private _auth:OuthService , private _rout:Router){

  }
    
  registform = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{8}$/)]),
      rePassword: new FormControl(null),
      phone: new FormControl(null, [Validators.required, Validators.pattern(/^(002)?(01)[0125][0-9]{8}$/)]),
    },{validators:[this.conpass]} as FormControlOptions)
   
    conpass(group:FormGroup):void{
      const pass=group.get('password')
      const repass = group.get('rePassword')
      if(repass?.value===''){
        repass.setErrors({required:true})
      }else if(pass?.value!==repass?.value){
        repass?.setErrors({miss:true})
      }
    }

  regsubmit(form:FormGroup){
   this.isloading=true;
    if(this.registform.valid){
      this._auth.regist(form.value).subscribe({
        next:(response)=>{
          if(response.message=='success'){
            this._rout.navigate(['/log in'])
          }
          this.isloading=false;
        },
        error:(err)=>{
          this.errors=err.error.message
        },
      })
    }

  }

}
