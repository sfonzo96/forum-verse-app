import mongoose from 'mongoose';
import container from './container.js';
import serverConfig from './config/server.config.js';

// Instanciates the server
const app = container.resolve('App');

// DB Connection
mongoose.set('strictQuery', false);

try {
    mongoose.connect(serverConfig.MONGO_URI);

    console.log('Connection to MongoDB stablished succesfully ⛓️');

    // Runs the server
    app.start();
} catch (error) {
    console.log('Error: ', error);
}
