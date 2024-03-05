const UserModels = require("./models/userModel/userModel");
const nodemailer = require("nodemailer");
const cron = require('node-cron');
const config = require("./config/configmailer");

const sendAllUserMails = async (emailObj) => {
    // console.log("ggggg",emailObj);

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        post: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: config.emailUser,
            pass: config.emailPassword
        }
    });
    const mailOptions = {
        from: "Homifyestate.com",
        to: emailObj,
        subject: "Homifyestate property update ",
        html: `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email Template</title>
            <style>
                body {
                    font-family: 'Roboto', sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                }
        
                .container {
                    max-width: 600px;
                    margin: 20px auto;
                    padding: 20px;
                    background-color: #d1eaeb ;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    text-align:center;
                }
        
                .header {
                    text-align: center;
                    padding-bottom: 20px;
                }
        
                .header h1 {
                    color: #c30211 ;
                }
        
                .content {
                    padding: 20px 0;
                    color: #666;
                }
        
                .site{
                    font-size: 14px;
                    color: #e2fa03;
                }
            </style>
        </head>
        
        <body>
        
            <div class="container">
                <div class="header">
                    <h1>Welcome to Our Homifyestate</h1>
                </div>
                <div class="content">
                    <p>Hello Users,</p>
                    <p>Thank you for subscribing to our newsletter. We promise to provide you with valuable content and updatesregularly.</p>
                    <p>Best regards,</p>
                    <p>The Team</p>
                    <p class="site"><a href="https://homifyestate-8556d.web.app/">Homifyestate.com</a></p>
                    
                </div>
                <div class="footer">
                    <p>If you no longer wish to receive emails from us, you can <a href="https://homifyestate-8556d.web.app/">homifyestate45@gmail.com</a> here.</p>
                </div>
            </div>
        
        </body>
        
        </html>
        

          `
       
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("mail has benn send", info.response);
        }
    });
};

const sendAllUserMail = () => {
    try {
        cron.schedule('0 0 * * 0', async function () {

            let userData = await UserModels.find({});
            if (userData.length > 0) {
                let emails = [];
                userData.map((key) => {
                    emails.push(key.email)
                });
                sendAllUserMails(emails)
                // console.log(emails);
            }
        });
    } catch (error) {
        console.log(error.message);
    }
};
module.exports = { sendAllUserMail };