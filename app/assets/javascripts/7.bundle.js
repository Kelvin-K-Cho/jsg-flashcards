(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

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

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = __webpack_require__(176);

var _subject_show = __webpack_require__(284);

var _subject_show2 = _interopRequireDefault(_subject_show);

var _subjects = __webpack_require__(148);

var _topics = __webpack_require__(151);

var _images = __webpack_require__(169);

var _selectors = __webpack_require__(263);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
	return {
		subject: state.entities.subjects[ownProps.match.params.subjectId],
		images: (0, _selectors.selectImages)(state),
		topics: (0, _selectors.selectTopics)(state)
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		fetchSubject: function fetchSubject(subjectId) {
			return dispatch((0, _subjects.fetchSubject)(subjectId));
		},
		fetchImagesBySubject: function fetchImagesBySubject(subjectId) {
			return dispatch((0, _images.fetchImagesBySubject)(subjectId));
		},
		fetchTopicsBySubject: function fetchTopicsBySubject(subjectId) {
			return dispatch((0, _topics.fetchTopicsBySubject)(subjectId));
		}
	};
};

var SubjectShowContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_subject_show2.default);

exports.default = SubjectShowContainer;

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(244);

var _item = __webpack_require__(285);

var _item2 = _interopRequireDefault(_item);

var _image = __webpack_require__(286);

var _image2 = _interopRequireDefault(_image);

var _loader = __webpack_require__(241);

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubjectShow = function (_React$Component) {
	_inherits(SubjectShow, _React$Component);

	function SubjectShow() {
		_classCallCheck(this, SubjectShow);

		return _possibleConstructorReturn(this, (SubjectShow.__proto__ || Object.getPrototypeOf(SubjectShow)).apply(this, arguments));
	}

	_createClass(SubjectShow, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.fetchSubject(this.props.match.params.subjectId);
			this.props.fetchTopicsBySubject(this.props.match.params.subjectId);
			this.props.fetchImagesBySubject(this.props.match.params.subjectId);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevProps.match.params.subjectId !== this.props.match.params.subjectId) {
				this.props.fetchSubject(this.props.match.params.subjectId);
				this.props.fetchTopicsBySubject(this.props.match.params.subjectId);
				this.props.fetchImagesBySubject(this.props.match.params.subjectId);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    subject = _props.subject,
			    topics = _props.topics,
			    images = _props.images;

			if (subject && topics) {
				var title = _react2.default.createElement(
					'div',
					{ className: 'show-title' },
					subject.title
				);
				var text = _react2.default.createElement(
					'div',
					{ className: 'studyset-header' },
					'List of Study Sets:'
				);
				var visuals = _react2.default.createElement(
					'ul',
					{ className: 'images-list', id: 'subject-images' },
					images.map(function (image) {
						return _react2.default.createElement(_image2.default, { key: image.id, image: image });
					})
				);
				var list = _react2.default.createElement(
					_reactstrap.Nav,
					{ vertical: true },
					topics.map(function (topic) {
						return _react2.default.createElement(
							_reactstrap.NavItem,
							{ className: 'show-item', key: topic.id },
							_react2.default.createElement(_item2.default, { item: topic, itemId: topic.id, path: 'topics' })
						);
					})
				);
				return _react2.default.createElement(
					'div',
					null,
					title,
					_react2.default.createElement(
						'div',
						{ className: 'show-container' },
						_react2.default.createElement(
							'div',
							{ className: 'studyset-list' },
							text,
							list
						),
						visuals
					)
				);
			} else {
				return _react2.default.createElement(_loader2.default, null);
			}
		}
	}]);

	return SubjectShow;
}(_react2.default.Component);

exports.default = SubjectShow;

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(195);

var _reactstrap = __webpack_require__(244);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = function Item(props) {
	var itemId = props.itemId,
	    item = props.item,
	    path = props.path;

	var element = _react2.default.createElement(
		_reactstrap.NavLink,
		{ tag: _reactRouterDom.Link, to: '/' + path + '/' + itemId },
		item.title
	);
	return element;
};

exports.default = Item;

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Image = function Image(props) {
	var image = props.image;

	var visual = _react2.default.createElement(
		"li",
		null,
		_react2.default.createElement("img", { className: "image", src: image.url })
	);
	return visual;
};

exports.default = Image;

/***/ })

}]);
//# sourceMappingURL=7.bundle.js.map