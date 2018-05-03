heap_why_id = Question.where(sentence: "What real life problem does implementing a heap solve?").pluck(:id).first
heap_runtime_max_id = Question.where(sentence: "What is the runtime of finding the max/min of a heap?").pluck(:id).first
recursion_base_case_id = Question.where(sentence: "What is a base case?").pluck(:id).first
dns_name_id = Question.where(sentence: "What is the full form of DNS?").pluck(:id).first
http_case_sensitive_id = Question.where(sentence: "Are HTTP methods case-sensitive?").pluck(:id).first
new_kind_id = Question.where(sentence: "What kind of function is 'new'?").pluck(:id).first
new_invoke_id = Question.where(sentence: "What happens when you try to create a new object without the new keyword?").pluck(:id).first
event_loop_components_id = Question.where(sentence: "What are the components that make up the event loop cycle?").pluck(:id).first
grid_why_id = Question.where(sentence: "Why do people use grids to style websites?").pluck(:id).first
redux_store_methods_id = Question.where(sentence: "What are the different redux store methods?").pluck(:id).first
redux_context_id = Question.where(sentence: "How can you make the redux store available to all components?").pluck(:id).first

Answer.create(
  sentence: "Priority Queue",
  correct: true,
  question_id: heap_why_id
)

Answer.create(
  sentence: "Social Network",
  correct: false,
  question_id: heap_why_id
)

Answer.create(
  sentence: "O(logN)",
  correct: false,
  question_id: heap_runtime_max_id
)

Answer.create(
  sentence: "O(NlogN)",
  correct: false,
  question_id: heap_runtime_max_id
)

Answer.create(
  sentence: "O(1)",
  correct: true,
  question_id: heap_runtime_max_id
)

Answer.create(
  sentence: "O(N)",
  correct: false,
  question_id: heap_runtime_max_id
)

Answer.create(
  sentence: "The default return value of a switch statement in the recursive function.",
  correct: false,
  question_id: recursion_base_case_id
)

Answer.create(
  sentence: "The solution to the smallest input of the function",
  correct: true,
  question_id: recursion_base_case_id
)

Answer.create(
  sentence: "Dynamic Network Services",
  correct: false,
  question_id: dns_name_id
)

Answer.create(
  sentence: "Domain Name Servers",
  correct: false,
  question_id: dns_name_id
)

Answer.create(
  sentence: "Domain Name System",
  correct: true,
  question_id: dns_name_id
)

Answer.create(
  sentence: "Domain Name Service",
  correct: false,
  question_id: dns_name_id
)

Answer.create(
  sentence: "True",
  correct: false,
  question_id: http_case_sensitive_id
)

Answer.create(
  sentence: "False",
  correct: true,
  question_id: http_case_sensitive_id
)

Answer.create(
  sentence: "A class function",
  correct: false,
  question_id: new_kind_id
)

Answer.create(
  sentence: "A constructor function",
  correct: true,
  question_id: new_kind_id
)

Answer.create(
  sentence: "A factory function",
  correct: false,
  question_id: new_kind_id
)

Answer.create(
  sentence: "It invokes the class as a function instead of trying to create a new object.",
  correct: true,
  question_id: new_invoke_id
)

Answer.create(
  sentence: "It returns an error.",
  correct: false,
  question_id: new_invoke_id
)

Answer.create(
  sentence: "It returns undefined.",
  correct: false,
  question_id: new_invoke_id
)

Answer.create(
  sentence: "It returns a new object of the Object prototype class.",
  correct: false,
  question_id: new_invoke_id
)

Answer.create(
  sentence: "Action Creator, Dispatcher, Reducer, Store",
  correct: false,
  question_id: event_loop_components_id
)

Answer.create(
  sentence: "Model, View, Controller",
  correct: false,
  question_id: event_loop_components_id
)

Answer.create(
  sentence: "Call stack, Event Handlers Queue, Event Loop and JavaScript Web API's.",
  correct: true,
  question_id: event_loop_components_id
)

Answer.create(
  sentence: "To make styling webpages easier.",
  correct: false,
  question_id: grid_why_id
)

Answer.create(
  sentence: "To float items to a certain part of the page",
  correct: false,
  question_id: grid_why_id
)

Answer.create(
  sentence: "To replace flexbox and clearfix",
  correct: false,
  question_id: grid_why_id
)

Answer.create(
  sentence: "To allow elements to automatically re-structure based on changing browser sizes",
  correct: true,
  question_id: grid_why_id
)

Answer.create(
  sentence: "getState(), dispatch(), subscribe()",
  correct: true,
  question_id: redux_store_methods_id
)

Answer.create(
  sentence: "combineReducers(), compose(), Object.assign()",
  correct: false,
  question_id: redux_store_methods_id
)

Answer.create(
  sentence: "createStore(), applyMiddleware(), connect()",
  correct: false,
  question_id: redux_store_methods_id
)

Answer.create(
  sentence: "By using a thunk middleware with the applyMiddleware function.",
  correct: false,
  question_id: redux_context_id
)

Answer.create(
  sentence: "By using a special advanced React feature called 'context'. This is the 'Provider' component.",
  correct: true,
  question_id: redux_context_id
)

Answer.create(
  sentence: "It's automatically done when using you defined the store with the createStore function.",
  correct: false,
  question_id: redux_context_id
)

Answer.create(
  sentence: "It's not possible with Redux.",
  correct: false,
  question_id: redux_context_id
)
