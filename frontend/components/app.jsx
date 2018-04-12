import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NavbarContainer from './navbar/navbar_container';
import TopicIndexContainer from './topic/topic_index_container';
// import TopicShowContainer from './topic/topic_show_container';
import { AuthRoute, ProtectedRoute } from '../utils/route';
import Home from './home/home';

const App = () => (
	<div>
		<header>
			<Route path="/" component={NavbarContainer} />
		</header>
		<Switch>
			<Route exact path="/" component={Home} />
			<AuthRoute path="/signup" component={SignupContainer} />
			<AuthRoute path="/login" component={LoginContainer} />
			<ProtectedRoute exact path="/topics" component={TopicIndexContainer} />
			<Redirect to="/" />
		</Switch>
		<footer />
	</div>
);

export default App;
