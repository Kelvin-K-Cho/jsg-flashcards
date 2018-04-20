# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#=========
# Deletes
#=========

User.destroy_all
Topic.destroy_all
Subject.destroy_all
Question.destroy_all
Answer.destroy_all

#===========
# Demo User
#===========

user = User.create(username: "demo", password: "secret")

#========
# Topics
#========

algorithms = Topic.create(
  title: "Algorithms",
  image_url: "https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/Algorithms.jpg"
)

world_wide_web = Topic.create(
  title: "World Wide Web",
  image_url: "https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/WorldWideWeb.jpg"
)

javascript = Topic.create(
  title: "JavaScript",
  image_url: "https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/JavaScript.png"
)


miscellaneous = Topic.create(
  title: "Miscellaneous",
  image_url: "https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/Miscellaneous.png"
)

algorithms.save!
world_wide_web.save!
javascript.save!
miscellaneous.save!

#==========
# Subjects
#==========

#------------
# Algorithms
#------------

heap = Subject.create(
  title: "Heap",
  notes: "A heap is a data structure that is a complete binary tree and it satisfies the heap property. The heap property (in a max heap) is when the value of parent node is greater than or equal to its children and (in a min heap) the value of the parent is less than or equal to its children. Except the root node, the node at the 'top' of the heap, which has no parents.",
  image_url: "https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/heapsort.gif",
  topic_id: algorithms.id
)

recursion = Subject.create(
  title: "Recursion",
  notes: "The process in which a function calls itself directly or indirectly is called recursion and the corresponding function is called as recursive function.",
  topic_id: algorithms.id
)

heap.save!
recursion.save!

#----------------
# World Wide Web
#----------------

dns = Subject.create(
  title: "DNS",
  notes: "DNS stands for Domain Name Servers or Domain Name System. It acts as the backbone or phonebook of the internet.",
  topic_id: world_wide_web.id
)

http = Subject.create(
  title: "HTTP",
  notes: "HTTP stands for HyperText Transfer Protocol and it's the basis for sending data across the World Wide Web.",
  topic_id: world_wide_web.id
)

dns.save!
http.save!

#------------
# JavaScript
#------------

new_keyword = Subject.create(
  title: "new",
  notes: "The 'new' keyword is a constructor function that creates a new object from a class.",
  topic_id: javascript.id
)

event_loop = Subject.create(
  title: "event loop",
  notes: "The event loop is the process in charge of resolving the event handlers queue. It checks whether the call stack is empty. If it's empty, it then proceeds to resolve the event handlers queue one function at a time.",
  topic_id: javascript.id
)

new_keyword.save!
event_loop.save!

#---------------
# Miscellaneous
#---------------

grid = Subject.create(
  title: "grid",
  notes: "Grid is a display property that allows you turn a container into a 2 dimensional layout separated by rows and columns. Very useful for scaling websites to be mobile.",
  topic_id: miscellaneous.id
)

redux = Subject.create(
  title: "Redux",
  notes: "Redux is a library that allows React application to have state. This state is represent as a giant javascript object (single immutable state tree)",
  topic_id: miscellaneous.id
)

grid.save!
redux.save!

#===========
# Questions
#===========

heap_why_q = Question.create(
  sentence: "What real life problem does implementing a heap solve?",
  subject_id: heap.id
)

heap_runtime_max_q = Question.create(
  sentence: "What is the runtime of finding the max/min of a heap?",
  subject_id: heap.id
)

recursion_base_case_q = Question.create(
  sentence: "What is a base case?",
  subject_id: recursion.id
)

dns_name_q = Question.create(
  sentence: "What is the full form of DNS?",
  subject_id: dns.id
)

http_case_sensitive_q = Question.create(
  sentence: "Are HTTP methods case-sensitive?",
  subject_id: http.id
)

new_keyword_kind_q = Question.create(
  sentence: "What kind of function is 'new'?",
  subject_id: new_keyword.id
)

new_keyword_invoke_q = Question.create(
  sentence: "What happens when you try to create a new object without the new keyword?",
  subject_id: new_keyword.id
)

event_loop_components_q = Question.create(
  sentence: "What are the components that make up the event loop cycle?",
  subject_id: event_loop.id
)

grid_why_q = Question.create(
  sentence: "Why do people use grids to style websites?",
  subject_id: grid.id
)

redux_store_methods_q = Question.create(
  sentence: "What are the different redux store methods?",
  subject_id: redux.id
)

redux_context_q = Question.create(
  sentence: "How can you make the redux store available to all components?",
  subject_id: redux.id
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

#=========
# Answers
#=========

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
