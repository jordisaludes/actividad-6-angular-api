import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserviewComponent } from './components/userview/userview.component';
import { NewuserComponent } from './components/newuser/newuser.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { UserformComponent } from './components/userform/userform.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserviewComponent,
    NewuserComponent,
    UpdateuserComponent,
    UserformComponent,
    UserviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
