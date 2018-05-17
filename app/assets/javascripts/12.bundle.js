(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = __webpack_require__(176);

var _suggestion_form = __webpack_require__(514);

var _suggestion_form2 = _interopRequireDefault(_suggestion_form);

var _suggestions = __webpack_require__(172);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		createSuggestion: function createSuggestion(suggestion) {
			return dispatch((0, _suggestions.createSuggestion)(suggestion));
		}
	};
};

var SuggestionFormContainer = (0, _reactRedux.connect)(null, mapDispatchToProps)(_suggestion_form2.default);

exports.default = SuggestionFormContainer;

/***/ }),

/***/ 514:
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

var SuggestionForm = function (_React$Component) {
	_inherits(SuggestionForm, _React$Component);

	function SuggestionForm(props) {
		_classCallCheck(this, SuggestionForm);

		var _this = _possibleConstructorReturn(this, (SuggestionForm.__proto__ || Object.getPrototypeOf(SuggestionForm)).call(this, props));

		_this.state = {
			comments: ''
		};
		_this.handleSubmit = _this.handleSubmit.bind(_this);
		_this.handleCancel = _this.handleCancel.bind(_this);
		return _this;
	}

	_createClass(SuggestionForm, [{
		key: 'handleInput',
		value: function handleInput(type) {
			var _this2 = this;

			return function (event) {
				_this2.setState(_defineProperty({}, type, event.target.value));
			};
		}
	}, {
		key: 'handleCancel',
		value: function handleCancel(event) {
			event.preventDefault();
			this.setState({
				comments: ''
			});
			this.props.history.goBack();
		}
	}, {
		key: 'handleSubmit',
		value: function handleSubmit(event) {
			var _this3 = this;

			event.preventDefault();
			this.props.createSuggestion(this.state).then(function () {
				return _this3.props.history.push('/confirmation');
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'main', id: 'suggestion' },
				_react2.default.createElement(
					'h2',
					null,
					'Suggestion:'
				),
				_react2.default.createElement(
					'div',
					{ className: 'form-container', id: 'suggestion-container' },
					_react2.default.createElement(
						_reactstrap.Form,
						null,
						_react2.default.createElement(
							_reactstrap.FormGroup,
							null,
							_react2.default.createElement(
								_reactstrap.Label,
								null,
								_react2.default.createElement('textarea', {
									type: 'text',
									name: 'comments',
									value: this.state.comments,
									onChange: this.handleInput('comments')
								})
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'form-buttons', id: 'suggestion-buttons' },
							_react2.default.createElement(
								_reactstrap.Button,
								{ onClick: this.handleCancel },
								'Cancel'
							),
							_react2.default.createElement(
								_reactstrap.Button,
								{ onClick: this.handleSubmit },
								'Submit'
							)
						)
					)
				)
			);
		}
	}]);

	return SuggestionForm;
}(_react2.default.Component);

exports.default = (0, _reactRouterDom.withRouter)(SuggestionForm);

/***/ })

}]);
//# sourceMappingURL=12.bundle.js.map