import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter/filter.pipe';

@NgModule({
  declarations: [
    FilterPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  exports:[
    FilterPipe
  ],
  providers: [],
  bootstrap: []
})

export class PipesModule { }