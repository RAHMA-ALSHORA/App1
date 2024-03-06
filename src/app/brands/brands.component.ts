import { Component, OnInit } from '@angular/core';
import { PrandService } from 'src/serves/prand.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  allprand:any
  sub= {
    name: ' ',
    slug: '',
    image: ' '
  }
  constructor(private _pran:PrandService){}
  ngOnInit(){
    this.getprand()
  }
  getprand():void{
    this._pran.getprand().subscribe({
      next:(res)=>{
         this.allprand=res.data
         console.log(this.allprand); 
      }
    })
  }

  subprand(id:string):void{
    this._pran.subpran(id).subscribe({
      next:(resp)=>{
         this.sub=resp.data
         console.log(this.sub)
         document.querySelector('.layer')?.classList.remove('d-none')
      }
    })
  }

  clos():void{
    document.querySelector('.layer')?.classList.add('d-none')
  }
}
