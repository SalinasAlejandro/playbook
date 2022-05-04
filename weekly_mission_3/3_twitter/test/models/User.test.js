const User = require('./../../app/models/User');

describe("Unit test for User object", () => {
    /*test('Create an User object', () => {
        const user = new User(1, "SalinasAlejandro", "Dykeo", "Bio");

        expect(user.id).toBe(1);
        expect(user.username).toBe("SalinasAlejandro");
        expect(user.name).toBe("Dykeo");
        expect(user.bio).toBe("Bio");
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lastUpdated).not.toBeUndefined();
    })*/
    /*
    test('Add getters', () => {
        const user = new User(1, "SalinasAlejandro", "Dykeo", "Bio");

        expect(user.getUsername).toBe("SalinasAlejandro");
        expect(user.getBio).toBe("Bio");
        expect(user.getDateCreated).not.toBeUndefined();
        expect(user.getLastUpdated).not.toBeUndefined();
    })
    */
    test('Add setters', () => {
        const user = new User(1, "SalinasAlejandro", "Dykeo", "Bio");

        user.setUsername = "AlejandroSalinas";
        expect(user.username).toBe("AlejandroSalinas");

        user.setBio = "New Bio"
        expect(user.bio).toBe("New Bio");
    })
});