import { Component} from '@angular/core';
import {DataService} from './data.service';
import {LiveService} from './live.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(public data: DataService, public live: LiveService) {
        live.join(localStorage.getItem('roomid') || '-LUVP3qKecKyTP_nlmh0');
    	this.data.initthis();
    localStorage.removeItem('firebase:previous_websocket_failure');
    }
}