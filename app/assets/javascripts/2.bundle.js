(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(244);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Directory = function Directory(props) {
	var logo = _react2.default.createElement(
		'a',
		{ target: '_blank', href: 'https://github.com/Kelvin-K-Cho/jsg-flashcards' },
		_react2.default.createElement('img', { src: window.staticImages.github })
	);

	var suggestions = _react2.default.createElement(
		_reactstrap.NavLink,
		{ href: '#/suggestions/new' },
		_react2.default.createElement(
			_reactstrap.Button,
			{ outline: true, size: 'sm' },
			'Suggestions ?'
		)
	);

	var display = _react2.default.createElement(
		_reactstrap.Navbar,
		null,
		logo,
		suggestions
	);

	return display;
};

exports.default = Directory;

/***/ })

}]);
//# sourceMappingURL=2.bundle.js.map