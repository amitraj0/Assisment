import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './Components/about-page/about-page.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { LoginComponent } from './Components/login/login.component';
import { WelcomeHomeComponent } from './Components/welcome-home/welcome-home.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { ReactiveFormComponent } from './Components/reactive-form/reactive-form.component';

const routes: Routes = [
  {path:"About",component:AboutPageComponent,canActivate:[AuthGuardGuard]},
  {path:"Login",component:LoginComponent},
  {path:"Home",component:WelcomeHomeComponent},
  {path:"Gallery",component:GalleryComponent},
  {path:"Form",component:ReactiveFormComponent},


  {path:"**",component:WelcomeHomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
