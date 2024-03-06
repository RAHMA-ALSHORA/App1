import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OuthService } from 'src/serves/outh.service';



@Component({
  selector: 'app-regist',
  templateUrl: './restpass.component.html',
  styleUrls: ['./restpass.component.css']
})
export class RestpassComponent  {
  isloading:boolean=false
  errors!:string
  constructor(private _auth:OuthService , private _rout:Router){

  }
    
  restform = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      newPassword: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{8}$/)]),
      rePassword: new FormControl(null),
    },{validators:[this.conpass]} as FormControlOptions)
   
    conpass(group:FormGroup):void{
      const pass=group.get('newPassword')
      const repass = group.get('rePassword')
      if(repass?.value===''){
        repass.setErrors({required:true})
      }else if(pass?.value!==repass?.value){
        repass?.setErrors({miss:true})
      }
    }

  restpass(form:FormGroup){
   this.isloading=true;
    if(this.restform.valid){
      this._auth.resetpass(form.value).subscribe({
        next:(response)=>{
            this._rout.navigate(['/log in'])
            this.isloading=false;
        },
        error:(err)=>{
          this.errors=err.error.message
        },
      })
    }

  }

}

{

}
