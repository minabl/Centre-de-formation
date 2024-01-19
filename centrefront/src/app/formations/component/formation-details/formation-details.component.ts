import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormationService } from '../../services/formation.service';

@Component({
  selector: 'app-formation-details',
  templateUrl: './formation-details.component.html',
  styleUrls: ['./formation-details.component.css']
})
export class FormationDetailsComponent implements OnInit {
id:any 
data:any= {}//pour stocker data 
loading:boolean = false

  constructor(private route:ActivatedRoute, private service:FormationService) {
   this.id = this.route.snapshot.paramMap.get("id")
   console.log(this.id)
  }

  ngOnInit(): void {
    this.getFormation()
  }

getFormation(){
  
  this.service.getFormationById(this.id).subscribe(res => {
    this.data = res;
  })
}
}
