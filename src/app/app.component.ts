import {Component, OnInit} from '@angular/core';
import {CONSTANTS} from './shared';
import {UserComponent} from "./user/user.component";
import {UserService} from "./user/user.service";
import {ChatComponent} from "./chat/chat.component";
import {ChatService} from "./chat/chat.service";

@Component({
    selector: 'as-main-app',
    template: `
    <div style="width: 600px; margin: auto; border: 2px solid #aaa; padding: 8px; border-radius: 5px;">
        <table class="table table-striped  table-inverse" style="height: 500px;">
            <thead>
            <tr>
                <th>Chatz</th>
                <th>Userz</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <chat-component *ngFor="let chat of _chatService.chats" [chat]="chat"></chat-component>
                </td>
                <td>
                    <div *ngIf="_userService.loadingUsers">Loading...</div>
                    <user-component *ngFor="let user of _userService.users" [user]="user"></user-component>
                </td>
            </tr>
            </tbody>
        </table>
        <hr>
        <div class="form-group">
            <div class="input-group">
                <input #messageInput type="text" class="form-control" placeholder="Say 'yo!'"
                    (keyup)="addMessageFromEnterKey($event,messageInput)" (input)="_userService.userInputChange.emit($event)">
                <span class="input-group-btn">
                    <input type="button" class="btn btn-success pull-right" value="YO!"
                    (click)="addMessage(messageInput)">
                </span>
            </div>
        </div>
    </div>
    `,
    directives: [UserComponent, ChatComponent]
})
export class AppComponent implements OnInit {
    public appBrand: string;

    constructor(private _userService: UserService, private _chatService: ChatService) {
        this.appBrand = CONSTANTS.MAIN.APP.BRAND;
    }

    addMessage(messageInput: HTMLInputElement) {
        this._chatService.chatCreated.emit(messageInput.value);
        messageInput.value = "";
    }

    addMessageFromEnterKey(event: any, messageInput: HTMLInputElement) {
        if (event.which === 13) {
            this.addMessage(messageInput);
        }
    }

    ngOnInit() {
        this._userService.populateUsers();
    }
}
