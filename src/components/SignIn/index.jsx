import React, { Component } from 'react';
import './styles.scss';
import FormInput from '../FormInput';
import CustomButton from '../CustomButton';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error)
        }



    }

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form>
                    <FormInput
                        name='email'
                        type='email'
                        label='Email'
                        value={this.state.email}
                        required
                        handleChange={this.handleChange} />
                    <FormInput name='password'
                        type='password'
                        label='Password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
                            {' '}
                        Sign In with Google{' '}
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
};

export default SignIn;