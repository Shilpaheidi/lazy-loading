import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyComponentNameComponent } from './lazy-component-name/lazy-component-name.component';

const routes: Routes = [
  { path: '', component: LazyComponentNameComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyRoutingModule {}
