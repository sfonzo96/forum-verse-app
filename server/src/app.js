import express from 'express';
import cookie from 'cookie-parser';
import session from 'express-session';
import mongoStore from 'connect-mongo';
import passport from 'passport';
// import passportConfig from './config/passport.config.js';
// import errorHandler from './middlewares/errorHandler.middleware.js';

export default class AppServer {
    constructor({ ServerConfig, MainRouter }) {
        this.app = express();
        this.config = ServerConfig;
        this.router = MainRouter;
        this.setup();
    }

    // Configurates the server
    async setup() {
        // Sets cookie parser and session middlewares
        this.app.use(cookie());
        this.app.use(
            session({
                store: new mongoStore({
                    mongoUrl: this.config.MONGO_URI,
                    options: {
                        userNewUrlParser: true,
                        useUnifiedTopology: true,
                    },
                }),
                secret: this.config.SESSION_SECRET,
                resave: false,
                saveUninitialized: false,
                cookie: { maxAge: 10000000 },
            })
        );

        // Sets passport configuration and middlewares
        // await passportConfig(passport);
        this.app.use(passport.initialize());
        this.app.use(passport.session());

        // Sets main router
        this.app.use(this.router);

        // Sets error handling middleware
        //this.app.use(errorHandler);
    }

    // Runs the server
    start() {
        const server = this.app.listen(this.config.PORT, () => {
            console.log(`Server running at port ${this.config.PORT} 🚀`);
        });

        server.on('error', (err) => console.log('Error: ', err));
    }
}
