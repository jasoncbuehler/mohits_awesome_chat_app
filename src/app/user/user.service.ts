import { User } from './user';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
    users: User[];

    constructor() {
        // TODO - pull this list from file or ultimately myjson
        this.users = [
            new User("Larry"),
            new User("Curly"),
            new User("Randy")
        ];
    }
}