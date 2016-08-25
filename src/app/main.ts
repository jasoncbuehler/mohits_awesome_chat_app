import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {AppComponent} from './app.component';
import {UserService} from "./user/user.service";
import {HTTP_PROVIDERS} from '@angular/http';
import {ChatService} from "./chat/chat.service";

declare var ENV: string;

if (ENV === 'production') {
    enableProdMode();
}

bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms(),
    UserService,
    ChatService,
    HTTP_PROVIDERS
]);
