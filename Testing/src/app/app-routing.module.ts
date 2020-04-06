import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestAnimationComponent } from './test-animation/test-animation.component';


const routes: Routes = [
  {path: 'animation', component: TestAnimationComponent},
  {path: '',
  redirectTo: '/animation',
  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
