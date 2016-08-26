import { UserService } from './user.service';
import {
    beforeEachProviders,
    inject
} from '@angular/core/testing';
import { HTTP_PROVIDERS } from '@angular/http';
import {User} from "./user";

describe('UserService', () => {
    describe('setSelectedUser', () => {
        let user, userService;

        beforeEachProviders(() => {
            return [
                HTTP_PROVIDERS,
                UserService
            ];
        });

        beforeEach(inject([UserService], (_userService) => {
            userService = _userService;
            user = new User("Mohit");
        }));

        it('sets the selected user', () => {
            userService.setSelectedUser(user);
            expect(userService.selectedUser).toEqual(user);
        });
    });
});