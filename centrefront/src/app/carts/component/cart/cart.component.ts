import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartFormations:any[] = [];
  total:number = 0;
  
  constructor(private service:CartService) { }

  ngOnInit(): void {
    this.getCartFormations()
  }
  getCartFormations(){
    if("cart" in localStorage) {
      this.cartFormations = JSON.parse(localStorage.getItem("cart"))
    }
    this.getCartTotal()
  }
  getCartTotal() {
    this.total = 0
    for(let x in this.cartFormations) {
      this.total += this.cartFormations[x].item.prix ;
    }
  }
  
  
  clearCart() {
    this.cartFormations = []
    this.getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(this.cartFormations))
  }
  
  
  deleteFormation(index:number) {
    this.cartFormations.splice(index , 1)
    this.getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(this.cartFormations))
  }
 

  
  }
  


