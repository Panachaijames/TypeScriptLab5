import { Component, OnInit } from '@angular/core';
import {InterestService} from '../Services/interest.service';
@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {

  Total: number;
  years:number;
  constructor(private interestServices: InterestService) { }

  calculateinterest(): void{
    this.Total = this.interestServices.calculateinterest(this.years);
  }
  ngOnInit(): void {
  }
  



}
