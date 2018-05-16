(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = __webpack_require__(176);

var _topic_show = __webpack_require__(278);

var _topic_show2 = _interopRequireDefault(_topic_show);

var _topics = __webpack_require__(151);

var _questions = __webpack_require__(154);

var _answers = __webpack_require__(157);

var _selectors = __webpack_require__(244);

var _zip = __webpack_require__(487);

var _zip2 = _interopRequireDefault(_zip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
	return {
		topic: state.entities.topics[ownProps.match.params.topicId],
		cards: (0, _zip2.default)((0, _selectors.selectQuestions)(state), (0, _selectors.selectCorrectAnswers)(state))
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		fetchTopic: function fetchTopic(topicId) {
			return dispatch((0, _topics.fetchTopic)(topicId));
		},
		fetchQuestionsByTopic: function fetchQuestionsByTopic(topicId) {
			return dispatch((0, _questions.fetchQuestionsByTopic)(topicId));
		},
		fetchAnswersByTopic: function fetchAnswersByTopic(topicId) {
			return dispatch((0, _answers.fetchAnswersByTopic)(topicId));
		}
	};
};

var TopicShowContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_topic_show2.default);

exports.default = TopicShowContainer;

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactMarkdown = __webpack_require__(279);

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

var _sanitizeHtml = __webpack_require__(372);

var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);

var _loader = __webpack_require__(276);

var _loader2 = _interopRequireDefault(_loader);

var _reactstrap = __webpack_require__(257);

var _card = __webpack_require__(485);

var _card2 = _interopRequireDefault(_card);

var _selectors = __webpack_require__(244);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopicShow = function (_React$Component) {
	_inherits(TopicShow, _React$Component);

	function TopicShow() {
		_classCallCheck(this, TopicShow);

		return _possibleConstructorReturn(this, (TopicShow.__proto__ || Object.getPrototypeOf(TopicShow)).apply(this, arguments));
	}

	_createClass(TopicShow, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.fetchTopic(this.props.match.params.topicId);
			this.props.fetchQuestionsByTopic(this.props.match.params.topicId);
			this.props.fetchAnswersByTopic(this.props.match.params.topicId);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevProps.match.params.topicId !== this.props.match.params.topicId) {
				this.props.fetchTopic(this.props.match.params.topicId);
				this.props.fetchQuestionsByTopic(this.props.match.params.topicId);
				this.props.fetchAnswersByTopic(this.props.match.params.topicId);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    topic = _props.topic,
			    images = _props.images,
			    cards = _props.cards;

			if (topic && (0, _selectors.checkCards)(cards)) {
				var title = _react2.default.createElement(
					'div',
					{ className: 'show-title' },
					topic.title
				);
				var notes = (0, _sanitizeHtml2.default)(topic.notes);
				var body = _react2.default.createElement(_reactMarkdown2.default, { className: 'topic-notes', source: notes });
				var list = _react2.default.createElement(
					_reactstrap.Container,
					null,
					_react2.default.createElement(
						_reactstrap.Row,
						{ className: 'top-card' },
						_react2.default.createElement(
							_reactstrap.Col,
							null,
							'Question'
						),
						_react2.default.createElement(
							_reactstrap.Col,
							null,
							'Answer'
						)
					),
					cards.map(function (card) {
						return _react2.default.createElement(_card2.default, { key: card[0].id, card: card, cardId: card[0].id });
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
							{ className: 'details-container' },
							body,
							list
						)
					)
				);
			} else {
				return _react2.default.createElement(_loader2.default, null);
			}
		}
	}]);

	return TopicShow;
}(_react2.default.Component);

exports.default = TopicShow;

/***/ }),

/***/ 401:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 403:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 417:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 444:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 445:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 461:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(195);

var _reactstrap = __webpack_require__(257);

var _side = __webpack_require__(486);

var _side2 = _interopRequireDefault(_side);

var _loader = __webpack_require__(276);

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = function Card(props) {
	var cardId = props.cardId,
	    card = props.card;

	if (card[0] && card[1]) {
		var item = _react2.default.createElement(
			_reactstrap.Row,
			null,
			_react2.default.createElement(_side2.default, { key: card[0].id, side: card[0].sentence, sideId: card[0].id }),
			_react2.default.createElement(_side2.default, { key: -card[1].id, side: card[1].sentence, sideId: -card[1].id })
		);
		return item;
	} else {
		return _react2.default.createElement(_loader2.default, null);
	}
};

exports.default = Card;

/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(195);

var _reactstrap = __webpack_require__(257);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Side = function Side(props) {
	var sideId = props.sideId,
	    side = props.side;

	var item = _react2.default.createElement(
		_reactstrap.Col,
		null,
		side
	);
	return item;
};

exports.default = Side;

/***/ })

}]);
//# sourceMappingURL=6.bundle.js.map