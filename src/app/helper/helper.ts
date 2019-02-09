import { Injectable } from '@angular/core';
@Injectable()
export class bookinghelper {
    seats: any = { '1': { 'platinum': [], 'gold': [], 'silver': [] }, '2': { 'platinum': [], 'gold': [], 'silver': [] }, '3': { 'platinum': [], 'gold': [], 'silver': [] } };
    constructor() {
        this.createScreen('Audi1');
        this.createScreen('Audi2');
        this.createScreen('Audi3');
    }
    sendData(){
        return this.seats;
    }
    createScreen(data) {
        let col = ['A', 'B', 'c'];
        let high, low, i;
        switch (data) {
            case 'Audi1':
                i = 0;
                low = 1;

                for (let prop in this.seats['1']) {
                    if (col[i] == 'A') {
                        high = 9;
                    }
                    else if (col[i] == 'B') {
                        high = 6;
                    }
                    else {
                        low = 2;
                        high = 7;
                    }

                    for (let j = low; j <= high; j++) {
                        this.seats['1'][prop].push({ name: col[i] + j, booked: false });

                    }
                    i++;
                }
                break;
            case 'Audi2':
                i = 0;
                low = 1;

                for (let prop in this.seats['2']) {
                    if (col[i] == 'A') {
                        high = 7;
                    }
                    else if (col[i] == 'B') {
                        low = 2;
                        high = 6;
                    }
                    else {
                        low = 1;
                        high = 7;
                    }

                    for (let j = low; j <= high; j++) {
                        this.seats['2'][prop].push({ name: col[i] + j, booked: false });

                    }
                    i++;
                }
                break;
            case 'Audi3':
                i = 0;
                low = 1;

                for (let prop in this.seats['3']) {
                    if (col[i] == 'A') {
                        high = 5;
                    }
                    else if (col[i] == 'B') {
                        high = 8;
                    }
                    else {
                        high = 9;
                    }

                    for (let j = low; j <= high; j++) {
                        this.seats['3'][prop].push({ name: col[i] + j, booked: false });

                    }
                    i++;
                }
                break;
        }

       
    }

}