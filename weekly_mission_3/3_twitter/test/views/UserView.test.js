const UserView = require('./../../app/views/UserView');

const User = require('./../../app/models/User');

describe('Test for UserView', () => {
    /*
    test('1. Return an error object when try to creat a new user whit an null playload', () => {
        const payload = null;
        const result = UserView.createUser(payload);
        
        expect(result.error).toMatch(/payload no existe/);
    });
    */
    /*
    test('2. Return an error object when try to create a new user with invalid properties', () => {
        const payload = { username: null, name: 12, id: "id" }
        const result = UserView.createUser(payload)

        expect(result.error).toMatch(/necesita tener un valor válido/)
    });
    */
    /*
    test('3. Return an error object when try to create a new user whith a payload whith missing properties', () => {
        const payload = { username: "username" }
        const result = UserView.createUser(payload)

        expect(result.error).toMatch(/necesita tener un valor válido/)
    });
    */
    test('Create a user by a give valid payload', () => {
        const payload = { username: "username", id: 1, name: "name" }
        const result = UserView.createUser(payload)
        expect(result.name).toBe("name")
        expect(result.username).toBe("username")
        expect(result.id).toBe(1)
    });
})