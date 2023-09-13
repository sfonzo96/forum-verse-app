import express from 'express';

export default class CommentsRouter extends express.Router {
    constructor({ CommentsController }) {
        super();
        this.commentController = CommentsController;
        this.registerRoutes();
    }

    registerRoutes = () => {
        this.post('/', this.commentController.createComment); // Add middleware only users
        this.patch('/:commentId', this.commentController.editComment); // Add middleware only users
        this.delete('/:commentId', this.commentController.deleteComment); // Add middleware only users
    };
}
