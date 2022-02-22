import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'user-list', loadChildren: () => import('./pages/users/list/list.module').then(m => m.ListModule) },
  { path: 'user-new', loadChildren: () => import('./pages/users/new/new.module').then(m => m.NewModule) },
  { path: 'user-edit', loadChildren: () => import('./pages/users/edit/edit.module').then(m => m.EditModule) },
  { path: 'user-details', loadChildren: () => import('./pages/users/details/details.module').then(m => m.DetailsModule) },
  { path: 'product-list', loadChildren: () => import('./pages/products/list/list.module').then(m => m.ListModule) },
  { path: 'product-new', loadChildren: () => import('./pages/products/new/new.module').then(m => m.NewModule) },
  { path: 'product-edit', loadChildren: () => import('./pages/products/edit/edit.module').then(m => m.EditModule) },
  { path: 'product-details', loadChildren: () => import('./pages/products/details/details.module').then(m => m.DetailsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
