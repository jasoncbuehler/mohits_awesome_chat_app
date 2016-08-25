import { Chat } from './chat';
import {Injectable} from '@angular/core';
import {User} from "../user/user";

@Injectable()
export class ChatService {
    chats: Chat[];

    constructor() {
        // TODO - pull this list from file or ultimately myjson
        this.chats = [];
    }

    addChat(chat: string, user: User): void {
        this.chats.push(new Chat(user, chat));
    }
}