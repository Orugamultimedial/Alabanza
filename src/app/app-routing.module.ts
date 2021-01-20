import { AdminComponent } from './admin/view/admin/admin.component';
import { AuthComponent } from './auth/view/auth/auth.component';
import { HomeComponent } from './home/view/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: AuthComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
