(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(195);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Confirmation = function (_React$Component) {
	_inherits(Confirmation, _React$Component);

	function Confirmation() {
		_classCallCheck(this, Confirmation);

		return _possibleConstructorReturn(this, (Confirmation.__proto__ || Object.getPrototypeOf(Confirmation)).apply(this, arguments));
	}

	_createClass(Confirmation, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			window.setTimeout(function () {
				_this2.props.history.go(-2);
			}, 1250);
		}
	}, {
		key: 'render',
		value: function render() {
			var body = _react2.default.createElement(
				'div',
				{ className: 'main' },
				_react2.default.createElement(
					'h1',
					null,
					'Thank you for your suggestion!'
				),
				_react2.default.createElement(
					'h2',
					null,
					'You are being redirected...'
				)
			);
			return body;
		}
	}]);

	return Confirmation;
}(_react2.default.Component);

exports.default = (0, _reactRouterDom.withRouter)(Confirmation);

/***/ })

}]);
//# sourceMappingURL=13.bundle.js.map