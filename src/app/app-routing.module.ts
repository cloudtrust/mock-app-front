import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PocComponent } from './poc/poc.component';

const routes: Routes = [
  { path: 'poc', component: PocComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}