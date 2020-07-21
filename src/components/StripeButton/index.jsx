import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51G0dazD76SfzKEG06KNXzEYa9a0SdF6wP7OvkL69T6c6pnIHpZILEsLIP6JynjRXNpaMzxG1mcMmWCLPCkjgaQyZ00KoETWTPK';
    const onToken = token => {
        console.log(token);
        alert('payment successful');
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='Big Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}

        />
    )
};

export default StripeCheckoutButton;