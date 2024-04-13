import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddNewPostComponent } from './add-new-post/add-new-post.component';
import { JobComponent } from './job/job.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'postjob',
    component: AddNewPostComponent,
  },
  {
    path: 'job/:routeName',
    component: JobComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch:'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
