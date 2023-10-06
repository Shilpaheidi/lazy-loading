import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyModuleNameComponent } from './lazy-module-name.component';

const routes: Routes = [{ path: '', component: LazyModuleNameComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyModuleNameRoutingModule { }
