import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddNewPostComponent } from './add-new-post/add-new-post.component';
import { JobComponent } from './job/job.component';

const routes: Routes = [
  {
    path: 'Home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '/Home',
    pathMatch:'full',
  },
  {
    path: 'postjob',
    component: AddNewPostComponent,
  },
  {
    path: 'job/:routeName',
    component: JobComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
