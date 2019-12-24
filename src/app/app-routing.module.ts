import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { GotyComponent } from './pages/goty/goty.component';


const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'goty', component: GotyComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'index'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
