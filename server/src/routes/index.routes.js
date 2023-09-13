import express from 'express';
import cors from 'cors';

export default class IndexRouter extends express.Router {
    constructor({
        CommentsRouter,
        PostsRouter,
        UsersRouter,
        SubforumsRouter,
        /*PassportRouter*/
    }) {
        super();
        this.router = express.Router();
        this.commentsRouter = CommentsRouter;
        this.postsRouter = PostsRouter;
        this.usersRouter = UsersRouter;
        this.subforumsRouter = SubforumsRouter;
        // this.passportRouter = PassportRouter;
        this.initRouter();
    }

    initRouter = () => {
        // Set middlewares
        this.use(express.json);
        this.use(express.urlencoded({ extended: true }));
        this.use(
            cors() // This allows any origin url
            // cors({
            //     origin: 'http://localhost:8080', // -- Put your front-end host name as value --
            //     methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
            // })
        );

        // Set routers
        this.use('/api/comments', this.commentsRouter);
        this.use('/api/posts', this.postsRouter);
        this.use('/api/users', this.usersRouter);
        this.use('/api/subforums', this.subforumsRouter);
        // this.use('/api/pasport', this.PassportRouter);
    };
}
