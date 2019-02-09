import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {TicketWindowComponent} from './ticketwindow/ticketwindow.component';
import {bookinghelper} from './helper/helper';
@NgModule({
  declarations: [
    AppComponent,TicketWindowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [bookinghelper],
  bootstrap: [AppComponent,TicketWindowComponent]
})
export class AppModule { }
