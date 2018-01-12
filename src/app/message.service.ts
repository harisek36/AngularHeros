import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  constructor() { }
  messages: string[] = [];

  add(message: string) {
    console.log('Added');
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

}
