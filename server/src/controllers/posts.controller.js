export default class PostController {
    constructor({ PostsService }) {
        this.postService = PostsService;
    }
    createPost = async (req, res, next) => {};
    getPosts = async (req, res, next) => {};
    editPost = async (req, res, next) => {};
    deletePost = async (req, res, next) => {};
}
