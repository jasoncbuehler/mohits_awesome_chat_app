import {Component} from '@angular/core';
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
                    <chat-component *ngFor="let chat of chatService.chats" [chat]="chat"></chat-component>
                    <div *ngIf="chatService.isTyping">{{userService.selectedUser.name}} is typing...</div>
                </td>
                <td>
                    <div *ngIf="userService.loadingUsers">Loading...</div>
                    <user-component *ngFor="let user of userService.users" [user]="user"></user-component>
                </td>
            </tr>
            </tbody>
        </table>
        <hr>
        <div class="form-group">
            <div class="input-group">
                <input #messageInput type="text" class="form-control" placeholder="Say 'yo!'"
                    (keyup.enter)="addMessageFromEnterKey($event,messageInput)"
                    (keyup)="checkIfTyping(messageInput)">
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
export class AppComponent {
    public appBrand: string;
    public userService: UserService;
    public chatService: ChatService;

    constructor(userService: UserService, chatService: ChatService) {
        this.appBrand = CONSTANTS.MAIN.APP.BRAND;
        this.userService = userService;
        this.chatService = chatService;
    }

    addMessage(messageInput: HTMLInputElement) {
        this.chatService.addChat(messageInput.value, this.userService.selectedUser);
        messageInput.value = "";

    }

    addMessageFromEnterKey(event: any, messageInput: HTMLInputElement) {
        if (event.which === 13) {
            this.addMessage(messageInput);
        }
    }

    checkIfTyping(messageInput: HTMLInputElement): void {
        if (messageInput.value.length > 0) {
            this.chatService.setIsTyping(true);
            this.userService.setIsTyping(true);
        } else {
            this.chatService.setIsTyping(false);
            this.userService.setIsTyping(false);
        }
    }
}
