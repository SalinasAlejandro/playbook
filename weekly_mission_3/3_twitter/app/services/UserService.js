const User = require('./../models/User');

class UserService {
    static create(id, username, name) {
        return new User(id, username, name, "Sin Bio");
    }

    static getInfo(user) {
        return [user.id, user.username, user.name, user.bio];
    }

    static updateUserName(user, newUsername) {
        user.setUsername = newUsername;
    }

    static getAllUsernames(allUsers) {
        return [allUsers[0].username, allUsers[1].username, allUsers[2].username];
    }
}

module.exports = UserService;