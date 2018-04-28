heap_why_a1 = Answer.create(
  sentence: "Priority Queue",
  correct: true,
  question_id: heap_why_q.id
)

heap_why_a2 = Answer.create(
  sentence: "Social Network",
  correct: false,
  question_id: heap_why_q.id
)

heap_runtime_max_a1 = Answer.create(
  sentence: "O(logN)",
  correct: false,
  question_id: heap_runtime_max_q.id
)

heap_runtime_max_a2 = Answer.create(
  sentence: "O(NlogN)",
  correct: false,
  question_id: heap_runtime_max_q.id
)

heap_runtime_max_a3 = Answer.create(
  sentence: "O(1)",
  correct: true,
  question_id: heap_runtime_max_q.id
)

heap_runtime_max_a4 = Answer.create(
  sentence: "O(N)",
  correct: false,
  question_id: heap_runtime_max_q.id
)

recursion_base_case_a1 = Answer.create(
  sentence: "The default return value of a switch statement in the recursive function.",
  correct: false,
  question_id: recursion_base_case_q.id
)

recursion_base_case_a2 = Answer.create(
  sentence: "The solution to the smallest input of the function",
  correct: true,
  question_id: recursion_base_case_q.id
)

dns_name_a1 = Answer.create(
  sentence: "Dynamic Network Services",
  correct: false,
  question_id: dns_name_q.id
)

dns_name_a2 = Answer.create(
  sentence: "Domain Name Servers",
  correct: false,
  question_id: dns_name_q.id
)

dns_name_a3 = Answer.create(
  sentence: "Domain Name System",
  correct: true,
  question_id: dns_name_q.id
)

dns_name_a4 = Answer.create(
  sentence: "Domain Name Service",
  correct: false,
  question_id: dns_name_q.id
)

http_case_sensitive_a1 = Answer.create(
  sentence: "True",
  correct: false,
  question_id: http_case_sensitive_q.id
)

http_case_sensitive_a2 = Answer.create(
  sentence: "False",
  correct: true,
  question_id: http_case_sensitive_q.id
)

new_keyword_kind_a1 = Answer.create(
  sentence: "A class function",
  correct: false,
  question_id: new_keyword_kind_q.id
)

new_keyword_kind_a2 = Answer.create(
  sentence: "A constructor function",
  correct: true,
  question_id: new_keyword_kind_q.id
)

new_keyword_kind_a3 = Answer.create(
  sentence: "A factory function",
  correct: false,
  question_id: new_keyword_kind_q.id
)

new_keyword_invoke_a1 = Answer.create(
  sentence: "It invokes the class as a function instead of trying to create a new object.",
  correct: true,
  question_id: new_keyword_invoke_q.id
)

new_keyword_invoke_a2 = Answer.create(
  sentence: "It returns an error.",
  correct: false,
  question_id: new_keyword_invoke_q.id
)

new_keyword_invoke_a3 = Answer.create(
  sentence: "It returns undefined.",
  correct: false,
  question_id: new_keyword_invoke_q.id
)

new_keyword_invoke_a4 = Answer.create(
  sentence: "It returns a new object of the Object prototype class.",
  correct: false,
  question_id: new_keyword_invoke_q.id
)

event_loop_components_a1 = Answer.create(
  sentence: "Action Creator, Dispatcher, Reducer, Store",
  correct: false,
  question_id: event_loop_components_q.id
)

event_loop_components_a2 = Answer.create(
  sentence: "Model, View, Controller",
  correct: false,
  question_id: event_loop_components_q.id
)

event_loop_components_a3 = Answer.create(
  sentence: "Call stack, Event Handlers Queue, Event Loop and JavaScript Web API's.",
  correct: true,
  question_id: event_loop_components_q.id
)

grid_why_a1 = Answer.create(
  sentence: "To make styling webpages easier.",
  correct: false,
  question_id: grid_why_q.id
)

grid_why_a2 = Answer.create(
  sentence: "To float items to a certain part of the page",
  correct: false,
  question_id: grid_why_q.id
)

grid_why_a3 = Answer.create(
  sentence: "To replace flexbox and clearfix",
  correct: false,
  question_id: grid_why_q.id
)

grid_why_a4 = Answer.create(
  sentence: "To allow elements to automatically re-structure based on changing browser sizes",
  correct: true,
  question_id: grid_why_q.id
)

redux_store_methods_a1 = Answer.create(
  sentence: "getState(), dispatch(), subscribe()",
  correct: true,
  question_id: redux_store_methods_q.id
)

redux_store_methods_a2 = Answer.create(
  sentence: "combineReducers(), compose(), Object.assign()",
  correct: false,
  question_id: redux_store_methods_q.id
)

redux_store_methods_a3 = Answer.create(
  sentence: "createStore(), applyMiddleware(), connect()",
  correct: false,
  question_id: redux_store_methods_q.id
)

redux_context_a1 = Answer.create(
  sentence: "By using a thunk middleware with the applyMiddleware function.",
  correct: false,
  question_id: redux_context_q.id
)

redux_context_a2 = Answer.create(
  sentence: "By using a special advanced React feature called 'context'. This is the 'Provider' component.",
  correct: true,
  question_id: redux_context_q.id
)

redux_context_a3 = Answer.create(
  sentence: "It's automatically done when using you defined the store with the createStore function.",
  correct: false,
  question_id: redux_context_q.id
)

redux_context_a4 = Answer.create(
  sentence: "It's not possible with Redux.",
  correct: false,
  question_id: redux_context_q.id
)

heap_why_a1.save!
heap_why_a2.save!
heap_runtime_max_a1.save!
heap_runtime_max_a2.save!
heap_runtime_max_a3.save!
heap_runtime_max_a4.save!
recursion_base_case_a1.save!
recursion_base_case_a2.save!
dns_name_a1.save!
dns_name_a2.save!
dns_name_a3.save!
dns_name_a4.save!
http_case_sensitive_a1.save!
http_case_sensitive_a2.save!
new_keyword_kind_a1.save!
new_keyword_kind_a2.save!
new_keyword_kind_a3.save!
new_keyword_invoke_a1.save!
new_keyword_invoke_a2.save!
new_keyword_invoke_a3.save!
new_keyword_invoke_a4.save!
event_loop_components_a1.save!
event_loop_components_a2.save!
event_loop_components_a3.save!
grid_why_a1.save!
grid_why_a2.save!
grid_why_a3.save!
grid_why_a4.save!
redux_store_methods_a1.save!
redux_store_methods_a2.save!
redux_store_methods_a3.save!
redux_context_a1.save!
redux_context_a2.save!
redux_context_a3.save!
redux_context_a4.save!
