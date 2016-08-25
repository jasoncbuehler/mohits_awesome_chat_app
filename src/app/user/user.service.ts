import { User } from './user';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class UserService {
    users: User[];

    selectedUser: User;
    loadingUsers: boolean;

    // json located at:
    // https://api.myjson.com/bins/31o4f

    constructor(_http: Http) {
        this.loadingUsers = true;
        // TODO - pull this list from file or ultimately myjson
        _http.request('https://api.myjson.com/bins/31o4f')
            .subscribe((res: Response) => {
                this.users = res.json();
                this.selectedUser = this.users[0];
                this.loadingUsers = false;
            });
    }

    setSelectedUser(user: User): void {
        this.selectedUser = user;
        console.log(`user is selected ${user.name}`);
    }
}
