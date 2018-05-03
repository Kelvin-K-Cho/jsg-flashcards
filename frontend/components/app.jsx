import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route';
import Home from './home/home';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NavigationContainer from './navigation/navigation_container';
import Directory from './directory/directory';
import SubjectIndexContainer from './subject/subject_index_container';
import SubjectShowContainer from './subject/subject_show_container';
import TopicShowContainer from './topic/topic_show_container';
import WeekShowContainer from './week/week_show_container';
import ResultContainer from './result/result_container';
import SuggestionsIndexContainer from './suggestion/suggestion_index_container';

const App = () => (
	<div id="app">
		<header>
			<Route path="/" component={NavigationContainer} />
		</header>
		<Switch>
			<Route exact path="/" component={Home} />
			<AuthRoute path="/signup" component={SignupContainer} />
			<AuthRoute path="/login" component={LoginContainer} />
			<Route path="/suggestions" component={SuggestionsIndexContainer} />
			<ProtectedRoute
				exact
				path="/subjects"
				component={SubjectIndexContainer}
			/>
			<ProtectedRoute
				exact
				path="/subjects/:subjectId"
				component={SubjectShowContainer}
			/>
			<ProtectedRoute
				exact
				path="/topics/:topicId"
				component={TopicShowContainer}
			/>
			<ProtectedRoute
				exact
				path="/weeks/:weekId"
				component={WeekShowContainer}
			/>
			<ProtectedRoute path="/results" component={ResultContainer} />
			<Redirect to="/" />
		</Switch>
		<footer>
			<Route path="/" component={Directory} />
		</footer>
	</div>
);

export default App;
