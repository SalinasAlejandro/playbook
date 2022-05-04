const UserService = require('./../../app/services/UserService');

describe("Unit test for User service", () => {
    /*
    test('1) Create a new user using the UserService', () => {
        const user = UserService.create(1, "AlejandroSalinas", "Dykeo");

        expect(user.id).toBe(1);
        expect(user.username).toBe("AlejandroSalinas");
        expect(user.name).toBe("Dykeo");
        expect(user.bio).not.toBeUndefined();
    })
    */
    /*
    test('2) Get all user data in a list', () => {
        const user = UserService.create(1, "AlejandroSalinas", "Dykeo");
        const userInfoInList = UserService.getInfo(user);

        expect(userInfoInList[0]).toBe(1);
        expect(userInfoInList[1]).toBe("AlejandroSalinas");
        expect(userInfoInList[2]).toBe("Dykeo");
        expect(userInfoInList[3]).not.toBeUndefined();
    })
    */
    /*
    test('3) Update username', () => {
        const user = UserService.create(1, "AlejandroSalinas", "Dykeo");
        UserService.updateUserName(user, "SalinasAlejandro");

        expect(user.username).toBe("SalinasAlejandro");
    })
    */
    test('4) Given a list of users given me the list of usernames', () => {
        const user1 = UserService.create(1, "AlejandroSalinas1", "Dykeo");
        const user2 = UserService.create(1, "AlejandroSalinas2", "Dykeo");
        const user3 = UserService.create(1, "AlejandroSalinas3", "Dykeo");

        const usernames = UserService.getAllUsernames([user1, user2, user3]);

        expect(usernames).toContain("AlejandroSalinas1");
        expect(usernames).toContain("AlejandroSalinas2");
        expect(usernames).toContain("AlejandroSalinas3");
    })
});