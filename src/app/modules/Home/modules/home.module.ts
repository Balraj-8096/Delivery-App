import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { HomePageComponent } from '../components/home-page/home-page.component';
import { MenuComponent } from '../components/menu/menu.component';


@NgModule({
  declarations: [
    HomePageComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
