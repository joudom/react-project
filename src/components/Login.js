import React from 'react';
import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pwd: ''
        }
    }

    _updateField = (field, val) => {
        this.setState({ [field]: val }, () => {
            console.log(`${field} = ${val}`) ;
        });
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <div className='row'>
                <div className='column'>
                    <div className='login'>
                        <h1>Welcome Back!</h1>
                        <form onSubmit={this.handleFormSubmit}>
                            <input 
                                type='email' 
                                placeholder='email' 
                                value={this.state.email}
                                onChange={(e) => {
                                    this._updateField('email', e.target.value)
                                }} 
                                required/>
                            <input 
                                type='password' 
                                placeholder='password' 
                                value={this.state.pwd}
                                onChange={(e) => {
                                    this._updateField('pwd', e.target.value)
                                }} 
                                required/>
                            <button onSubmit={this.handleFormSubmit}>Log in</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;