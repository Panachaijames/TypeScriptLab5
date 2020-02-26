import { Component, OnInit } from '@angular/core';
import {InterestService} from '../Services/interest.service';
@Component({
  selector: 'app-mortgage',
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.css']
})
export class MortgageComponent implements OnInit {

  Total: number;
  years:number;
  constructor(private interestServices: InterestService) { }

  calculateinterest(): void{
    this.Total = this.interestServices.calculateinterest(this.years);
  }

  ngOnInit(): void {
  }
  


}
