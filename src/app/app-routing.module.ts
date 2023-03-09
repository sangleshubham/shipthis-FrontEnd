import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';
import { ShowFullMovieComponent } from './show-full-movie/show-full-movie.component';

const routes: Routes = [
  {
    path : 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component : RegisterComponent
  },
  {
    path: 'showMovie',
    component: ShowFullMovieComponent
  },
  {
    path: '',
    component : HomepageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
