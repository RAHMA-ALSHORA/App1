import { Component, OnInit } from '@angular/core';
import { CatigService } from 'src/serves/catig.service';

@Component({
  selector: 'app-catrg',
  templateUrl: './catrg.component.html',
  styleUrls: ['./catrg.component.css']
})
export class CatrgComponent implements OnInit {
  constructor(private _catig:CatigService){}
  catigutem:any
  subcatig:any
  ngOnInit():void{
    this.getcat()
  }
  getcat():void{
    this._catig.getcatig().subscribe({
      next:(res)=>{
        this.catigutem=res.data
        console.log(this.catigutem)
      }
    })
  }

  getsbcatig(id:string):void{
    this._catig.getsbccatig(id).subscribe({
      next:(resp)=>{
        this.subcatig=resp.data
        console.log(this.subcatig)
        document.querySelector('.head')?.classList.remove('d-none')
      }
    })
  }

}
