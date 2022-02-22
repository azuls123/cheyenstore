import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeaderModule } from './shared/components/header/header.module';
import { UserFormModule } from './shared/components/user-form/user-form.module';


import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { Firestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    UserFormModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [Firestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
