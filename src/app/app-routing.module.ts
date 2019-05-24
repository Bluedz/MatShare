import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'transfer-list',
    loadChildren: './transfer-list/transfer-list.module#TransferListPageModule' },
  { path: 'list-mat-detail', loadChildren: './list-mat-detail/list-mat-detail.module#ListMatDetailPageModule' },
  { path: 'transfer-list-detail', loadChildren: './transfer-list-detail/transfer-list-detail.module#TransferListDetailPageModule' },
  { path: 'list-search', loadChildren: './list-search/list-search.module#ListSearchPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
