import { Component, OnInit } from '@angular/core';
import {Data} from "../data/data"


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  amount=""
  price = ""
  buyUSD = ""
  buyEUR = ""
  buyBTC = ""
  sellUSD = ""
  sellEUR = ""
  sellBTC = ""

  onKeyUp(event: Event){
    const select = document.querySelector('#select-out') as HTMLOptionElement;
    const option = select.value
    if(option === "USD"){
      const price = ((Number((<HTMLInputElement>event.target).value)/Number(this.buyUSD)).toFixed(4)).toString()
      this.price = price
    }
    if(option === "EUR"){
      const price = ((Number((<HTMLInputElement>event.target).value)/Number(this.buyEUR)).toFixed(4)).toString()
      this.price = price
    }
    if(option === "BTC"){
      const price = ((Number((<HTMLInputElement>event.target).value)/Number(this.buyBTC)).toFixed(6)).toString()
      this.price = price
    }
  }
  onKeyUpRe(event: Event){
    const select = document.querySelector('#select-out') as HTMLOptionElement;
    const option = select.value
    if(option === "USD"){
      const amount = ((Number((<HTMLInputElement>event.target).value)*Number(this.buyUSD)).toFixed(4)).toString()
      this.amount = amount
    }
    if(option === "EUR"){
      const amount = ((Number((<HTMLInputElement>event.target).value)*Number(this.buyEUR)).toFixed(4)).toString()
      this.amount = amount
    }
    if(option === "BTC"){
      const amount = ((Number((<HTMLInputElement>event.target).value)*Number(this.buyBTC)).toFixed(6)).toString()
      this.amount = amount
    }
  }

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
