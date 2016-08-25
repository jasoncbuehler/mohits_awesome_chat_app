"use strict";
var user_1 = require('./user');
describe('User', function () {
    describe('#constructor', function () {
        it('has a user argument and sets this.user', function () {
            var name = 'Bob';
            var user = new user_1.User(name);
            expect(user.name).toBeDefined();
            expect(user.name).toEqual(name);
        });
    });
});
//# sourceMappingURL=user.spec.js.map