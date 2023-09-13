import express from 'express';

export default class SubforumsRouter extends express.Router {
    constructor({ SubforumsController }) {
        super();
        this.subforumsController = SubforumsController;
        this.registerRoutes();
    }

    registerRoutes = () => {
        this.post('/', this.subforumsController.createSubforum); // Add middleware only users
        this.get('/:subforumId', this.subforumsController.getSubforum);
        this.patch('/:subforumId', this.subforumsController.editSubforum); // Add middleware only users
        this.delete('/:subforumId', this.subforumsController.deleteSubforum); // Add middleware only users
    };
}
