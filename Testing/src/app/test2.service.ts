import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Test2Service {
bigTest = "Wow, what a big test.";
thanks = "Thank You";
  constructor() { }

  bigTesty(){
    return this.bigTest;
  }

  giveThanks(){
    return this.thanks;
  }

}


