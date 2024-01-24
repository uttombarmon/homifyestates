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

    await mongoose.connect(mongoURI,{ dbName: process.env.DB_NAME })
    await mongoose.connect(mongoURI,{ dbName: process.env.DB_NAME })
    console.log("connected to database");
};
module.exports= connectDB;