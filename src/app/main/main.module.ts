import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { NgPipesModule } from 'ngx-pipes';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    NgPipesModule,
  ],
  declarations: [MainComponent],
})
export class MainModule {}
