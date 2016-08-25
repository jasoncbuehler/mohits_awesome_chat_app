var user_1 = require('../user/user');
var chat_1 = require("./chat");
describe('Chat', function () {
    describe('#constructor', function () {
        var user = new user_1.User('bob');
        it('sets user from a constructor arg', function () {
            var chat = new chat_1.Chat(user, 'asdf');
            expect(chat.user).toEqual(user);
        });
        it('sets text from a constructor arg', function () {
            var text = "some text";
            var chat = new chat_1.Chat(user, text);
            expect(chat.text).toEqual(text);
        });
    });
});
//# sourceMappingURL=chat.spec.js.map