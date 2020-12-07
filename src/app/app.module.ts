import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { RegisterComponent } from './features/register/register.component';
import { CatalogComponent } from './features/catalog/catalog.component';
import { UsersComponent } from './features/users/users.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ContattiComponent } from './features/contatti/contatti.component';
import { Error404Component } from './features/error404/error404.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TvmazeComponent } from './features/tvmaze/tvmaze.component';
import { TvmazeListComponent } from './features/tvmaze/components/tvmaze-list.component';
import { TvmazeModelComponent } from './features/tvmaze/components/tvmaze-model.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CatalogComponent,
    UsersComponent,
    NavbarComponent,
    ContattiComponent,
    Error404Component,
    TvmazeComponent,
    TvmazeListComponent,
    TvmazeModelComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
  { path: 'catalog', component: CatalogComponent },
  { path: 'users', component: UsersComponent },
  { path: 'contatti', component: ContattiComponent },
  { path: 'tvmaze', component: TvmazeComponent },
  { path: '', component: RegisterComponent },
  { path: '404', component: Error404Component },
  { path: '**', redirectTo: '404' },
    ]),




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
