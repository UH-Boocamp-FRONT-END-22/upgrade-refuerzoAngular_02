import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdCardsComponent } from './id-cards/id-cards.component';



@NgModule({
  declarations: [
    IdCardsComponent
  ],
  exports: [
    IdCardsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BodyModule { }
