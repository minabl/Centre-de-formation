import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TousformationComponent } from './component/tousformation/tousformation.component';
import { FormationDetailsComponent } from './component/formation-details/formation-details.component';
import { SharedModule } from '../shared/shared.module';
import { FormationComponent } from './component/formation/formation.component';



@NgModule({
  declarations: [TousformationComponent, FormationDetailsComponent, FormationComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FormationsModule { }
