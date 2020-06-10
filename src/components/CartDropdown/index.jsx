import React from 'react';
import './styles.scss';
import CustomButton from '../CustomButton';
import CartItem from '../CartItem';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';


const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        {
            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        }
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);
const mapsStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default connect(
    mapsStateToProps
)(CartDropdown);