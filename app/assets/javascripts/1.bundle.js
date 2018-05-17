(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = __webpack_require__(176);

var _navigation = __webpack_require__(243);

var _navigation2 = _interopRequireDefault(_navigation);

var _session = __webpack_require__(47);

var _subjects = __webpack_require__(148);

var _weeks = __webpack_require__(160);

var _selectors = __webpack_require__(263);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
	return {
		currentUser: state.session.currentUser,
		path: ownProps.location.pathname,
		subjects: (0, _selectors.selectSubjects)(state),
		weeks: (0, _selectors.selectWeeks)(state)
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		logout: function logout() {
			return dispatch((0, _session.logout)());
		},
		fetchSubjects: function fetchSubjects() {
			return dispatch((0, _subjects.fetchSubjects)());
		},
		fetchWeeks: function fetchWeeks() {
			return dispatch((0, _weeks.fetchWeeks)());
		}
	};
};

var NavigationContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_navigation2.default);

exports.default = NavigationContainer;

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(244);

var _search = __webpack_require__(261);

var _search2 = _interopRequireDefault(_search);

var _bullet = __webpack_require__(262);

var _bullet2 = _interopRequireDefault(_bullet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navigation = function (_React$Component) {
	_inherits(Navigation, _React$Component);

	function Navigation(props) {
		_classCallCheck(this, Navigation);

		var _this = _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call(this, props));

		_this.toggleSubjects = _this.toggleSubjects.bind(_this);
		_this.toggleWeeks = _this.toggleWeeks.bind(_this);
		_this.state = {
			subjectsAreOpen: false,
			weeksAreOpen: false
		};
		return _this;
	}

	_createClass(Navigation, [{
		key: 'toggleSubjects',
		value: function toggleSubjects() {
			this.setState({
				subjectsAreOpen: !this.state.subjectsAreOpen
			});
		}
	}, {
		key: 'toggleWeeks',
		value: function toggleWeeks() {
			this.setState({
				weeksAreOpen: !this.state.weeksAreOpen
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.fetchSubjects();
			this.props.fetchWeeks();
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    currentUser = _props.currentUser,
			    path = _props.path,
			    logout = _props.logout;

			var logo = _react2.default.createElement(
				_reactstrap.NavbarBrand,
				{ id: 'home', href: '/#/' },
				_react2.default.createElement('img', { src: window.staticImages.home })
			);
			var subjects = _react2.default.createElement(
				_reactstrap.Dropdown,
				{
					group: true,
					isOpen: this.state.subjectsAreOpen,
					toggle: this.toggleSubjects,
					size: 'sm'
				},
				_react2.default.createElement(
					_reactstrap.DropdownToggle,
					{ caret: true },
					'Subjects'
				),
				_react2.default.createElement(
					_reactstrap.DropdownMenu,
					null,
					this.props.subjects.map(function (subject) {
						return _react2.default.createElement(
							_reactstrap.DropdownItem,
							{ key: subject.id },
							_react2.default.createElement(_bullet2.default, {
								key: subject.id,
								bullet: subject,
								bulletId: subject.id,
								path: 'subjects'
							})
						);
					})
				)
			);

			var weeks = _react2.default.createElement(
				_reactstrap.Dropdown,
				{
					group: true,
					isOpen: this.state.weeksAreOpen,
					toggle: this.toggleWeeks,
					size: 'sm'
				},
				_react2.default.createElement(
					_reactstrap.DropdownToggle,
					{ caret: true },
					'Weeks'
				),
				_react2.default.createElement(
					_reactstrap.DropdownMenu,
					{ className: 'weeks-list' },
					this.props.weeks.map(function (week) {
						return _react2.default.createElement(
							_reactstrap.DropdownItem,
							{ key: week.id },
							_react2.default.createElement(_bullet2.default, {
								key: week.id,
								bullet: week,
								bulletId: week.id,
								path: 'weeks'
							})
						);
					})
				)
			);

			var login = _react2.default.createElement(
				_reactstrap.NavLink,
				{ href: '#/login' },
				_react2.default.createElement(
					_reactstrap.Button,
					{ outline: true, size: 'sm' },
					'Log In'
				)
			);
			var signup = _react2.default.createElement(
				_reactstrap.NavLink,
				{ href: '#/signup' },
				_react2.default.createElement(
					_reactstrap.Button,
					{ outline: true, size: 'sm' },
					'Sign Up'
				)
			);
			var link = void 0;
			var index = logo;
			var search = void 0;
			if (currentUser) {
				logo = _react2.default.createElement(
					_reactstrap.NavbarBrand,
					{ id: 'logo', href: '/#/subjects' },
					_react2.default.createElement('img', { src: window.staticImages.home })
				);
				link = _react2.default.createElement(
					_reactstrap.NavLink,
					{ href: '#/' },
					_react2.default.createElement(
						_reactstrap.Button,
						{ outline: true, size: 'sm', onClick: logout },
						'Logout'
					)
				);
				index = _react2.default.createElement(
					'div',
					{ className: 'nav-container', id: 'left-nav-container' },
					logo,
					subjects,
					weeks
				);
				search = _react2.default.createElement(_search2.default, null);
			} else {
				if (path === '/signup') {
					link = login;
				} else if (path === '/login') {
					link = signup;
				} else {
					link = _react2.default.createElement(
						'div',
						{ className: 'nav-container', id: 'right-nav-container' },
						login,
						signup
					);
				}
			}

			var display = _react2.default.createElement(
				_reactstrap.Navbar,
				null,
				index,
				search,
				link
			);

			return display;
		}
	}]);

	return Navigation;
}(_react2.default.Component);

exports.default = Navigation;

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(244);

var _reactRouterDom = __webpack_require__(195);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
	_inherits(Search, _React$Component);

	function Search(props) {
		_classCallCheck(this, Search);

		var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

		_this.state = {
			value: ''
		};
		_this.handleSubmit = _this.handleSubmit.bind(_this);
		return _this;
	}

	_createClass(Search, [{
		key: 'handleInput',
		value: function handleInput(type) {
			var _this2 = this;

			return function (event) {
				_this2.setState(_defineProperty({}, type, event.target.value));
			};
		}
	}, {
		key: 'handleSubmit',
		value: function handleSubmit(event) {
			event.preventDefault();
			this.props.history.push('/results?=' + this.state.value);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_reactstrap.Form,
				{ id: 'search-form', onSubmit: this.handleSubmit },
				_react2.default.createElement(
					_reactstrap.FormGroup,
					null,
					_react2.default.createElement(_reactstrap.Input, {
						bsSize: 'sm',
						type: 'text',
						name: 'search',
						id: 'search-bar',
						value: this.state.value,
						onChange: this.handleInput('value'),
						placeholder: 'Search by Topic'
					})
				),
				_react2.default.createElement(
					_reactstrap.Button,
					{ id: 'search-button', onClick: this.handleSubmit, size: 'sm' },
					_react2.default.createElement('img', { src: window.staticImages.search })
				)
			);
		}
	}]);

	return Search;
}(_react2.default.Component);

