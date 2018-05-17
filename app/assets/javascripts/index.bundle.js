/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".bundle.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				function onScriptComplete(event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,14]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _store = __webpack_require__(22);

var _store2 = _interopRequireDefault(_store);

var _root = __webpack_require__(175);

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
	var root = document.getElementById('root');
	var store = void 0;
	if (window.currentUser) {
		var preloadedState = {
			session: {
				currentUser: window.currentUser
			}
		};
		store = (0, _store2.default)(preloadedState);
	} else {
		store = (0, _store2.default)();
	}
	window.getState = store.getState;
	window.dispatch = store.dispatch;
	_reactDom2.default.render(_react2.default.createElement(_root2.default, { store: store }), root);
});

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(23);

var _subjects = __webpack_require__(147);

var _subjects2 = _interopRequireDefault(_subjects);

var _topics = __webpack_require__(150);

var _topics2 = _interopRequireDefault(_topics);

var _questions = __webpack_require__(153);

var _questions2 = _interopRequireDefault(_questions);

var _answers = __webpack_require__(156);

var _answers2 = _interopRequireDefault(_answers);

var _weeks = __webpack_require__(159);

var _weeks2 = _interopRequireDefault(_weeks);

var _days = __webpack_require__(162);

var _days2 = _interopRequireDefault(_days);

var _search = __webpack_require__(165);

var _search2 = _interopRequireDefault(_search);

var _images = __webpack_require__(168);

var _images2 = _interopRequireDefault(_images);

var _suggestions = __webpack_require__(171);

