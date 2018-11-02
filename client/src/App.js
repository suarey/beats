import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/common/Layout/Layout';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Signup from './components/Signup/Signup';
import VIP from './components/VIP/VIP';
import Profile from './components/Profile/Profile';
import httpClient from './utilities/httpClient';
import './App.css';

class App extends Component {
	state = { currentUser: httpClient.getCurrentUser() };

	onAuthSuccess = () => {
		this.setState({ currentUser: httpClient.getCurrentUser() });
	}

	onLogout = () => {
		httpClient.logOut();
		this.setState({ currentUser: null });
	}

	removeUser = async (deleteUser, _id) => {
		let user = await httpClient.removeUser(deleteUser, _id);
		this.setState({ currentUser: user });
		httpClient.logOut();
		this.setState({ currentUser: null });
	}
	

	updateProfile = async (updatedCredentials, _id) => {

		alert("UPDATING PROFILE")
		let user = await httpClient.updateCredentials(updatedCredentials, _id);
		this.setState({ currentUser: user })
		console.log(user);
	}


  	render() {
		let { currentUser } = this.state;
		let { onAuthSuccess, onLogout, updateProfile } = this;
		return (
			<Layout currentUser={currentUser}>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/login" render={(props) => {
						return <Login {...props} onLoginSuccess={onAuthSuccess}/>
					}}/>
					<Route path="/logout" render={() => {
						return <Logout onLogout={onLogout}/>
					}} />
					<Route path="/signup" render={(props) => {
						return <Signup {...props} onSignupSuccess={onAuthSuccess}/>
					}}/>
					<Route path="/vip" render={() => {
						return currentUser ?  <VIP/> : <Redirect to="/login"/>
					}}/>
					<Route path="/profile" render={(props) => {
						return currentUser ?  <Profile {...props} updateProfile={updateProfile} currentUser={currentUser} /> : <Redirect to="/login"/>
					}}/>
				</Switch>
			</Layout>
		);
	}
}

export default App;
