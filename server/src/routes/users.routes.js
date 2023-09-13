import express from 'express';

export default class UsersRouter extends express.Router {
    constructor({ UsersController }) {
        super();
        this.usersController = UsersController;
        this.registerRoutes();
    }

    registerRoutes = () => {
        this.post('/', this.usersController.createUser);
        this.get('/login', this.usersController.loginUser);
        this.get('/logout', this.usersController.logoutUser); // Add middleware only users
        this.patch('/password', this.usersController.changePassword); // Unify this and let other properties to be changed // Add middleware only users
        this.patch('/username', this.usersController.changeUsername); // Add middleware only users
        this.delete('/', this.usersController.deleteUser); // Add middleware only users
    };
}
