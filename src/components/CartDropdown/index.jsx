import React from 'react';
import './styles.scss';
import CustomButton from '../CustomButton';
import CartItem from '../CartItem';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';



const CartDropdown = ({ cartItems, history }) => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        {
            cartItems.length ?
                (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />))
                :
                (<span className='empty-message'>Your cart is empty</span>)
        }
        <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
    </div>
);
const mapsStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(
    mapsStateToProps
)(CartDropdown));