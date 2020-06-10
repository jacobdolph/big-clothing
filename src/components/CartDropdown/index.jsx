import React from 'react';
import './styles.scss';
import CustomButton from '../CustomButton';
import CartItem from '../CartItem';
import { connect } from 'react-redux';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        {
            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        }
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);
const mapsStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default connect(
    mapsStateToProps
)(CartDropdown);