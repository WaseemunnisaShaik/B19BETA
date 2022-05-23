import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';

const routes: Routes = [ 
  {
    path:"", component:UserRegistrationComponent
  },
  {
    path:"user-registration", component:UserRegistrationComponent
  },

  {
    path:"login", component:LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
