import { Component, OnInit } from '@angular/core';
import { WebService } from './web.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: object[];

  constructor(private webService: WebService) { }

  ngOnInit() {
    this.webService.getMessages()
      .subscribe(res => {
        this.messages = res;
        console.log(this.messages);
      });
  }

}
