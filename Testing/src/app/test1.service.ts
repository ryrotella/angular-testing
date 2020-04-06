import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Test1Service {
  
  secretNum: number =  111223333;
  

  constructor() { }
  testo(name: string): string{
    return "ryan";
  }

  isSocialSecurity(ssn: number): number{
    return this.secretNum;
  }

}
