import { Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let _Router=Inject(Router)
  if(localStorage.getItem('usertoken')!==null){
    return true;
  }else{
    _Router.navigate(['/log in'])
    return false
  }
  
};
