
// importing the mongoose library. 
const mongoose = require('mongoose');

// making a new Schema object/class that is equal to the Schema property of the mongoose object
const { Schema } = mongoose;

// creating a new instance of the Schema that will be used for our users model class
const userSchema = new Schema({
    googleId: String
})

// this creates the actual model class. arguments are name of model class/collection, and the schema being used. 
mongoose.model('users', userSchema);