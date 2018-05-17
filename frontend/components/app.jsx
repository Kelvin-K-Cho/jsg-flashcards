import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route';
import Loadable from 'react-loadable';
import Loader from './loader/loader';

// import NavigationContainer from './navigation/navigation_container';
// import Directory from './directory/directory';
// import Home from './home/home';
// import SignupContainer from './session/signup_container';
// import LoginContainer from './session/login_container';
// import SubjectIndexContainer from './subject/subject_index_container';
// import SubjectShowContainer from './subject/subject_show_container';
// import TopicShowContainer from './topic/topic_show_container';
// import WeekShowContainer from './week/week_show_container';
// import ResultContainer from './result/result_container';
// import SuggestionIndexContainer from './suggestion/suggestion_index_container';
// import SuggestionFormContainer from './suggestion/suggestion_form_container';
// import Confirmation from './confirmation/confirmation';

const NavigationContainer = Loadable({
	loader: () => import('./navigation/navigation_container'),
	loading: Loader
});

const Directory = Loadable({
	loader: () => import('./directory/directory'),
	loading: Loader
});

const Home = Loadable({
	loader: () => import('./home/home'),
	loading: Loader
});

const SignupContainer = Loadable({
	loader: () => import('./session/signup_container'),
	loading: Loader
});

const LoginContainer = Loadable({
	loader: () => import('./session/login_container'),
	loading: Loader
});

const SubjectIndexContainer = Loadable({
	loader: () => import('./subject/subject_index_container'),
	loading: Loader
});

const SubjectShowContainer = Loadable({
	loader: () => import('./subject/subject_show_container'),
	loading: Loader
});

const TopicShowContainer = Loadable({
	loader: () => import('./topic/topic_show_container'),
	loading: Loader
});

const WeekShowContainer = Loadable({
	loader: () => import('./week/week_show_container'),
	loading: Loader
});

const ResultContainer = Loadable({
	loader: () => import('./result/result_container'),
	loading: Loader
});

const SuggestionIndexContainer = Loadable({
	loader: () => import('./suggestion/suggestion_index_container'),
	loading: Loader
});

const SuggestionFormContainer = Loadable({
	loader: () => import('./suggestion/suggestion_form_container'),
	loading: Loader
});

const Confirmation = Loadable({
	loader: () => import('./confirmation/confirmation'),
	loading: Loader
});

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
