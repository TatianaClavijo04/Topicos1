import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RetablosComponent } from './retablos.component';

import { RetablosPageRoutingModule } from './retablos-routing.module';
import {LayoutModule} from '../../shared/layout/layout.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RetablosPageRoutingModule,
    LayoutModule,
    NgZorroAntdModule,

  ],
  declarations: [RetablosComponent],
  exports: []
})
export class RetablosPageModule{}
