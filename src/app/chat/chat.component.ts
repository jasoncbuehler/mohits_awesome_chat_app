import { Component, Input } from '@angular/core';
import { Chat } from "./chat";

@Component({
    selector: 'chat-component',
    template: `
    <div>{{chat.user.name}}: {{chat.text}}</div>
    `
})

export class ChatComponent {
    @Input() chat: Chat;

    constructor() {
    }
}
