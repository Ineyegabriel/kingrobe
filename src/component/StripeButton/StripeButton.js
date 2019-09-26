import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
const stripeCheckoutButton = ({price}) => {
    const priceforStripe = price*100;
    const publishableKey = 'pk_test_HlZVMOfM2y77tj8xk0hnqgDK00V30Sd7XJ';
    const onToken = (token) =>{
        console.log(token);
        alert('Payment Succesful');
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