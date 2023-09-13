import awilix from 'awilix';

// utils and middlewares

// config
import ServerConfig from './config/server.config.js';

// server
import App from './app.js';

// router
import Router from './routes/index.routes.js';
import UsersRouter from './routes/users.routes.js';
// import PassportRouter from './routes/passport.routes.js';
import CommentsRouter from './routes/comments.routes.js';
import PostsRouter from './routes/posts.routes.js';
import SubforumsRouter from './routes/subforums.routes.js';

// models
import User from './models/user.model.js';
import Comment from './models/comment.model.js';
import Post from './models/post.model.js';
import Subforum from './models/subforum.model.js';

// repositories
import UsersRepository from './repositories/users.repository.js';
import CommentsRepository from './repositories/comments.repository.js';
import PostsRepository from './repositories/posts.repository.js';
import SubforumsRepository from './repositories/subforums.repository.js';

// services
import UsersService from './services/user.service.js';
import CommentsService from './services/comments.service.js';
import PostsService from './services/posts.service.js';
import SubforumsService from './services/subforums.service.js';

// controllers
import UsersController from './controllers/users.controller.js';
import CommentsController from './controllers/comments.controller.js';
import PostsController from './controllers/posts.controller.js';
import SubforumsController from './controllers/subforums.controller.js';

const dependenciesContainer = awilix.createContainer();

dependenciesContainer.register({
    // Models
    User: awilix.asValue(User),
    Comment: awilix.asValue(Comment),
    Post: awilix.asValue(Post),
    Subforum: awilix.asValue(Subforum),

    // Repositories
    UsersRepository: awilix.asClass(UsersRepository).singleton(),
    CommentsRepository: awilix.asClass(CommentsRepository).singleton(),
    PostsRepository: awilix.asClass(PostsRepository).singleton(),
    SubforumsRepository: awilix.asClass(SubforumsRepository).singleton(),

    // Services
    UsersService: awilix.asClass(UsersService).singleton(),
    CommentsService: awilix.asClass(CommentsService).singleton(),
    PostsService: awilix.asClass(PostsService).singleton(),
    SubforumsService: awilix.asClass(SubforumsService).singleton(),

    // Controllers
    UsersController: awilix.asClass(UsersController).singleton(),
    CommentsController: awilix.asClass(CommentsController).singleton(),
    PostsController: awilix.asClass(PostsController).singleton(),
    SubforumsController: awilix.asClass(SubforumsController).singleton(),

    // routes
    UsersRouter: awilix.asClass(UsersRouter).singleton(),
    // PassportsRouter: awilix.asClass(PassportRouter).singleton(),
    CommentsRouter: awilix.asClass(CommentsRouter).singleton(),
    PostsRouter: awilix.asClass(PostsRouter).singleton(),
    SubforumsRouter: awilix.asClass(SubforumsRouter).singleton(),
    MainRouter: awilix.asClass(Router).singleton(),

    // Config
    ServerConfig: awilix.asValue(ServerConfig),

    // App
    App: awilix.asClass(App).singleton(),
});

export default dependenciesContainer;
