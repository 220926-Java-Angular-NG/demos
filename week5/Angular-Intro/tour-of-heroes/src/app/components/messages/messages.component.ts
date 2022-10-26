import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //  we are making our messageService property public this time
  //becuase we will be binding the value from this property to our html template
  constructor(public messageService: MessagesService) { }

  ngOnInit(): void {
  }

}
