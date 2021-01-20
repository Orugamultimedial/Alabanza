import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './home/components/search/search.component';
import { HomeComponent } from './home/view/home/home.component';
import { AuthComponent } from './auth/view/auth/auth.component';
import { AdminComponent } from './admin/view/admin/admin.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ToneComponent } from './admin/components/tone/tone.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    AuthComponent,
    AdminComponent,
    HeaderComponent,
    ToneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
