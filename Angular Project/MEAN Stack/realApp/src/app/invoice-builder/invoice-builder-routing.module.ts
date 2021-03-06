import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceBuilderComponent } from './invoice-builder.component';
import { MainContentComponent } from './components/main-content/main-content.component';

const routes: Routes = [
  {
    path : '',
    component : InvoiceBuilderComponent,

    children: [
      {
        path: '',
        component: MainContentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

exports: [RouterModule]
})
export class InvoiceBuilderRoutingModule { }
