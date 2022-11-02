import { UserService } from './services/user.service';
import { AuthGuard } from './services/auth-guard.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';

const appRoutes : Routes = [
  {path : 'appareils', canActivate:[AuthGuard], component:AppareilViewComponent},
  {path : 'appareils/:id', canActivate:[AuthGuard], component:SingleAppareilComponent},
  {path : 'edit', canActivate:[AuthGuard], component:EditAppareilComponent},
  {path : 'auth', component:AuthComponent },
  {path : 'users', component:UserListComponent },
  {path : 'new-user', component:NewUserComponent },
  {path : '', component:AppareilViewComponent},
  {path : 'not-found', component:PageNotFoundComponent},
  {path : '**', redirectTo:'/not-found'},
]
@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    PageNotFoundComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppareilService,AuthService, AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
