export default class UserService {
    constructor({ UsersRepository }) {
        this.userRepository = UsersRepository;
    }

    createUser = async () => {};
    changePassword = async () => {};
    changeUsername = async () => {};
    loginUser = async () => {};
    logoutUser = async () => {};
    deleteUser = async () => {};
}
