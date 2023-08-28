import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { VideogamelistComponent } from './videogamelist/videogamelist.component';
import { AddvideogameComponent } from './addvideogame/addvideogame.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    VideogamelistComponent,
    AddvideogameComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
