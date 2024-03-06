import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OuthService } from 'src/serves/outh.service';

@Component({
  selector: 'app-forgitpass',
  templateUrl: './forgitpass.component.html',
  styleUrls: ['./forgitpass.component.css']
})
export class ForgitpassComponent {
  constructor(private _auth:OuthService, private _rout:Router){}
   messagsucss:any;
   errmess:any;
  forgitpass=new FormGroup({
    email: new FormControl()
  })

  sendcod(form:FormGroup):void{
    this._auth.forgitpassword(form.value).subscribe({
      next:(response)=>{
       this.messagsucss=response.message;
       document.querySelector('.forgitpass')?.classList.add('d-none')
       document.querySelector('.verfcodde')?.classList.remove('d-none')
      },
      error:(err)=>{
       this.errmess=err.error.message
      }
    })

  }
  
  messagsuc:any;
  errmes:any;
  verfycod=new FormGroup({
  resetCode: new FormControl()
  })

  vercod(form:FormGroup):void{
   this._auth.verfcode(form.value).subscribe({
    next:(response)=>{
      this.messagsuc=response.message
      if(response.status==='Success'){
         this._rout.navigate(['/restpassword'])
      }
    },
    error:(err)=>{
       this.errmes=err.error.message
    }
   })
  }

}
