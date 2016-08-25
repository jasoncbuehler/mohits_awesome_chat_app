import { Component, Input } from '@angular/core';
import { User } from "./user";
import {UserService} from "./user.service";

@Component({
    selector: 'user-component',
    template: `
    <div (click)="setSelectedUser(user)">{{user.name}}</div>
    `
})

export class UserComponent {
    @Input() user: User;

    constructor(private _userService: UserService) {
        // this.userService = userService;
    }

    setSelectedUser(user: User): void {
        this._userService.setSelectedUser(user);
    }
}
