import { Chat } from './chat';
import {Injectable} from '@angular/core';
import {User} from "../user/user";

@Injectable()
export class ChatService {
    chats: Chat[];
    isTyping: boolean;

    constructor() {
        // TODO - pull this list from file or ultimately myjson
        this.chats = [];
        this.isTyping = false;
    }

    addChat(chat: string, user: User): void {
        this.chats.push(new Chat(user, chat));
    }

    setIsTyping(typing: boolean): void {
        this.isTyping = typing;
    }
}