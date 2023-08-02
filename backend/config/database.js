const mongoose = require('mongoose');


const connectDatabase = ( ) => {
mongoose.set('strictQuery', false);
    mongoose.connect("mongodb+srv://admin-pankaj:vijaypankaj4@cluster0.zk3ae.mongodb.net/Ecommerce?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true })
        .then( (data) => {        
            console.log(`MongoDB connected with server: ${data.connection.host}`);
        
        });
}

module.exports = connectDatabase;
