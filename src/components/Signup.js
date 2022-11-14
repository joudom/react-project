import React from 'react';
import './Signup.css';

class Signup extends React.Component {
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
                    <div className='signup'>
                        <h1>Join Us!</h1>
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
                            <button onSubmit={this.handleFormSubmit}>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;