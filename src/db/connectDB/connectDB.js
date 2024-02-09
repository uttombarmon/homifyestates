const mongoose = require('mongoose');
require("dotenv").config();

const getConnectionDB = ()=>{
    let connectionUrl;
    if(process.env.NODE_ENV === "development"){
        connectionUrl = process.env.DATABASE_LOCAL;
        connectionUrl = connectionUrl.replace(
        "<username>",
        process.env.DATABASE_LOCAL_USERNAME
        );
        connectionUrl = connectionUrl.replace(
            "<password>",
            process.env.DATABASE_LOCAL_PASSWORD
        );
    }
    else{
        connectionUrl =process.env.DATABASE_PROD;
    };
    return connectionUrl;
};


const connectDB = async ()=>{
    console.log("connecting to database");
    const mongoURI = getConnectionDB();

    // await mongoose.connect(mongoURI,{ dbName: process.env.DB_NAME })

    //production url, don`t change it. you can comment it
    // await mongoose.connect(`mongodb+srv://${process.env.DATABASE_LOCAL_USERNAME}:${process.env.DATABASE_LOCAL_PASSWORD}@cluster0.8gn4coa.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
    
    await mongoose.connect('mongodb://localhost:27017',{ dbName: "homifyDB"})
    console.log("connected to database");
};
module.exports= connectDB;