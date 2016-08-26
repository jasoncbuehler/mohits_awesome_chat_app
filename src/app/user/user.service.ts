import { User } from './user';
import {Injectable, EventEmitter} from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class UserService {
    users: User[];

    selectedUser: User;
    loadingUsers: boolean;

    userInputChange: EventEmitter<any> = new EventEmitter();

    // json located at:
    // https://api.myjson.com/bins/31o4f

    constructor(private _http: Http) {
        this._http = _http;
        this.loadingUsers = true;
    }

    setSelectedUser(user: User): void {
        this.selectedUser = user;
    }

    populateUsers() {
        this._http.request('https://api.myjson.com/bins/31o4f')
            .subscribe((res: Response) => {
                this.users = res.json();
                this.selectedUser = this.users[0];
                this.loadingUsers = false;
            });
    }
}
