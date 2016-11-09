import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServTablaComponent } from './serv-tabla/serv-tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    ServTablaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent,ServTablaComponent]
})
export class AppModule { }
