import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './components/demo/demo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DemoComponent],
  imports: [
    DemoRoutingModule,
    CommonModule,
    FormsModule,
    SharedModule,
  ]
})
export class DemoModule { }