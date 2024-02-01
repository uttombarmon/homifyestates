const express = require('express');
const orderModel = require('../../models/order/orderModel');
const { ObjectId } = require('mongodb');
const orderRouter = express.Router();

//payment for ssLcommerz
const SSLCommerzPayment = require('sslcommerz-lts')
const store_id = process.env.STORE_ID
const store_passwd = process.env.STORE_PASS
const is_live = false //true for live, false for sandbox

const trans_id = new ObjectId().toString();

orderRouter.post('/', async (req, res) => {



    // const result = await orderModel(req.body).save();
    try {

        const data = {
            total_amount: req?.body?.amount,
            currency: 'BDT',
            tran_id: trans_id, // use unique tran_id for each api call
            success_url: `http://localhost:5000/order/payment/success/${trans_id}`,
            fail_url: `http://localhost:5000/order/payment/fail/${trans_id}`,
            cancel_url: 'http://localhost:3030/cancel',
            ipn_url: 'http://localhost:3030/ipn',
            shipping_method: 'Courier',
            product_name: 'Computer.',
            product_category: 'Electronic',
            product_profile: 'general',
            cus_name: req?.body?.name,
            cus_email: req?.body?.email,
            cus_add1: 'Dhaka',
            cus_add2: 'Dhaka',
            cus_city: 'Dhaka',
            cus_state: 'Dhaka',
            cus_postcode: '1000',
            cus_country: 'Bangladesh',
            cus_phone: '01711111111',
            cus_fax: '01711111111',
            ship_name: 'Customer Name',
            ship_add1: 'Dhaka',
            ship_add2: 'Dhaka',
            ship_city: 'Dhaka',
            ship_state: 'Dhaka',
            ship_postcode: 1000,
            ship_country: 'Bangladesh',
        };
        // console.log(req.body)
        const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
        sslcz.init(data).then(apiResponse => {
            // Redirect the user to payment gateway
            let GatewayPageURL = apiResponse.GatewayPageURL
            // res.redirect(GatewayPageURL)
            res.send({ url: GatewayPageURL });

            const paymentInfo = req.body
            paymentInfo.paymentStatus = false;
            paymentInfo.transectionId = trans_id;
            // console.log(paymentInfo)
            const result = orderModel(req.body).save();
            console.log('Redirecting to: ', GatewayPageURL)
        });



        orderRouter.post('/payment/success/:transId', async (req, res) => {
            console.log("the transId :", req.params.transId)
            try {
                const result = await orderModel.updateOne({ transectionId: req.params.transId }, {
                    $set: {
                        paymentStatus: true
                    }
                })
                console.log('the update info:', result)
                if (result.modifiedCount > 0) {
                    res.redirect(`http://localhost:5173/payment/success/${req.params.transId}`)
                }

            } catch (error) {

            }
        });

        orderRouter.post('/payment/fail/:transId', async (req, res) => {
            const result = await orderModel.deleteOne({ transectionId: req.params.transId });
            console.log('delete info:',result)
            if (result.deletedCount) {
                res.redirect(`http://localhost:5173/payment/fail/${req.params.transId}`)
            }
        })


        // res.send(result).status(200);
        console.log('order is inserted to DB')
    } catch (error) {
        // res.send(error).send(500);
        console.log(' order is failed to insert DB')
    }
});



module.exports = orderRouter