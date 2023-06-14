import { Component } from '@angular/core';
import { ServicesService } from './services/services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wales';
  events: any;

  constructor(
    private service: ServicesService
  ){}

  ngOnInit(){
    this.service.getWales().subscribe((wales: any) => {
      this.events = wales['england-and-wales'].events
    });
  }
}
