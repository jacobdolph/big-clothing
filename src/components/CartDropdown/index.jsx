import React from 'react';
import './styles.scss';
import CustomButton from '../CustomButton';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);


export default CartDropdown;