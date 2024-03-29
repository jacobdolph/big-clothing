import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../CartIcon';
import CartDropdown from '../CartDropdown';
import { createStructuredSelector } from 'reselect';


import { ReactComponent as Logo } from '../../assets/hamster.svg'
import './styles.scss';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
</Link>
            <Link className='option' to='/shop'>
                CONTACT
</Link>
            {
                currentUser ? (

                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                ) : (
                        <Link className='option' to='/signin'>SIGN IN</Link>
                    )
            }
            <CartIcon />
        </div>
        {
            hidden ? null :
                <CartDropdown />
        }
    </div>
);

const mapsStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapsStateToProps)(Header);