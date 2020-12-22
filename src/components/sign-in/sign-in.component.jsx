import React from 'react'
import { signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss'

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({email: '', password: ''})
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form 
                    onSubmit={this.handleSubmit}
                >
                    <label htmlFor="email" className="form-input-label"></label>
                    <FormInput 
                        name="email"
                        type="email"
                        label="Email"
                        required
                        value={this.state.email}
                        handleChange={this.handleChange}
                    />
                    <label htmlFor="password" className="form-input-label"></label>
                    <FormInput 
                        name="password"
                        type="password"
                        label="Password"
                        required
                        value={this.state.password}
                        handleChange={this.handleChange}
                    />
                    <div className="button">
                        <CustomButton 
                            type="submit" 
                        >
                            Sign In
                        </CustomButton> 
                        <CustomButton 
                            type="submit" 
                            onClick={signInWithGoogle}
                            isGoogle
                        >
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;