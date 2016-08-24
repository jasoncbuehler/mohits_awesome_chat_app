import { Component, Input } from '@angular/core';
import { User } from "./user";

@Component({
    selector: 'user-component',
    template: `
    <div>{{user.name}}</div>
    `
})

export class UserComponent {
    @Input() user: User;

    constructor() {
    }
}
