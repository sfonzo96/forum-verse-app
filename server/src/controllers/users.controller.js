export default class UserController {
    constructor({ UsersService }) {
        this.userService = UsersService;
    }
    createUser = async (req, res, next) => {};
    changePassword = async (req, res, next) => {};
    changeUsername = async (req, res, next) => {};
    loginUser = async (req, res, next) => {};
    logoutUser = async (req, res, next) => {};
    deleteUser = async (req, res, next) => {};
}
