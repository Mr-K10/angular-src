import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { ValidateService } from './services/validate.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthService } from './services/auth.service'
import { AuthGuard } from './guard/auth.guard';
import { MapsComponent } from './components/maps/maps.component';

import { DashboardModule } from './components/dashboard/dashboard.module';
import { HomeModule } from './components/home/home.module';
import { DevelopersComponent } from './components/developers/developers.component';
import { BasicinfoComponent } from './components/basicinfo/basicinfo.component';
import { FormModalComponent } from './components/form-modal/form-modal.component'; 

const appRoutes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'map',component: MapsComponent, canActivate:[AuthGuard]},
  {path:'home',component: BasicinfoComponent},
  {path:'developers',component: DevelopersComponent},
  {path: 'form',component:FormModalComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    MapsComponent,
    DevelopersComponent,
    BasicinfoComponent,
    FormModalComponent,
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    HomeModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    FlashMessagesModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDOiyfzciD7XuSqr1PvboCg5zWFi5zCcJc'
    })
  ],
  providers: [
    ValidateService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