var _suggestions2 = _interopRequireDefault(_suggestions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EntitiesReducer = (0, _redux.combineReducers)({
	subjects: _subjects2.default,
	topics: _topics2.default,
	questions: _questions2.default,
	answers: _answers2.default,
	weeks: _weeks2.default,
	days: _days2.default,
	results: _search2.default,
	images: _images2.default,
	suggestions: _suggestions2.default
});

exports.default = EntitiesReducer;

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _subjects = __webpack_require__(148);

var _merge2 = __webpack_require__(49);

var _merge3 = _interopRequireDefault(_merge2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SubjectsReducer = function SubjectsReducer() {
	var oldState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];

	Object.freeze(oldState);
	switch (action.type) {
		case _subjects.RECEIVE_ALL_SUBJECTS:
			return (0, _merge3.default)({}, action.subjects);
		case _subjects.RECEIVE_SUBJECT:
			return (0, _merge3.default)({}, oldState, _defineProperty({}, action.subject.id, action.subject));
		default:
			return oldState;
	}
};

exports.default = SubjectsReducer;

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchSubject = exports.fetchSubjects = exports.RECEIVE_SUBJECT = exports.RECEIVE_ALL_SUBJECTS = undefined;

var _subjects = __webpack_require__(149);

var SubjectAPIUtil = _interopRequireWildcard(_subjects);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var RECEIVE_ALL_SUBJECTS = 'RECEIVE_ALL_SUBJECTS';
var RECEIVE_SUBJECT = 'RECEIVE_SUBJECT';

var receiveAllSubjects = function receiveAllSubjects(subjects) {
	return {
		type: RECEIVE_ALL_SUBJECTS,
		subjects: subjects
	};
};

var receiveSubject = function receiveSubject(subject) {
	return {
		type: RECEIVE_SUBJECT,
		subject: subject
	};
};

var fetchSubjects = function fetchSubjects() {
	return function (dispatch) {
		return SubjectAPIUtil.fetchSubjects().then(function (subjects) {
			dispatch(receiveAllSubjects(subjects));
		});
	};
};

var fetchSubject = function fetchSubject(id) {
	return function (dispatch) {
		return SubjectAPIUtil.fetchSubject(id).then(function (subject) {
			dispatch(receiveSubject(subject[id]));
		});
	};
};

exports.RECEIVE_ALL_SUBJECTS = RECEIVE_ALL_SUBJECTS;
exports.RECEIVE_SUBJECT = RECEIVE_SUBJECT;
exports.fetchSubjects = fetchSubjects;
exports.fetchSubject = fetchSubject;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var fetchSubjects = function fetchSubjects() {
	return $.ajax({
		method: 'GET',
		url: 'api/subjects'
	});
};

var fetchSubject = function fetchSubject(id) {
	return $.ajax({
		method: 'GET',
		url: 'api/subjects/' + id
	});
};

exports.fetchSubjects = fetchSubjects;
exports.fetchSubject = fetchSubject;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _topics = __webpack_require__(151);

var _merge2 = __webpack_require__(49);

var _merge3 = _interopRequireDefault(_merge2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TopicsReducer = function TopicsReducer() {
	var oldState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];

	Object.freeze(oldState);
	switch (action.type) {
		case _topics.RECEIVE_ALL_TOPICS:
			return (0, _merge3.default)({}, action.topics);
		case _topics.RECEIVE_TOPIC:
			return (0, _merge3.default)({}, oldState, _defineProperty({}, action.topic.id, action.topic));
		default:
			return oldState;
	}
};

exports.default = TopicsReducer;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchTopicByWeek = exports.fetchTopicsByWeek = exports.fetchTopicBySubject = exports.fetchTopicsBySubject = exports.fetchTopic = exports.fetchTopics = exports.RECEIVE_TOPIC = exports.RECEIVE_ALL_TOPICS = undefined;

var _topics = __webpack_require__(152);

var TopicAPIUtil = _interopRequireWildcard(_topics);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var RECEIVE_ALL_TOPICS = 'RECEIVE_ALL_TOPICS';
var RECEIVE_TOPIC = 'RECEIVE_TOPIC';

var receiveAllTopics = function receiveAllTopics(topics) {
	return {
		type: RECEIVE_ALL_TOPICS,
		topics: topics
	};
};

var receiveTopic = function receiveTopic(topic) {
	return {
		type: RECEIVE_TOPIC,
		topic: topic
	};
};

var fetchTopics = function fetchTopics() {
	return function (dispatch) {
		return TopicAPIUtil.fetchTopics().then(function (topics) {
			dispatch(receiveAllTopics(topics));
		});
	};
};

var fetchTopic = function fetchTopic(id) {
	return function (dispatch) {
		return TopicAPIUtil.fetchTopic(id).then(function (topic) {
			dispatch(receiveTopic(topic[id]));
		});
	};
};

var fetchTopicsBySubject = function fetchTopicsBySubject(subjectId) {
	return function (dispatch) {
		return TopicAPIUtil.fetchTopicsBySubject(subjectId).then(function (topics) {
			dispatch(receiveAllTopics(topics));
		});
	};
};

var fetchTopicBySubject = function fetchTopicBySubject(subjectId, id) {
	return function (dispatch) {
		return TopicAPIUtil.fetchTopicBySubject(subjectId, id).then(function (topic) {
			dispatch(receiveTopic(topic[id]));
		});
	};
};

var fetchTopicsByWeek = function fetchTopicsByWeek(weekId) {
	return function (dispatch) {
		return TopicAPIUtil.fetchTopicsByWeek(weekId).then(function (topics) {
			dispatch(receiveAllTopics(topics));
		});
	};
};

var fetchTopicByWeek = function fetchTopicByWeek(weekId, id) {
	return function (dispatch) {
		return TopicAPIUtil.fetchTopicByWeek(weekId, id).then(function (topic) {
			dispatch(receiveTopic(topic[id]));
		});
	};
};

exports.RECEIVE_ALL_TOPICS = RECEIVE_ALL_TOPICS;
exports.RECEIVE_TOPIC = RECEIVE_TOPIC;
exports.fetchTopics = fetchTopics;
exports.fetchTopic = fetchTopic;
exports.fetchTopicsBySubject = fetchTopicsBySubject;
exports.fetchTopicBySubject = fetchTopicBySubject;
exports.fetchTopicsByWeek = fetchTopicsByWeek;
exports.fetchTopicByWeek = fetchTopicByWeek;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var fetchTopics = function fetchTopics() {
	return $.ajax({
		method: 'GET',
		url: 'api/topics'
	});
};

var fetchTopic = function fetchTopic(id) {
	return $.ajax({
		method: 'GET',
		url: 'api/topics/' + id
	});
};

var fetchTopicsBySubject = function fetchTopicsBySubject(subjectId) {
	return $.ajax({
		method: 'GET',
		url: 'api/subjects/' + subjectId + '/topics'
	});
};

var fetchTopicBySubject = function fetchTopicBySubject(subjectId, id) {
	return $.ajax({
		method: 'GET',
		url: 'api/subjects/' + subjectId + '/topics/' + id
	});
};

var fetchTopicsByWeek = function fetchTopicsByWeek(weekId) {
	return $.ajax({
		method: 'GET',
		url: 'api/weeks/' + weekId + '/topics'
	});
};

var fetchTopicByWeek = function fetchTopicByWeek(weekId, id) {
	return $.ajax({
		method: 'GET',
		url: 'api/weeks/' + weekId + '/topics/' + id
	});
};

exports.fetchTopics = fetchTopics;
exports.fetchTopic = fetchTopic;
exports.fetchTopicsBySubject = fetchTopicsBySubject;
exports.fetchTopicBySubject = fetchTopicBySubject;
exports.fetchTopicsByWeek = fetchTopicsByWeek;
exports.fetchTopicByWeek = fetchTopicByWeek;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _questions = __webpack_require__(154);

var _merge2 = __webpack_require__(49);

var _merge3 = _interopRequireDefault(_merge2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var QuestionsReducer = function QuestionsReducer() {
	var oldState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];

	Object.freeze(oldState);
	switch (action.type) {
		case _questions.RECEIVE_ALL_QUESTIONS:
			return (0, _merge3.default)({}, action.questions);
		case _questions.RECEIVE_QUESTION:
			return (0, _merge3.default)({}, oldState, _defineProperty({}, action.question.id, action.question));
		default:
			return oldState;
	}
};

exports.default = QuestionsReducer;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchQuestionByTopic = exports.fetchQuestionsByTopic = exports.fetchQuestion = exports.fetchQuestions = exports.RECEIVE_QUESTION = exports.RECEIVE_ALL_QUESTIONS = undefined;

var _questions = __webpack_require__(155);

var QuestionAPIUtil = _interopRequireWildcard(_questions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';
var RECEIVE_QUESTION = 'RECEIVE_QUESTION';

var receiveAllQuestions = function receiveAllQuestions(questions) {
	return {
		type: RECEIVE_ALL_QUESTIONS,
		questions: questions
	};
};

var receiveQuestion = function receiveQuestion(question) {
	return {
		type: RECEIVE_QUESTION,
		question: question
	};
};

var fetchQuestions = function fetchQuestions() {
	return function (dispatch) {
		return QuestionAPIUtil.fetchQuestions().then(function (questions) {
			dispatch(receiveAllQuestions(questions));
		});
	};
};

var fetchQuestion = function fetchQuestion(id) {
	return function (dispatch) {
		return QuestionAPIUtil.fetchQuestion(id).then(function (question) {
			dispatch(receiveQuestion(question[id]));
		});
	};
};

var fetchQuestionsByTopic = function fetchQuestionsByTopic(topicId) {
	return function (dispatch) {
		return QuestionAPIUtil.fetchQuestionsByTopic(topicId).then(function (questions) {
			dispatch(receiveAllQuestions(questions));
		});
	};
};

var fetchQuestionByTopic = function fetchQuestionByTopic(topicId, id) {
	return function (dispatch) {
		return QuestionAPIUtil.fetchQuestionByTopic(topicId, id).then(function (question) {
			dispatch(receiveQuestion(question[id]));
		});
	};
};

exports.RECEIVE_ALL_QUESTIONS = RECEIVE_ALL_QUESTIONS;
exports.RECEIVE_QUESTION = RECEIVE_QUESTION;
exports.fetchQuestions = fetchQuestions;
exports.fetchQuestion = fetchQuestion;
exports.fetchQuestionsByTopic = fetchQuestionsByTopic;
exports.fetchQuestionByTopic = fetchQuestionByTopic;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var fetchQuestions = function fetchQuestions() {
	return $.ajax({
		method: 'GET',
		url: 'api/questions'
	});
};

var fetchQuestion = function fetchQuestion(id) {
	return $.ajax({
		method: 'GET',
		url: 'api/questions/' + id
	});
};

var fetchQuestionsByTopic = function fetchQuestionsByTopic(topicId) {
	return $.ajax({
		method: 'GET',
		url: 'api/topics/' + topicId + '/questions'
	});
};

var fetchQuestionByTopic = function fetchQuestionByTopic(topicId, id) {
	return $.ajax({
		method: 'GET',
		url: 'api/topics/' + topicId + '/questions/' + id
	});
};

exports.fetchQuestions = fetchQuestions;
exports.fetchQuestion = fetchQuestion;
exports.fetchQuestionsByTopic = fetchQuestionsByTopic;
exports.fetchQuestionByTopic = fetchQuestionByTopic;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _answers = __webpack_require__(157);

var _merge2 = __webpack_require__(49);

var _merge3 = _interopRequireDefault(_merge2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AnswersReducer = function AnswersReducer() {
	var oldState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];

	Object.freeze(oldState);
	switch (action.type) {
		case _answers.RECEIVE_ALL_ANSWERS:
			return (0, _merge3.default)({}, action.answers);
		case _answers.RECEIVE_ANSWER:
			return (0, _merge3.default)({}, oldState, _defineProperty({}, action.answer.id, action.answer));
		default:
			return oldState;
	}
};

exports.default = AnswersReducer;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchAnswerByTopic = exports.fetchAnswersByTopic = exports.fetchAnswerByQuestion = exports.fetchAnswersByQuestion = exports.fetchAnswer = exports.fetchAnswers = exports.RECEIVE_ANSWER = exports.RECEIVE_ALL_ANSWERS = undefined;

var _answers = __webpack_require__(158);

var AnswerAPIUtil = _interopRequireWildcard(_answers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var RECEIVE_ALL_ANSWERS = 'RECEIVE_ALL_ANSWERS';
var RECEIVE_ANSWER = 'RECEIVE_ANSWER';

var receiveAllAnswers = function receiveAllAnswers(answers) {
	return {
		type: RECEIVE_ALL_ANSWERS,
		answers: answers
	};
};

var receiveAnswer = function receiveAnswer(answer) {
	return {
		type: RECEIVE_ANSWER,
		answer: answer
	};
};

var fetchAnswers = function fetchAnswers() {
	return function (dispatch) {
		return AnswerAPIUtil.fetchAnswers().then(function (answers) {
			dispatch(receiveAllAnswers(answers));
		});
	};
};

var fetchAnswer = function fetchAnswer(id) {
	return function (dispatch) {
		return AnswerAPIUtil.fetchAnswer(id).then(function (answer) {
			dispatch(receiveAnswer(answer[id]));
		});
	};
};

var fetchAnswersByQuestion = function fetchAnswersByQuestion(questionId) {
	return function (dispatch) {
		return AnswerAPIUtil.fetchAnswersByQuestion(questionId).then(function (answers) {
			dispatch(receiveAllAnswers(answers));
		});
	};
};

var fetchAnswerByQuestion = function fetchAnswerByQuestion(questionId, id) {
	return function (dispatch) {
		return AnswerAPIUtil.fetchAnswerByQuestion(questionId, id).then(function (answer) {
			dispatch(receiveAnswer(answer[id]));
		});
	};
};

var fetchAnswersByTopic = function fetchAnswersByTopic(topicId) {
	return function (dispatch) {
		return AnswerAPIUtil.fetchAnswersByTopic(topicId).then(function (answers) {
			dispatch(receiveAllAnswers(answers));
		});
	};
};

var fetchAnswerByTopic = function fetchAnswerByTopic(topicId, id) {
	return function (dispatch) {
		return AnswerAPIUtil.fetchAnswerByTopic(topicId, id).then(function (answer) {
			dispatch(receiveAnswer(answer[id]));
		});
	};
};

exports.RECEIVE_ALL_ANSWERS = RECEIVE_ALL_ANSWERS;
exports.RECEIVE_ANSWER = RECEIVE_ANSWER;
exports.fetchAnswers = fetchAnswers;
exports.fetchAnswer = fetchAnswer;
exports.fetchAnswersByQuestion = fetchAnswersByQuestion;
exports.fetchAnswerByQuestion = fetchAnswerByQuestion;
exports.fetchAnswersByTopic = fetchAnswersByTopic;
exports.fetchAnswerByTopic = fetchAnswerByTopic;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var fetchAnswers = function fetchAnswers() {
	return $.ajax({
		method: 'GET',
		url: 'api/answers'
	});
};

var fetchAnswer = function fetchAnswer(id) {
	return $.ajax({
		method: 'GET',
		url: 'api/answers/' + id
	});
};

var fetchAnswersByQuestion = function fetchAnswersByQuestion(questionId) {
	return $.ajax({
		method: 'GET',
		url: 'api/questions/' + questionId + '/answers'
	});
};

var fetchAnswerByQuestion = function fetchAnswerByQuestion(questionId, id) {
	return $.ajax({
		method: 'GET',
		url: 'api/questions/' + questionId + '/answers/' + id
	});
};

var fetchAnswersByTopic = function fetchAnswersByTopic(topicId) {
	return $.ajax({
		method: 'GET',
		url: 'api/topics/' + topicId + '/answers'
	});
};

var fetchAnswerByTopic = function fetchAnswerByTopic(topicId, id) {
	return $.ajax({
		method: 'GET',
		url: 'api/topics/' + topicId + '/answers/' + id
	});
};

exports.fetchAnswers = fetchAnswers;
exports.fetchAnswer = fetchAnswer;
exports.fetchAnswersByQuestion = fetchAnswersByQuestion;
exports.fetchAnswerByQuestion = fetchAnswerByQuestion;
exports.fetchAnswersByTopic = fetchAnswersByTopic;
exports.fetchAnswerByTopic = fetchAnswerByTopic;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _weeks = __webpack_require__(160);

var _merge2 = __webpack_require__(49);

var _merge3 = _interopRequireDefault(_merge2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var WeeksReducer = function WeeksReducer() {
	var oldState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];

	Object.freeze(oldState);
	switch (action.type) {
		case _weeks.RECEIVE_ALL_WEEKS:
			return (0, _merge3.default)({}, action.weeks);
		case _weeks.RECEIVE_WEEK:
			return (0, _merge3.default)({}, oldState, _defineProperty({}, action.week.id, action.week));
		default:
			return oldState;
	}
};

exports.default = WeeksReducer;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchWeek = exports.fetchWeeks = exports.RECEIVE_WEEK = exports.RECEIVE_ALL_WEEKS = undefined;

var _weeks = __webpack_require__(161);

var WeekAPIUtil = _interopRequireWildcard(_weeks);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var RECEIVE_ALL_WEEKS = 'RECEIVE_ALL_WEEKS';
var RECEIVE_WEEK = 'RECEIVE_WEEK';

var receiveAllWeeks = function receiveAllWeeks(weeks) {
	return {
		type: RECEIVE_ALL_WEEKS,
		weeks: weeks
	};
};

var receiveWeek = function receiveWeek(week) {
	return {
		type: RECEIVE_WEEK,
		week: week
	};
};

var fetchWeeks = function fetchWeeks() {
	return function (dispatch) {
		return WeekAPIUtil.fetchWeeks().then(function (weeks) {
			dispatch(receiveAllWeeks(weeks));
		});
	};
};

var fetchWeek = function fetchWeek(id) {
	return function (dispatch) {
		return WeekAPIUtil.fetchWeek(id).then(function (week) {
			dispatch(receiveWeek(week[id]));
		});
	};
};

exports.RECEIVE_ALL_WEEKS = RECEIVE_ALL_WEEKS;
exports.RECEIVE_WEEK = RECEIVE_WEEK;
exports.fetchWeeks = fetchWeeks;
exports.fetchWeek = fetchWeek;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var fetchWeeks = function fetchWeeks() {
	return $.ajax({
		method: 'GET',
		url: 'api/weeks'
	});
};

var fetchWeek = function fetchWeek(id) {
	return $.ajax({
		method: 'GET',
		url: 'api/weeks/' + id
	});
};

exports.fetchWeeks = fetchWeeks;
exports.fetchWeek = fetchWeek;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _days = __webpack_require__(163);

var _merge2 = __webpack_require__(49);

var _merge3 = _interopRequireDefault(_merge2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DaysReducer = function DaysReducer() {
	var oldState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];

	Object.freeze(oldState);
	switch (action.type) {
		case _days.RECEIVE_ALL_DAYS:
			return (0, _merge3.default)({}, action.days);
		case _days.RECEIVE_DAY:
			return (0, _merge3.default)({}, oldState, _defineProperty({}, action.day.id, action.day));
		default:
			return oldState;
	}
};

exports.default = DaysReducer;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchDayByWeek = exports.fetchDaysByWeek = exports.fetchDay = exports.fetchDays = exports.RECEIVE_DAY = exports.RECEIVE_ALL_DAYS = undefined;

var _days = __webpack_require__(164);

var DayAPIUtil = _interopRequireWildcard(_days);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var RECEIVE_ALL_DAYS = 'RECEIVE_ALL_DAYS';
var RECEIVE_DAY = 'RECEIVE_DAY';

var receiveAllDays = function receiveAllDays(days) {
	return {
		type: RECEIVE_ALL_DAYS,
		days: days
	};
};

var receiveDay = function receiveDay(day) {
	return {
		type: RECEIVE_DAY,
		day: day
	};
};

var fetchDays = function fetchDays() {
	return function (dispatch) {
		return DayAPIUtil.fetchDays().then(function (days) {
			dispatch(receiveAllDays(days));
		});
	};
};

var fetchDay = function fetchDay(id) {
	return function (dispatch) {
		return DayAPIUtil.fetchDay(id).then(function (day) {
			dispatch(receiveDay(day[id]));
		});
	};
};

var fetchDaysByWeek = function fetchDaysByWeek(weekId) {
	return function (dispatch) {
		return DayAPIUtil.fetchDaysByWeek(weekId).then(function (days) {
			dispatch(receiveAllDays(days));
		});
	};
};

var fetchDayByWeek = function fetchDayByWeek(weekId, id) {
	return function (dispatch) {
		return DayAPIUtil.fetchDaysByWeek(weekId).then(function (day) {
			dispatch(receiveDay(day[id]));
		});
	};
};

exports.RECEIVE_ALL_DAYS = RECEIVE_ALL_DAYS;
exports.RECEIVE_DAY = RECEIVE_DAY;
exports.fetchDays = fetchDays;
exports.fetchDay = fetchDay;
exports.fetchDaysByWeek = fetchDaysByWeek;
exports.fetchDayByWeek = fetchDayByWeek;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var fetchDays = function fetchDays() {
	return $.ajax({
		method: 'GET',
		url: 'api/days'
	});
};

var fetchDay = function fetchDay(id) {
	return $.ajax({
		method: 'GET',
		url: 'api/days/' + id
	});
};

var fetchDaysByWeek = function fetchDaysByWeek(weekId) {
	return $.ajax({
		method: 'GET',
		url: 'api/weeks/' + weekId + '/days'
	});
};

var fetchDayByWeek = function fetchDayByWeek(weekId, id) {
	return $.ajax({
		method: 'GET',
		url: 'api/weeks/' + weekId + '/days/' + id
	});
};

exports.fetchDays = fetchDays;
exports.fetchDay = fetchDay;
exports.fetchDaysByWeek = fetchDaysByWeek;
exports.fetchDayByWeek = fetchDayByWeek;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _search = __webpack_require__(166);

var _merge = __webpack_require__(49);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchesReducer = function SearchesReducer() {
	var oldState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];

	Object.freeze(oldState);
	switch (action.type) {
		case _search.RECEIVE_ALL_RESULTS:
			return (0, _merge2.default)({}, action.results);
		default:
			return oldState;
	}
};

exports.default = SearchesReducer;

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchResults = exports.RECEIVE_ALL_RESULTS = undefined;

var _search = __webpack_require__(167);

var SearchAPIUtil = _interopRequireWildcard(_search);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var RECEIVE_ALL_RESULTS = 'RECEIVE_ALL_RESULTS';

var receiveAllResults = function receiveAllResults(results) {
	return {
		type: RECEIVE_ALL_RESULTS,
		results: results
	};
};

var fetchResults = function fetchResults(value) {
	return function (dispatch) {
		return SearchAPIUtil.searchTopics(value).then(function (results) {
			dispatch(receiveAllResults(results));
		});
	};
};

exports.RECEIVE_ALL_RESULTS = RECEIVE_ALL_RESULTS;
exports.fetchResults = fetchResults;

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var searchTopics = function searchTopics(value) {
	return $.ajax({
		method: 'GET',
		url: 'api/searches/',
		data: { value: value }
	});
};

exports.searchTopics = searchTopics;

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _images = __webpack_require__(169);

var _merge2 = __webpack_require__(49);

var _merge3 = _interopRequireDefault(_merge2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ImagesReducer = function ImagesReducer() {
	var oldState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];

	Object.freeze(oldState);
	switch (action.type) {
		case _images.RECEIVE_ALL_IMAGES:
			return (0, _merge3.default)({}, action.images);
		case _images.RECEIVE_IMAGE:
			return (0, _merge3.default)({}, oldState, _defineProperty({}, action.image.id, action.image));
		default:
			return oldState;
	}
};

exports.default = ImagesReducer;

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchImageBySubject = exports.fetchImagesBySubject = exports.fetchImage = exports.fetchImages = exports.RECEIVE_IMAGE = exports.RECEIVE_ALL_IMAGES = undefined;

var _images = __webpack_require__(170);

var ImageAPIUtil = _interopRequireWildcard(_images);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var RECEIVE_ALL_IMAGES = 'RECEIVE_ALL_IMAGES';
var RECEIVE_IMAGE = 'RECEIVE_IMAGE';

var receiveAllImages = function receiveAllImages(images) {
	return {
		type: RECEIVE_ALL_IMAGES,
		images: images
	};
};

var receiveImage = function receiveImage(image) {
	return {
		type: RECEIVE_IMAGE,
		image: image
	};
};

var fetchImages = function fetchImages() {
	return function (dispatch) {
		return ImageAPIUtil.fetchImages().then(function (images) {
			dispatch(receiveAllImages(images));
		});
	};
};

var fetchImage = function fetchImage(id) {
	return function (dispatch) {
		return ImageAPIUtil.fetchImage(id).then(function (image) {
			dispatch(receiveImage(image[id]));
		});
	};
};

var fetchImagesBySubject = function fetchImagesBySubject(subjectId) {
	return function (dispatch) {
		return ImageAPIUtil.fetchImagesBySubject(subjectId).then(function (images) {
			dispatch(receiveAllImages(images));
		});
	};
};

var fetchImageBySubject = function fetchImageBySubject(subjectId, id) {
	return function (dispatch) {
		return ImageAPIUtil.fetchImageBySubject(subjectId, id).then(function (image) {
			dispatch(receiveImage(image[id]));
		});
	};
};

exports.RECEIVE_ALL_IMAGES = RECEIVE_ALL_IMAGES;
exports.RECEIVE_IMAGE = RECEIVE_IMAGE;
exports.fetchImages = fetchImages;
exports.fetchImage = fetchImage;
exports.fetchImagesBySubject = fetchImagesBySubject;
exports.fetchImageBySubject = fetchImageBySubject;

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var fetchImages = function fetchImages() {
	return $.ajax({
		method: 'GET',
		url: 'api/images'
	});
};

var fetchImage = function fetchImage(id) {
	return $.ajax({
		method: 'GET',
		url: 'api/images/' + id
	});
};

var fetchImagesByTopic = function fetchImagesByTopic(topicId) {
	return $.ajax({
		method: 'GET',
		url: 'api/topics/' + topicId + '/images'
	});
};

var fetchImageByTopic = function fetchImageByTopic(topicId, id) {
	return $.ajax({
		method: 'GET',
		url: 'api/topics/' + topicId + '/images/' + id
	});
};

var fetchImagesBySubject = function fetchImagesBySubject(subjectId) {
	return $.ajax({
		method: 'GET',
		url: 'api/subjects/' + subjectId + '/images'
	});
};

var fetchImageBySubject = function fetchImageBySubject(subjectId, id) {
	return $.ajax({
		method: 'GET',
		url: 'api/subjects/' + subjectId + '/images/' + id
	});
};

exports.fetchImages = fetchImages;
exports.fetchImage = fetchImage;
exports.fetchImagesByTopic = fetchImagesByTopic;
exports.fetchImageByTopic = fetchImageByTopic;
exports.fetchImagesBySubject = fetchImagesBySubject;
exports.fetchImageBySubject = fetchImageBySubject;

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _suggestions = __webpack_require__(172);

var _merge2 = __webpack_require__(49);

var _merge3 = _interopRequireDefault(_merge2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SuggestionsReducer = function SuggestionsReducer() {
	var oldState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];

	Object.freeze(oldState);
	switch (action.type) {
		case _suggestions.RECEIVE_ALL_SUGGESTIONS:
			return (0, _merge3.default)({}, action.suggestions);
		case _suggestions.RECEIVE_SUGGESTION:
			return (0, _merge3.default)({}, oldState, _defineProperty({}, action.suggestion.id, action.suggestion));
		default:
			return oldState;
	}
};

exports.default = SuggestionsReducer;

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.createSuggestion = exports.fetchSuggestion = exports.fetchSuggestions = exports.RECEIVE_SUGGESTION = exports.RECEIVE_ALL_SUGGESTIONS = undefined;

var _suggestions = __webpack_require__(173);

var SuggestionAPIUtil = _interopRequireWildcard(_suggestions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var RECEIVE_ALL_SUGGESTIONS = 'RECEIVE_ALL_SUGGESTIONS';
var RECEIVE_SUGGESTION = 'RECEIVE_SUGGESTION';

var receiveAllSuggestions = function receiveAllSuggestions(suggestions) {
	return {
		type: RECEIVE_ALL_SUGGESTIONS,
		suggestions: suggestions
	};
};

var receiveSuggestion = function receiveSuggestion(suggestion) {
	return {
		type: RECEIVE_SUGGESTION,
		suggestion: suggestion
	};
};

var fetchSuggestions = function fetchSuggestions() {
	return function (dispatch) {
		return SuggestionAPIUtil.fetchSuggestions().then(function (suggestions) {
			dispatch(receiveAllSuggestions(suggestions));
		});
	};
};

var fetchSuggestion = function fetchSuggestion(id) {
	return function (dispatch) {
		return SuggestionAPIUtil.fetchSuggestion(id).then(function (suggestion) {
			dispatch(receiveSuggestion(suggestion[id]));
		});
	};
};

var createSuggestion = function createSuggestion(suggestion) {
	return function (dispatch) {
		return SuggestionAPIUtil.createSuggestion(suggestion).then(function (payload) {
			dispatch(receiveSuggestion(payload));
		});
	};
};

exports.RECEIVE_ALL_SUGGESTIONS = RECEIVE_ALL_SUGGESTIONS;
exports.RECEIVE_SUGGESTION = RECEIVE_SUGGESTION;
exports.fetchSuggestions = fetchSuggestions;
exports.fetchSuggestion = fetchSuggestion;
exports.createSuggestion = createSuggestion;

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var fetchSuggestions = function fetchSuggestions() {
	return $.ajax({
		method: 'GET',
		url: 'api/suggestions'
	});
};

var fetchSuggestion = function fetchSuggestion(id) {
	return $.ajax({
		method: 'GET',
		url: 'api/suggestions/' + id
	});
};

var createSuggestion = function createSuggestion(suggestion) {
	return $.ajax({
		method: 'POST',
		url: 'api/suggestions',
		data: { suggestion: suggestion }
	});
};

exports.fetchSuggestions = fetchSuggestions;
exports.fetchSuggestion = fetchSuggestion;
exports.createSuggestion = createSuggestion;

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(176);

var _reactRouterDom = __webpack_require__(195);

var _app = __webpack_require__(238);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Root = function Root(_ref) {
	var store = _ref.store;
	return _react2.default.createElement(
		_reactRedux.Provider,
		{ store: store },
		_react2.default.createElement(
			_reactRouterDom.HashRouter,
			null,
			_react2.default.createElement(_app2.default, null)
		)
	);
};

exports.default = Root;

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(23);

var _reduxThunk = __webpack_require__(44);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _root = __webpack_require__(45);

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middlewares = [_reduxThunk2.default];

if (true) {
	var _require = __webpack_require__(174),
	    logger = _require.logger;

	middlewares.push(logger);
}

var configureStore = function configureStore() {
	var preloadedState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	return (0, _redux.createStore)(_root2.default, preloadedState, _redux.applyMiddleware.apply(undefined, middlewares));
};

exports.default = configureStore;

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(195);

var _route = __webpack_require__(239);

var _reactLoadable = __webpack_require__(240);

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _loader = __webpack_require__(241);

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import NavigationContainer from './navigation/navigation_container';
// import Directory from './directory/directory';
// import Home from './home/home';
// import SignupContainer from './session/signup_container';
// import LoginContainer from './session/login_container';
// import SubjectIndexContainer from './subject/subject_index_container';
// import SubjectShowContainer from './subject/subject_show_container';
// import TopicShowContainer from './topic/topic_show_container';
// import WeekShowContainer from './week/week_show_container';
// import ResultContainer from './result/result_container';
// import SuggestionIndexContainer from './suggestion/suggestion_index_container';
// import SuggestionFormContainer from './suggestion/suggestion_form_container';
// import Confirmation from './confirmation/confirmation';

var NavigationContainer = (0, _reactLoadable2.default)({
	loader: function loader() {
		return Promise.all(/* import() */[__webpack_require__.e(14), __webpack_require__.e(1)]).then(function() { var module = __webpack_require__(242); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
	},
	loading: _loader2.default
});

var Directory = (0, _reactLoadable2.default)({
	loader: function loader() {
		return Promise.all(/* import() */[__webpack_require__.e(14), __webpack_require__.e(2)]).then(function() { var module = __webpack_require__(274); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
	},
	loading: _loader2.default
});

var Home = (0, _reactLoadable2.default)({
	loader: function loader() {
		return __webpack_require__.e(/* import() */ 3).then(function() { var module = __webpack_require__(275); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
	},
	loading: _loader2.default
});

var SignupContainer = (0, _reactLoadable2.default)({
	loader: function loader() {
		return Promise.all(/* import() */[__webpack_require__.e(14), __webpack_require__.e(4)]).then(function() { var module = __webpack_require__(276); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
	},
	loading: _loader2.default
});

var LoginContainer = (0, _reactLoadable2.default)({
	loader: function loader() {
		return Promise.all(/* import() */[__webpack_require__.e(14), __webpack_require__.e(5)]).then(function() { var module = __webpack_require__(278); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
	},
	loading: _loader2.default
});

var SubjectIndexContainer = (0, _reactLoadable2.default)({
	loader: function loader() {
		return Promise.all(/* import() */[__webpack_require__.e(14), __webpack_require__.e(6)]).then(function() { var module = __webpack_require__(280); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
	},
	loading: _loader2.default
});

var SubjectShowContainer = (0, _reactLoadable2.default)({
	loader: function loader() {
		return Promise.all(/* import() */[__webpack_require__.e(14), __webpack_require__.e(7)]).then(function() { var module = __webpack_require__(283); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
	},
	loading: _loader2.default
});

var TopicShowContainer = (0, _reactLoadable2.default)({
	loader: function loader() {
		return Promise.all(/* import() */[__webpack_require__.e(14), __webpack_require__.e(8)]).then(function() { var module = __webpack_require__(287); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
	},
	loading: _loader2.default
});

var WeekShowContainer = (0, _reactLoadable2.default)({
	loader: function loader() {
		return Promise.all(/* import() */[__webpack_require__.e(14), __webpack_require__.e(9)]).then(function() { var module = __webpack_require__(501); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
	},
	loading: _loader2.default
});

var ResultContainer = (0, _reactLoadable2.default)({
	loader: function loader() {
		return Promise.all(/* import() */[__webpack_require__.e(14), __webpack_require__.e(10)]).then(function() { var module = __webpack_require__(509); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
	},
	loading: _loader2.default
});

var SuggestionIndexContainer = (0, _reactLoadable2.default)({
	loader: function loader() {
		return Promise.all(/* import() */[__webpack_require__.e(14), __webpack_require__.e(11)]).then(function() { var module = __webpack_require__(511); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
	},
	loading: _loader2.default
});

var SuggestionFormContainer = (0, _reactLoadable2.default)({
	loader: function loader() {
		return Promise.all(/* import() */[__webpack_require__.e(14), __webpack_require__.e(12)]).then(function() { var module = __webpack_require__(513); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
	},
	loading: _loader2.default
});

var Confirmation = (0, _reactLoadable2.default)({
	loader: function loader() {
		return __webpack_require__.e(/* import() */ 13).then(function() { var module = __webpack_require__(515); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
	},
	loading: _loader2.default
});

var App = function App() {
	return _react2.default.createElement(
		'div',
		{ id: 'app' },
		_react2.default.createElement(
			'header',
			null,
			_react2.default.createElement(_reactRouterDom.Route, { path: '/', component: NavigationContainer })
		),
		_react2.default.createElement(
			_reactRouterDom.Switch,
			null,
			_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: Home }),
			_react2.default.createElement(_route.AuthRoute, { path: '/signup', component: SignupContainer }),
			_react2.default.createElement(_route.AuthRoute, { path: '/login', component: LoginContainer }),
			_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/suggestions', component: SuggestionIndexContainer }),
			_react2.default.createElement(_reactRouterDom.Route, {
				exact: true,
				path: '/suggestions/new',
				component: SuggestionFormContainer
			}),
			_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/confirmation', component: Confirmation }),
			_react2.default.createElement(_route.ProtectedRoute, {
				exact: true,
				path: '/subjects',
				component: SubjectIndexContainer
			}),
			_react2.default.createElement(_route.ProtectedRoute, {
				exact: true,
				path: '/subjects/:subjectId',
				component: SubjectShowContainer
			}),
			_react2.default.createElement(_route.ProtectedRoute, {
				exact: true,
				path: '/topics/:topicId',
				component: TopicShowContainer
			}),
			_react2.default.createElement(_route.ProtectedRoute, {
				exact: true,
				path: '/weeks/:weekId',
				component: WeekShowContainer
			}),
			_react2.default.createElement(_route.ProtectedRoute, { path: '/results', component: ResultContainer }),
			_react2.default.createElement(_reactRouterDom.Redirect, { to: '/' })
		),
		_react2.default.createElement(
			'footer',
			null,
			_react2.default.createElement(_reactRouterDom.Route, { path: '/', component: Directory })
		)
	);
};

exports.default = App;

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ProtectedRoute = exports.AuthRoute = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(176);

var _reactRouterDom = __webpack_require__(195);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
	return {
		loggedIn: Boolean(state.session.currentUser)
	};
};

var Auth = function Auth(_ref) {
	var loggedIn = _ref.loggedIn,
	    path = _ref.path,
	    Component = _ref.component;
	return _react2.default.createElement(_reactRouterDom.Route, {
		path: path,
		render: function render(props) {
			return loggedIn ? _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' }) : _react2.default.createElement(Component, props);
		}
	});
};

var Protected = function Protected(_ref2) {
	var loggedIn = _ref2.loggedIn,
	    path = _ref2.path,
	    Component = _ref2.component;
	return _react2.default.createElement(_reactRouterDom.Route, {
		path: path,
		render: function render(props) {
			return loggedIn ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/signup' });
		}
	});
};

var AuthRoute = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(Auth));
var ProtectedRoute = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(Protected));

exports.AuthRoute = AuthRoute;
exports.ProtectedRoute = ProtectedRoute;

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = function Loader(props) {
	return _react2.default.createElement(
		"div",
		null,
		_react2.default.createElement(
			"div",
			{ className: "loader" },
			_react2.default.createElement("div", { className: "bar" }),
			_react2.default.createElement("div", { className: "bar" }),
			_react2.default.createElement("div", { className: "bar" }),
			_react2.default.createElement("div", { className: "bar" }),
			_react2.default.createElement("div", { className: "bar" }),
			_react2.default.createElement("div", { className: "bar" }),
			_react2.default.createElement("div", { className: "bar" }),
			_react2.default.createElement("div", { className: "bar" }),
			_react2.default.createElement("div", { className: "bar" }),
			_react2.default.createElement("div", { className: "bar" })
		),
		_react2.default.createElement(
			"div",
			{ className: "loader loader--reflect" },
			_react2.default.createElement("div", { className: "bar" }),
			_react2.default.createElement("div", { className: "bar" }),
			_react2.default.createElement("div", { className: "bar" }),
			_react2.default.createElement("div", { className: "bar" }),
			_react2.default.createElement("div", { className: "bar" }),
			_react2.default.createElement("div", { className: "bar" }),
			_react2.default.createElement("div", { className: "bar" }),
			_react2.default.createElement("div", { className: "bar" }),
			_react2.default.createElement("div", { className: "bar" }),
			_react2.default.createElement("div", { className: "bar" })
		)
	);
};

exports.default = Loader;

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(23);

var _session = __webpack_require__(46);

var _session2 = _interopRequireDefault(_session);

var _entities = __webpack_require__(146);

var _entities2 = _interopRequireDefault(_entities);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RootReducer = (0, _redux.combineReducers)({
	entities: _entities2.default,
	session: _session2.default
});

exports.default = RootReducer;

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _session = __webpack_require__(47);

var _merge = __webpack_require__(49);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _nullSession = {
	currentUser: null
};

var Session = function Session() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _nullSession;
	var action = arguments[1];

	Object.freeze(state);
	switch (action.type) {
		case _session.RECEIVE_CURRENT_USER:
			return (0, _merge2.default)({}, { currentUser: action.user });
		case _session.LOGOUT_CURRENT_USER:
			return _nullSession;
		default:
			return state;
	}
};

exports.default = Session;

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.logout = exports.login = exports.createNewUser = exports.LOGOUT_CURRENT_USER = exports.RECEIVE_CURRENT_USER = undefined;

var _session = __webpack_require__(48);

var SessionAPIUtil = _interopRequireWildcard(_session);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
var LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

var receiveCurrentUser = function receiveCurrentUser(user) {
	return {
		type: RECEIVE_CURRENT_USER,
		user: user
	};
};

var logoutCurrentUser = function logoutCurrentUser() {
	return {
		type: LOGOUT_CURRENT_USER
	};
};

var createNewUser = function createNewUser(formUser) {
	return function (dispatch) {
		return SessionAPIUtil.postUser(formUser).then(function (user) {
			return dispatch(receiveCurrentUser(user));
		});
	};
};

var login = function login(formUser) {
	return function (dispatch) {
		return SessionAPIUtil.postSession(formUser).then(function (user) {
			return dispatch(receiveCurrentUser(user));
		});
	};
};

var logout = function logout() {
	return function (dispatch) {
		return SessionAPIUtil.deleteSession().then(function () {
			return dispatch(logoutCurrentUser());
		});
	};
};

exports.RECEIVE_CURRENT_USER = RECEIVE_CURRENT_USER;
exports.LOGOUT_CURRENT_USER = LOGOUT_CURRENT_USER;
exports.createNewUser = createNewUser;
exports.login = login;
exports.logout = logout;

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var postUser = function postUser(user) {
	return $.ajax({
		method: 'POST',
		url: 'api/users',
		data: { user: user }
	});
};

var postSession = function postSession(user) {
	return $.ajax({
		method: 'POST',
		url: 'api/session',
		data: { user: user }
	});
};

var deleteSession = function deleteSession() {
	return $.ajax({
		method: 'DELETE',
		url: 'api/session'
	});
};

exports.postUser = postUser;
exports.postSession = postSession;
exports.deleteSession = deleteSession;

/***/ })

/******/ });
//# sourceMappingURL=index.bundle.js.map