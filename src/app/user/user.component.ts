import { Component, Input } from '@angular/core';
import { User } from "./user";
import {UserService} from "./user.service";

@Component({
    selector: 'user-component',
    template: `
    <div (click)="setSelectedUser(user)" class="listed-user {{isSelected()}}">
        {{user.name}}
        <div *ngIf="_userService.isTyping && isSelected()">is typing</div>
    </div>
    `
})

export class UserComponent {
    @Input() user: User;

    constructor(private _userService: UserService) {
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
