import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartsService } from 'src/serves/carts.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
caerid:string=''
  constructor(private _cart:CartsService){}
  check = new FormGroup({
    details: new FormControl(),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^(002)?(01)[0125][0-9]{8}$/)]),
    city: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
  })

  ngOnInit():void{
    this.getmycard()
   }

  payform(Form:FormGroup){
    console.log(Form.value)
    this._cart.checkout(this.caerid,Form.value).subscribe({
    next:(res)=>{
         console.log(res)
         window.location=res.session.url   
    },
    error:(err)=>{

    }
    })
  }

  getmycard(){
    this._cart.getcart().subscribe({
      next:(response)=>{
       this.caerid=response.data._id 
      }
    })
  }


}
