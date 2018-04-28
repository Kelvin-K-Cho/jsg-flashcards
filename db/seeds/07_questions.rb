heap_why_q = Question.create(
  sentence: "What real life problem does implementing a heap solve?",
  topic_id: heap.id
)

heap_runtime_max_q = Question.create(
  sentence: "What is the runtime of finding the max/min of a heap?",
  topic_id: heap.id
)

recursion_base_case_q = Question.create(
  sentence: "What is a base case?",
  topic_id: recursion.id
)

dns_name_q = Question.create(
  sentence: "What is the full form of DNS?",
  topic_id: dns.id
)

http_case_sensitive_q = Question.create(
  sentence: "Are HTTP methods case-sensitive?",
  topic_id: http.id
)

new_keyword_kind_q = Question.create(
  sentence: "What kind of function is 'new'?",
  topic_id: new_keyword.id
)

new_keyword_invoke_q = Question.create(
  sentence: "What happens when you try to create a new object without the new keyword?",
  topic_id: new_keyword.id
)

event_loop_components_q = Question.create(
  sentence: "What are the components that make up the event loop cycle?",
  topic_id: event_loop.id
)

grid_why_q = Question.create(
  sentence: "Why do people use grids to style websites?",
  topic_id: grid.id
)

redux_store_methods_q = Question.create(
  sentence: "What are the different redux store methods?",
  topic_id: redux.id
)

redux_context_q = Question.create(
  sentence: "How can you make the redux store available to all components?",
  topic_id: redux.id
)

heap_why_q.save!
heap_runtime_max_q.save!
recursion_base_case_q.save!
dns_name_q.save!
http_case_sensitive_q.save!
new_keyword_kind_q.save!
new_keyword_invoke_q.save!
event_loop_components_q.save!
grid_why_q.save!
redux_store_methods_q.save!
redux_context_q.save!
