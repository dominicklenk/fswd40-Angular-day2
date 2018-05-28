import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig ={
	apiKey: "AIzaSyAewNYzbE6aTkQRkqDhfG8ok5rAQNvp2MY",
    authDomain: "food-3bbb5.firebaseapp.com",
    databaseURL: "https://food-3bbb5.firebaseio.com",
    projectId: "food-3bbb5",
    storageBucket: "food-3bbb5.appspot.com",
    messagingSenderId: "494433898471"
};

@NgModule({
 declarations: [
   AppComponent
 ],
 imports: [
   BrowserModule,
   AngularFireModule.initializeApp(firebaseConfig),
   AngularFireAuthModule,
   AngularFireDatabaseModule 
  ],
 providers: [],
 bootstrap: [AppComponent]
})

export class AppModule { }