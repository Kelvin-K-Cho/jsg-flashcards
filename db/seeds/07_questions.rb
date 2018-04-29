heap_id = Topic.where(title: "Heap").pluck(:id).first
recursion_id = Topic.where(title: "Recursion").pluck(:id).first
dns_id = Topic.where(title: "DNS").pluck(:id).first
http_id = Topic.where(title: "HTTP").pluck(:id).first
new_id = Topic.where(title: "new").pluck(:id).first
event_loop_id = Topic.where(title: "event loop").pluck(:id).first
grid_id = Topic.where(title: "grid").pluck(:id).first
redux_id = Topic.where(title: "Redux").pluck(:id).first

Question.create(
  sentence: "What real life problem does implementing a heap solve?",
  topic_id: heap_id
)

Question.create(
  sentence: "What is the runtime of finding the max/min of a heap?",
  topic_id: heap_id
)

Question.create(
  sentence: "What is a base case?",
  topic_id: recursion_id
)

Question.create(
  sentence: "What is the full form of DNS?",
  topic_id: dns_id
)

Question.create(
  sentence: "Are HTTP methods case-sensitive?",
  topic_id: http_id
)

Question.create(
  sentence: "What kind of function is 'new'?",
  topic_id: new_id
)

Question.create(
  sentence: "What happens when you try to create a new object without the new keyword?",
  topic_id: new_id
)

Question.create(
  sentence: "What are the components that make up the event loop cycle?",
  topic_id: event_loop_id
)

Question.create(
  sentence: "Why do people use grids to style websites?",
  topic_id: grid_id
)

Question.create(
  sentence: "What are the different redux store methods?",
  topic_id: redux_id
)

Question.create(
  sentence: "How can you make the redux store available to all components?",
  topic_id: redux_id
)
