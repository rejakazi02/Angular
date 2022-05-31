import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { DialogComponent } from './dialog/dialog.component';

const routes: Routes = [
  { path: 'ddd', component: DialogComponent },
  { path: 'about', component: AboutComponent },
  // { path: 'ddd', component: DialogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
