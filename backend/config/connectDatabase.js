const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URL, {
        serverSelectionTimeoutMS: 30000,
        socketTimeoutMS: 45000,
    })
    .then((con) => {
        console.log('MongoDB connected to host: ' + con.connection.host)
    })
    .catch((err) => {
        console.log('MongoDB connection error: ' + err.message)
    });
};

module.exports = connectDatabase;