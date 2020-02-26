import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterestService {

  constructor() { }

  Total: number=0;
  Amount: number = 5000;
  interestRate: number = 0.01;
  annualCompound: number = 1;
  
  calculateinterest(years:number): number {
    for (var counter: number = 1; counter < years + 1; counter++) {
      this.Total = this.Amount * Math.pow((1 +
        this.interestRate / this.annualCompound),
        (this.annualCompound * counter));
    }
    return this.Total;
  }
}
