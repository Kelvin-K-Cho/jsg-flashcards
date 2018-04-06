import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NavBarContainer from './navbar/navbar_container';
import { AuthRoute, ProtectedRoute } from '../utils/route';
import Home from './home/home';

const App = () => (
	<div>
		<header>
			<Route path="/" component={NavBarContainer} />
		</header>
		<Switch>
			<Route exact path="/" component={Home} />
			<AuthRoute path="/signup" component={SignupContainer} />
			<AuthRoute path="/login" component={LoginContainer} />
			<Redirect to="/" />
		</Switch>
		<footer />
	</div>
);

export default App;
