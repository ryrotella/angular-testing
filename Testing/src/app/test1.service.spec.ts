import { TestBed } from '@angular/core/testing';

import { Test1Service } from './test1.service';

describe('Test1Service', () => {
  let service: Test1Service;
  let name: string = "ryan";
  let ssn: number = 111223333;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Test1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should match with the name: ryan', () =>{
    expect(name).toEqual(service.testo(name));
  });
  it('should match with the ssn: 111223333', () =>{
    expect(ssn).toEqual(service.isSocialSecurity(ssn));
  });
});
