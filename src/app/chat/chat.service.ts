import { Chat } from './chat';
import {Injectable} from '@angular/core';
import {User} from "../user/user";

@Injectable()
export class ChatService {
    chats: Chat[];

    constructor() {
        // TODO - pull this list from file or ultimately myjson
        this.chats = [
            new Chat(new User("Yuck"), "ERMEHGERD WTF"),
            new Chat(new User("Ew"), "Ya, this is groooosssss")
        ];
    }
}