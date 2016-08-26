import { Component, Input } from '@angular/core';
import { Chat } from "./chat";
import {UserService} from "../user/user.service";

@Component({
    selector: 'chat-component',
    template: `
    <div>{{chat.user.name}}: {{chat.text}}</div>
    `
})

export class ChatComponent {
    @Input() chat: Chat;

    constructor(private _userService: UserService) {
    }

}
