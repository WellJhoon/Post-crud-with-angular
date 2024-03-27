import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/posts/home/home.component';
import { CreateComponent } from './components/posts/create/create.component';

const routes: Routes = [
  {
    path: 'post/home',
    component: HomeComponent,
  },
  {
    path: 'post',
    redirectTo: 'post/home',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'post/home',
    pathMatch: 'full',
  },
  {
    path: 'posts/create',
    component: CreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
