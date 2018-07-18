import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import {FormsModule} from'@angular/forms' ;
import { RouterModule, Routes } from '@angular/router';
import { ContactService } from './services/contact.service';
import { FlashMessagesModule } from 'angular2-flash-messages';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'add', component: AddContactComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    FlashMessagesModule.forRoot(),

  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
