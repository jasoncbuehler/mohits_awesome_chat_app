import { Component, Input } from '@angular/core';
import { Chat } from "./chat";
import {ChatService} from "./chat.service";
import {UserService} from "../user/user.service";

@Component({
    selector: 'chat-component',
    template: `
    <div>{{chat.user.name}}: {{chat.text}}</div>
    `
})

export class ChatComponent {
    @Input() chat: Chat;

    constructor(private _userService: UserService, private _chatService: ChatService) {
        //_chatService.chatCreated.subscribe((message) => {
        //    this.chat.text = message;
        //});
    }
}
