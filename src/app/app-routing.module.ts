import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { FoundItemsComponent } from './found-items/found-items.component';
import { LostItemsComponent } from './lost-items/lost-items.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'found', component: FoundItemsComponent },
      { path: 'lost', component: LostItemsComponent },
      {path: '', redirectTo: 'found', pathMatch: 'full' }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
