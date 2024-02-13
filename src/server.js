const express = require('express');
const { connect } = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const app = express();
require('dotenv').config();
const port = process.env.PORT||5000;
const connectDB = require('./db/connectDB/connectDB');
const checkoutRoute = require('./routes/homeRoutes/checkoutRoute/checkoutRoute');
const userRoute = require('./routes/users/usersRoutes');
const chooseRoute = require('./routes/homeRoutes/chooseRoute/chooseRoute');
const reviewRouter = require('./routes/homeRoutes/reviewRoutes/reviewRoutes');
const orderRouter = require('./routes/orderRoute/orderRoute');
const meetTheProfRouter = require('./routes/meetTheProfessionalRoute/meetTheProfessionalRoute');
const latestNewRouter = require('./routes/homeRoutes/latestNews/latestNewsRoute');
const ourProjectRouter = require('./routes/homeRoutes/ourProject/ourProjectRoute');
const wishListRouter = require('./routes/wishListRoute/wishListRoute');
const adminRouter = require('./routes/dashboardRoutes/adminRoutes');
const jwtRouter = require('./routes/jwtSigninRoute/JwtSigninRoute');


app.use(express.json());
app.use(cors({
  origin:['https://homifyestate-8556d.web.app','http://localhost:5173'],
  credentials:true
}));
app.use(cookieParser())


app.use('/jwt',jwtRouter)
app.use('/users',userRoute)
app.use('/home',checkoutRoute)
app.use('/home',chooseRoute)
app.use('/home',reviewRouter);
app.use('/home',meetTheProfRouter);
app.use('/home',latestNewRouter);
app.use('/home',ourProjectRouter);
// order routes;
app.use('/order',orderRouter);
// wish list routes;
app.use('/wish-lists',wishListRouter)
// admin dashboard routes 
app.use('/admin',adminRouter)



app.get('/', (req, res) => {
  res.send('homifyestates server is running .....!')
});

app.all('*',(req,res,next)=>{
    const error =new Error(`Can't find ${req.originalUrl} on the server`)
    error.status=404;
    next(error);

});
app.use((err,req,res,next)=>{
   res.status(err.status || 500).json({
    message:err.message
   });
   next(err)
})

const main=async()=>{
  await connectDB()
  app.listen(port, () => {
    console.log(`homifyestates is running ${port}`)
  });
};
main();