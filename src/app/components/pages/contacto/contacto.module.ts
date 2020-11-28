import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactoComponent } from './contacto.component';

import { ContactoPageRoutingModule } from './contacto-routing.module';
import {LayoutModule} from '../../shared/layout/layout.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactoPageRoutingModule,
    LayoutModule,
    NgZorroAntdModule,

  ],
  declarations: [ContactoComponent],
  exports: []
})
export class ContactoPageModule{}

