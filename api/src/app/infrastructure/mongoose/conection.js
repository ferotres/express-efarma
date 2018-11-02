import mongoose from 'mongoose'


const connection = settings => {

    mongoose.Promise = global.Promise

    mongoose.connect(settings.DATABASE_DSN, {useNewUrlParser : true});

    mongoose.connection.on('connected', () => {
        console.log('Mongoose default connection open to ' + settings.DATABASE_DSN);
    });


    mongoose.connection.on('error',  error => {
        console.log('Mongoose default connection error: ' + error);
    });


    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose default connection disconnected');
    });


    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('Mongoose default connection disconnected through app termination');
            process.exit(0);
        });
    });

}

export default connection