import { Component, OnInit } from '@angular/core';
import { FormationService } from '../../services/formation.service';

@Component({
  selector: 'app-tousformation',
  templateUrl: './tousformation.component.html',
  styleUrls: ['./tousformation.component.css']
})
export class TousformationComponent implements OnInit {
  formations:any[]=[];
  cartFormations:any[]=[];
  categorie:any[]=[];
  keyword:any;
  
  constructor(private service:FormationService ) { }

  ngOnInit(): void {
    this.getFormations()
  }
//------------------------------formation -----------------------//
  getFormations(){
    this.service.getTousFormations().subscribe((res:any)=>(
      this.formations = res
      //console.log(res)
    ))
  }

//---------------------------categorie--------------------------//

getcategorie(){
  this.service.getAllCategories().subscribe((res:any)=>(
    this.formations = res
    //console.log(res)
  ))
}
/*
filterCategory(event:any) {
  let value = event.target.value;
 (value == "all") ? this.getFormations() : this.getFormatByCate(value)
 
}*/


/*
getFormatByCate(){
  
  this.service.getFormationByCategory(this.keyword).subscribe(res => {
    this.categorie = res;
  })
}*/




  //------------------------cart------------------------------// 
    addToCart(event:any) {
      if("cart" in localStorage) {
        this.cartFormations = JSON.parse(localStorage.getItem("cart"))
        let exist = this.cartFormations.find(item => item.item.id == event.item.id)
        if(exist) {
          alert("Formation is already in your cart")
        }else {
          this.cartFormations.push(event)
          localStorage.setItem("cart" , JSON.stringify(this.cartFormations))
        }
      } else {
        this.cartFormations.push(event)
        localStorage.setItem("cart" , JSON.stringify(this.cartFormations))
      }
    }

}
