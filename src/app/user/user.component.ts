import { Component, Input } from '@angular/core';
import { User } from "./user";
import {UserService} from "./user.service";
import {ChatService} from "../chat/chat.service";

@Component({
    selector: 'user-component',
    template: `
    <div (click)="setSelectedUser(user)" class="listed-user {{isSelected()}}">{{user.name}} <i>{{isTyping}}</i></div>
    `
})

export class UserComponent {
    @Input() user: User;
    @Input() isTyping: string;

    constructor(private _userService: UserService, private _chatService: ChatService) {
        _userService.userInputChange.subscribe((event) => {
            if(this.isSelected() === "selected") {
                this.isTyping = "typing";
            }
        });
        _chatService.chatCreated.subscribe(() => this.isTyping = "");
    }

    setSelectedUser(user: User): void {
        this._userService.setSelectedUser(user);
    }

    isSelected() {
        if (this.user === this._userService.selectedUser) {
            return "selected";
        }
        return "";
    }
}
