
import { User } from '../user/user';
import {Chat} from "./chat";

describe('Chat', () => {
    describe('#constructor', () => {
        let user = new User('bob');

        it('sets user from a constructor arg', () => {
            let chat = new Chat(user, 'asdf');
            expect(chat.user).toEqual(user);
        });
        it('sets text from a constructor arg', () => {
            let text = "some text";
            let chat = new Chat(user, text);
            expect(chat.text).toEqual(text);
        });
    });
});