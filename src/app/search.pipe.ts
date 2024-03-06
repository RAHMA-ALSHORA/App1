import { Pipe, PipeTransform } from '@angular/core';
import {prod} from './interface/prod'

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(pduct:prod[],searchword:string):prod[]{
    return  pduct.filter((pduct)=>{return pduct.category.name.includes(searchword) || pduct.title.includes(searchword)});
  }

}
