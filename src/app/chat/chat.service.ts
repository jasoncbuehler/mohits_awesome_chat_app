import { Chat } from './chat';
import {Injectable, EventEmitter} from '@angular/core';
import {User} from "../user/user";
import {UserService} from "../user/user.service";

@Injectable()
export class ChatService {
    chats: Chat[];
    currentChat: Chat;
    chatCreated: EventEmitter<any> = new EventEmitter();

    constructor(private _userService: UserService) {
        this.chats = [];
        _userService.userInputChange.subscribe(() => {
            console.log("Event happening");
            if (this.chats.length === 0 || this.chats.length >= 1 && this.chats[this.chats.length - 1].text !== "typing...") {
                this.addChat("typing...", _userService.selectedUser);
            }
        });
        this.chatCreated.subscribe((text) => {
            this.chats[this.chats.length - 1].text = text;
        });
    }

    addChat(chat: string, user: User): void {
        this.chats.push(new Chat(user, chat));
    }

    setCurrentChat(chat: Chat) {
        this.currentChat = chat;
    }
}