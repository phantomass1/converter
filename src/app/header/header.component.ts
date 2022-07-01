import { Component, OnInit } from '@angular/core';
import {Data} from "../data/data";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  buyUSD = ""
  buyEUR = ""
  buyBTC = ""
  sellUSD = ""
  sellEUR = ""
  sellBTC = ""


  async ngOnInit(): Promise<void> {
    const courses = await Data.getData();
    const buyBTC = (Number(courses[2].buy) * Number(courses[0].buy)).toFixed(2);
    const buyUSD = Number(courses[0].buy).toFixed(2);
    const buyEUR = Number(courses[1].buy).toFixed(2);
    const sellBTC = (Number(courses[2].sale) * Number(courses[0].sale)).toFixed(2);
    const sellUSD = Number(courses[0].sale).toFixed(2);
    const sellEUR = Number(courses[1].sale).toFixed(2);
    this.buyUSD = buyUSD;
    this.buyEUR = buyEUR;
    this.buyBTC = buyBTC;
    this.sellBTC = sellBTC;
    this.sellUSD = sellUSD;
    this.sellEUR = sellEUR;
  }
}
