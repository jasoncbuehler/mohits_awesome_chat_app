import { User } from './user';

describe('User', () => {
    describe('#constructor', () => {
        it('has a user argument and sets this.user', () => {
            let name = 'Bob';

            let user = new User( name );
            expect(user.name).toBeDefined();
            expect(user.name).toEqual(name);
        });
    });
});
