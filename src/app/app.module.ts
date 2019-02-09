import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {TicketWindowComponent} from './ticketwindow/ticketwindow.component';
import {bookinghelper} from './helper/helper';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,TicketWindowComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [bookinghelper],
  bootstrap: [AppComponent,TicketWindowComponent]
})
export class AppModule { }
