const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://tohitk121:9W3Sz9DS5vtAou6n@cluster0.fw4nf.mongodb.net/';

const connectToMongo = async () => {
    try{
        mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");
    }catch(error){
        console.log(error);
    }
};
module.exports = connectToMongo;