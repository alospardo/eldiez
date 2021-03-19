const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI 
?  process.env.MONGODB_URI
: 'mongodb+srv://alex:<password>@cluster0.hp8dc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected');
})
