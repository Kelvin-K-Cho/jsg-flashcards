(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = __webpack_require__(176);

var _suggestion_index = __webpack_require__(503);

var _suggestion_index2 = _interopRequireDefault(_suggestion_index);

var _suggestions = __webpack_require__(172);

var _selectors = __webpack_require__(244);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
	return {
		suggestions: (0, _selectors.selectSuggestions)(state)
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		fetchSuggestions: function fetchSuggestions() {
			return dispatch((0, _suggestions.fetchSuggestions)());
		}
	};
};

var SuggestionIndexContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_suggestion_index2.default);

exports.default = SuggestionIndexContainer;

/***/ }),

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SuggestionIndex = function (_React$Component) {
	_inherits(SuggestionIndex, _React$Component);

	function SuggestionIndex() {
		_classCallCheck(this, SuggestionIndex);

		return _possibleConstructorReturn(this, (SuggestionIndex.__proto__ || Object.getPrototypeOf(SuggestionIndex)).apply(this, arguments));
	}

	_createClass(SuggestionIndex, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.props.fetchSuggestions();
		}
	}, {
		key: "render",
		value: function render() {
			var suggestions = this.props.suggestions;

			var title = _react2.default.createElement(
				"div",
				{ className: "show-title" },
				"Suggestions"
			);
			var list = _react2.default.createElement(
				"ul",
				{ className: "suggestions" },
				suggestions.map(function (suggestion) {
					return _react2.default.createElement(
						"li",
						{ key: suggestion.id },
						_react2.default.createElement(
							"div",
							{ className: "comments" },
							suggestion.comments
						)
					);
				})
			);
			return _react2.default.createElement(
				"div",
				null,
				title,
				list
			);
		}
	}]);

	return SuggestionIndex;
}(_react2.default.Component);

exports.default = SuggestionIndex;

/***/ })

}]);
//# sourceMappingURL=10.bundle.js.map