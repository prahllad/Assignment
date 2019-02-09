import { Component } from '@angular/core';
import {bookinghelper} from '../helper/helper';
@Component({
  selector: 'ticket-window',
  templateUrl: './ticketwindow.component.html',
  styleUrls: ['./ticketwindow.component.css']
})
export class TicketWindowComponent {
    selectedAudi:any;
    seats:any = [];
    
   constructor(private bookingHelper : bookinghelper){
       
      
       this.seats = this.bookingHelper.sendData();
       this.selectedAudi = this.seats['1'];
      
   }
   switchscreen(data){
    
        this.selectedAudi = this.seats[data];

   }
  
}
