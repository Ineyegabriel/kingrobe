const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');

if(process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const app = express();
const port = process.env.PORT || 5000;
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());

if(process.env.NODE_ENV === 'production'){
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', function(request, response){
        response.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    });
}
app.listen(port, error =>{
    if(error) throw error;
    console.log(`Server running on port ${port}`);
});

app.post('/payment', (request, response) =>{
    const body = {
        source: request.body.token.id,
        amount: request.body.amount,
        currency: 'eur',
    };
    stripe.charges.create(body, (stripeError, StripeResponse) =>{
        if(stripeError){
            response.status(500).send({error: stripeError})
        }
        else{
            response.status(200).send({success: StripeResponse})
        }
    })
});