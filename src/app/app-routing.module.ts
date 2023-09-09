import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewuserComponent } from './components/newuser/newuser.component';
import { UserviewComponent } from './components/userview/userview.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home'},
  { path: 'home', component: HomeComponent},
  { path: 'newuser', component: NewuserComponent},
  { path: 'user/:userid', component: UserviewComponent},
  { path: 'updateuser/:userid', component: UpdateuserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
