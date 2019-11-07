import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const stripeCheckoutButton = ({price}) => {
    const priceforStripe = price*100;
    const publishableKey = 'pk_test_HlZVMOfM2y77tj8xk0hnqgDK00V30Sd7XJ';
    const onToken = (token) =>{
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceforStripe,
                token
            }
        }).then(response =>{
            alert('Payment Successful');
        }).catch(error =>{
            console.log('Payment Error', JSON.parse(error));
            alert('There was an issue with your payment, Please make Sure that you use the provided credit card')
        })
    };
    return (
        <StripeCheckout
            label='Pay Now'
            name ='King Robe Fashion'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Total Price is $${price}`}
            amount={priceforStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};
export default stripeCheckoutButton;