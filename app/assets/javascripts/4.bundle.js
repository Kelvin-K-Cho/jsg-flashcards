(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = __webpack_require__(176);

var _subject_index = __webpack_require__(242);

var _subject_index2 = _interopRequireDefault(_subject_index);

var _subjects = __webpack_require__(148);

var _selectors = __webpack_require__(244);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
	return {
		subjects: (0, _selectors.selectSubjects)(state)
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		fetchSubjects: function fetchSubjects() {
			return dispatch((0, _subjects.fetchSubjects)());
		}
	};
};

var SubjectIndexContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_subject_index2.default);

exports.default = SubjectIndexContainer;

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _subject_index_item = __webpack_require__(243);

var _subject_index_item2 = _interopRequireDefault(_subject_index_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubjectIndex = function (_React$Component) {
	_inherits(SubjectIndex, _React$Component);

	function SubjectIndex() {
		_classCallCheck(this, SubjectIndex);

		return _possibleConstructorReturn(this, (SubjectIndex.__proto__ || Object.getPrototypeOf(SubjectIndex)).apply(this, arguments));
	}

	_createClass(SubjectIndex, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.fetchSubjects();
		}
	}, {
		key: 'render',
		value: function render() {
			var subjects = this.props.subjects;

			var title = _react2.default.createElement(
				'div',
				{ className: 'show-title' },
				'Subjects'
			);
			var list = _react2.default.createElement(
				'ul',
				{ className: 'subjects-grid' },
				subjects.map(function (subject) {
					return _react2.default.createElement(_subject_index_item2.default, {
						key: subject.id,
						subject: subject,
						subjectId: subject.id
					});
				})
			);
			return _react2.default.createElement(
				'div',
				null,
				title,
				list
			);
		}
	}]);

	return SubjectIndex;
}(_react2.default.Component);

exports.default = SubjectIndex;

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(195);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubjectIndexItem = function SubjectIndexItem(props) {
	var subjectId = props.subjectId,
	    subject = props.subject;

	var item = _react2.default.createElement(
		'li',
		null,
		_react2.default.createElement(
			'div',
			{ className: 'subject-name' },
			subject.title
		),
		_react2.default.createElement(
			_reactRouterDom.Link,
			{ to: '/subjects/' + subjectId },
			_react2.default.createElement('img', { className: 'subject-image', src: subject.images[0] })
		)
	);
	return item;
};

exports.default = SubjectIndexItem;

/***/ })

}]);
//# sourceMappingURL=4.bundle.js.map