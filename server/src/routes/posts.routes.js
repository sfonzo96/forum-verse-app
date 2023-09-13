import express from 'express';

export default class PostsRouter extends express.Router {
    constructor({ PostsController }) {
        super();
        this.postsController = PostsController;
        this.registerRoutes();
    }

    registerRoutes = () => {
        this.post('/', this.postsController.createPost); // Add middleware only users
        this.get('/:postId', this.postsController.getPosts);
        this.patch('/:postId', this.postsController.editPost); // Add middleware only users
        this.delete('/:postId', this.postsController.deletePost); // Add middleware only users
    };
}
