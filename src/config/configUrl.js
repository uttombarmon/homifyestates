require('dotenv').config();

const configUrl ={
    LOCAL_CLIENT: process.env.LOCAL_CLIENT,
    CLIENT: process.env.CLIENT,
  
};
module.exports=(configUrl);