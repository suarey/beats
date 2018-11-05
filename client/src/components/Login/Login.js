import React, { Component } from 'react';
import Header from '../common/Header/Header';
import httpClient from '../../utilities/httpClient';
import './Login.css';

class Login extends Component {
    state = { 
        email: "",
        password: ""
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        let { email, password } = this.state;
        let user = await httpClient.authenticate({ email, password }, "/api/users/authenticate");
        this.setState({ email: "", password: "" });
        if (user) {
            this.props.onLoginSuccess();
            this.props.history.push('/')
        }
    }

    render() {
        let { email, password } = this.state;
        let { handleChange, handleSubmit } = this;
        return (
            <div>
                <Header text={"Login"}/>
                <div className="row">
                    <div className="login-page" className="column column-50 column-offset-25">
                        <form onSubmit={handleSubmit}>
                            <label>Email: </label>
                            <input
                                type="text"
                                name="email"
                                placeholder="JohnnyAppleseed@hotmail.com"
                                onChange={handleChange}
                                value={email}
                            />
                            <label>Password: </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Secret Password..."
                                onChange={handleChange}
                                value={password}
                            />
                            <input className="sub-button" type="submit"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}






{/* <div class="login-page">
  <div class="form">
    <form class="login-form">
    <input
    type="password"
    name="password"
    placeholder="Secret Password..."
    onChange={handleChange}
    value={password}
    />
    </form>
  </div>
</div> */}

export default Login;