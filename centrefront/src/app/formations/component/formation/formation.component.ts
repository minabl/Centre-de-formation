import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  @Input()data:any=[] //pour envoyer de donne mel child --> parent
  @Output() item = new EventEmitter()//pour envoyer de donne mel parent --> child
  addButton:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  add(){
    this.item.emit({item:this.data})
  }
}
