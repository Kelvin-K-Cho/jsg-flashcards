(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(176);

var _session = __webpack_require__(47);

var _login2 = __webpack_require__(511);

var _login3 = _interopRequireDefault(_login2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		login: function login(formUser) {
			return dispatch((0, _session.login)(formUser));
		}
	};
};

var LoginContainer = (0, _reactRedux.connect)(null, mapDispatchToProps)(_login3.default);

exports.default = LoginContainer;

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(257);

var _reactRouterDom = __webpack_require__(195);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
	_inherits(Login, _React$Component);

	function Login(props) {
		_classCallCheck(this, Login);

		var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

		_this.state = {
			username: '',
			password: ''
		};
		_this.handleSubmit = _this.handleSubmit.bind(_this);
		_this.handleDemo = _this.handleDemo.bind(_this);
		return _this;
	}

	_createClass(Login, [{
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
			var _this3 = this;

			event.preventDefault();
			this.props.login(this.state).then(function () {
				return _this3.props.history.push('/subjects');
			});
		}
	}, {
		key: 'handleDemo',
		value: function handleDemo(event) {
			var _this4 = this;

			event.preventDefault();
			var demo = { username: 'demo', password: 'secret' };
			this.props.login(demo).then(function () {
				return _this4.props.history.push('/subjects');
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'main' },
				_react2.default.createElement(
					'h2',
					null,
					'Hit the ground running!'
				),
				_react2.default.createElement(
					'div',
					{ className: 'form-container', id: 'login-container' },
					_react2.default.createElement(
						_reactstrap.Form,
						null,
						_react2.default.createElement(
							_reactstrap.FormGroup,
							null,
							'Username: \xA0',
							_react2.default.createElement(
								_reactstrap.Label,
								null,
								_react2.default.createElement(_reactstrap.Input, {
									type: 'text',
									name: 'username',
									value: this.state.username,
									onChange: this.handleInput('username')
								})
							)
						),
						_react2.default.createElement(
							_reactstrap.FormGroup,
							null,
							'Password: \xA0',
							_react2.default.createElement(
								_reactstrap.Label,
								null,
								_react2.default.createElement(_reactstrap.Input, {
									type: 'password',
									name: 'password',
									value: this.state.password,
									onChange: this.handleInput('password')
								})
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'form-buttons', id: 'login-buttons' },
							_react2.default.createElement(
								_reactstrap.Button,
								{ onClick: this.handleSubmit },
								'Log In'
							),
							_react2.default.createElement(
								_reactstrap.Button,
								{ onClick: this.handleDemo },
								'Demo User'
							)
						)
					),
					_react2.default.createElement(
						'div',
						null,
						'Don\'t have an account? \xA0',
						_react2.default.createElement(
							_reactstrap.NavLink,
							{ href: '#/signup' },
							'Sign Up'
						)
					)
				)
			);
		}
	}]);

	return Login;
}(_react2.default.Component);

exports.default = (0, _reactRouterDom.withRouter)(Login);

/***/ })

}]);
//# sourceMappingURL=3.bundle.js.map