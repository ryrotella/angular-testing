import { TestBed } from '@angular/core/testing';

import { Test2Service } from './test2.service';

describe('Test2Service', () => {
    let service: Test2Service;
    let testuo: string = "Wow, what a big test.";
    let thank: string = "Thank You Very Much.";

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(Test2Service);
      });

      it('should be created', () => {
          expect(service).toBeTruthy();
      });

      it ('should comment on the size of the test', () =>{
          expect(testuo).toBe(service.bigTesty());
      });

      it ('should contain: Thank You', () => {
        expect(thank).toContain(service.giveThanks());
      });
      
})