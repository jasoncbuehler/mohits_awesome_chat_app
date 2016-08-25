import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {CONSTANTS} from './shared';
import {UserComponent} from "./user/user.component";
import {UserService} from "./user/user.service";
import {ChatComponent} from "./chat/chat.component";
import {ChatService} from "./chat/chat.service";

@Component({
    selector: 'as-main-app',
    templateUrl: 'app/app.html',
    directives: [NavbarComponent, UserComponent, ChatComponent, ROUTER_DIRECTIVES]
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
}
