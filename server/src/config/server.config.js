import dotenv from 'dotenv';
dotenv.config();

// Creates and exports an object with all the server configuration
const serverConfig = {
    PORT: process.env.PORT || 3000,
    MONGO_URI:
        process.env.NODE_ENV === 'production'
            ? process.env.MONGO_URI_PROD
            : process.env.MONGO_URI_DEV, // IMPORTANT to check ENV variables to avoid production DB overwrite or data loss
    SESSION_SECRET: process.env.SESSION_SECRET,
    GH_CLIENT_ID: process.env.GH_CLIENT_ID,
    GH_CLIENT_SECRET: process.env.GH_CLIENT_SECRET,
    APP_ID: process.env.APP_ID,
    NODE_ENV: process.env.NODE_ENV || 'development',
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
};

export default serverConfig;
