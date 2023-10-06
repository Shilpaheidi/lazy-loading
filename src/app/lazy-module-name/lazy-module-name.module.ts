import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyModuleNameRoutingModule } from './lazy-module-name-routing.module';
import { LazyModuleNameComponent } from './lazy-module-name.component';
import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponentNameComponent } from './lazy-component-name/lazy-component-name.component';


@NgModule({
  declarations: [
    LazyModuleNameComponent,
    LazyComponentNameComponent
  ],
  imports: [
    CommonModule,
    LazyModuleNameRoutingModule,
    LazyRoutingModule
  ]
})
export class LazyModuleNameModule { }
