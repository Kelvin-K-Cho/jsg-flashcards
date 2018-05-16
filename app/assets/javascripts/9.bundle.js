(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = __webpack_require__(176);

var _result_index = __webpack_require__(501);

var _result_index2 = _interopRequireDefault(_result_index);

var _search = __webpack_require__(166);

var _selectors = __webpack_require__(244);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
	return {
		results: (0, _selectors.selectResults)(state)
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		fetchResults: function fetchResults(value) {
			return dispatch((0, _search.fetchResults)(value));
		}
	};
};

var ResultContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_result_index2.default);

exports.default = ResultContainer;

/***/ }),

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(257);

var _item = __webpack_require__(274);

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResultIndex = function (_React$Component) {
	_inherits(ResultIndex, _React$Component);

	function ResultIndex() {
		_classCallCheck(this, ResultIndex);

		return _possibleConstructorReturn(this, (ResultIndex.__proto__ || Object.getPrototypeOf(ResultIndex)).apply(this, arguments));
	}

	_createClass(ResultIndex, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var value = this.props.location.search.slice(2);
			this.props.fetchResults(value);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevProps.location.search.slice(2) !== this.props.location.search.slice(2)) {
				var value = this.props.location.search.slice(2);
				this.props.fetchResults(value);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var results = this.props.results;

			var title = _react2.default.createElement(
				'div',
				{ className: 'show-title' },
				'Results'
			);
			var text = _react2.default.createElement(
				'div',
				{ className: 'studyset-header' },
				'List of Study Sets:'
			);
			var list = _react2.default.createElement(
				'div',
				{ id: 'found-nothing' },
				'No matches found!'
			);
			if (results.length) {
				list = _react2.default.createElement(
					_reactstrap.Nav,
					{ vertical: true },
					results.map(function (result) {
						return _react2.default.createElement(
							_reactstrap.NavItem,
							{ className: 'show-item', key: result.id },
							_react2.default.createElement(_item2.default, { item: result, itemId: result.id, path: 'topics' })
						);
					})
				);
			}
			return _react2.default.createElement(
				'div',
				null,
				title,
				_react2.default.createElement(
					'div',
					{ className: 'result-container' },
					_react2.default.createElement(
						'div',
						{ className: 'studyset-list' },
						text,
						list
					)
				)
			);
		}
	}]);

	return ResultIndex;
}(_react2.default.Component);

exports.default = ResultIndex;

/***/ })

}]);
//# sourceMappingURL=9.bundle.js.map