import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route';
import Wrapper from './loader/wrapper';
import Loadable from 'react-loadable';

const NavigationContainer = Wrapper({
	loader: () => import('./navigation/navigation_container')
});

const Directory = Wrapper({
	loader: () => import('./directory/directory')
});

const Home = Wrapper({
	loader: () => import('./home/home')
});

const SignupContainer = Wrapper({
	loader: () => import('./session/signup_container')
});

const LoginContainer = Wrapper({
	loader: () => import('./session/login_container')
});

const SubjectIndexContainer = Wrapper({
	loader: () => import('./subject/subject_index_container')
});

const SubjectShowContainer = Wrapper({
	loader: () => import('./subject/subject_show_container')
});

const TopicShowContainer = Wrapper({
	loader: () => import('./topic/topic_show_container')
});

const WeekShowContainer = Wrapper({
	loader: () => import('./week/week_show_container')
});

const ResultContainer = Wrapper({
	loader: () => import('./result/result_container')
});

const SuggestionIndexContainer = Wrapper({
	loader: () => import('./suggestion/suggestion_index_container')
});

const SuggestionFormContainer = Wrapper({
	loader: () => import('./suggestion/suggestion_form_container')
});

const Confirmation = Wrapper({
	loader: () => import('./confirmation/confirmation')
});

Loadable.preloadAll();

const App = () => (
	<div id="app">
		<header>
			<Route path="/" component={NavigationContainer} />
		</header>
		<Switch>
			<Route exact path="/" component={Home} />
			<AuthRoute path="/signup" component={SignupContainer} />
			<AuthRoute path="/login" component={LoginContainer} />
			<Route exact path="/suggestions" component={SuggestionIndexContainer} />
			<Route
				exact
				path="/suggestions/new"
				component={SuggestionFormContainer}
			/>
			<Route exact path="/confirmation" component={Confirmation} />
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