exports.default = (0, _reactRouterDom.withRouter)(Search);

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(195);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bullet = function Bullet(props) {
	var bulletId = props.bulletId,
	    bullet = props.bullet,
	    path = props.path;

	var element = _react2.default.createElement(
		'li',
		null,
		_react2.default.createElement(
			_reactRouterDom.Link,
			{ to: '/' + path + '/' + bulletId },
			bullet.title
		)
	);
	return element;
};

exports.default = Bullet;

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.checkCards = exports.selectCorrectAnswers = exports.selectSuggestions = exports.selectImages = exports.selectResults = exports.selectDays = exports.selectWeeks = exports.selectAnswers = exports.selectQuestions = exports.selectTopics = exports.selectSubjects = undefined;

var _values = __webpack_require__(264);

var _values2 = _interopRequireDefault(_values);

var _flattenDeep = __webpack_require__(270);

var _flattenDeep2 = _interopRequireDefault(_flattenDeep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectSubjects = function selectSubjects(state) {
	return (0, _values2.default)(state.entities.subjects);
};
var selectTopics = function selectTopics(state) {
	return (0, _values2.default)(state.entities.topics);
};
var selectQuestions = function selectQuestions(state) {
	return (0, _values2.default)(state.entities.questions);
};
var selectAnswers = function selectAnswers(state) {
	return (0, _values2.default)(state.entities.answers);
};
var selectWeeks = function selectWeeks(state) {
	return (0, _values2.default)(state.entities.weeks);
};
var selectDays = function selectDays(state) {
	return (0, _values2.default)(state.entities.days);
};
var selectResults = function selectResults(state) {
	return (0, _values2.default)(state.entities.results);
};
var selectImages = function selectImages(state) {
	return (0, _values2.default)(state.entities.images);
};
var selectSuggestions = function selectSuggestions(state) {
	return (0, _values2.default)(state.entities.suggestions);
};

var selectCorrectAnswers = function selectCorrectAnswers(state) {
	return (0, _values2.default)(state.entities.answers).filter(function (answer) {
		return answer.correct === true;
	});
};

var checkCards = function checkCards(cards) {
	var sides = (0, _flattenDeep2.default)(cards);
	return sides.every(function (side) {
		return side !== undefined;
	});
};

exports.selectSubjects = selectSubjects;
exports.selectTopics = selectTopics;
exports.selectQuestions = selectQuestions;
exports.selectAnswers = selectAnswers;
exports.selectWeeks = selectWeeks;
exports.selectDays = selectDays;
exports.selectResults = selectResults;
exports.selectImages = selectImages;
exports.selectSuggestions = selectSuggestions;
exports.selectCorrectAnswers = selectCorrectAnswers;
exports.checkCards = checkCards;

/***/ })

}]);
//# sourceMappingURL=1.bundle.js.map