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
Subject.destroy_all
Topic.destroy_all
Question.destroy_all
Answer.destroy_all
Week.destroy_all
Day.destroy_all
Daily.destroy_all
Image.destroy_all
Label.destroy_all
Tag.destroy_all

#===========
# Demo User
#===========

user = User.create(username: "demo", password: "secret")

user.save!

#========
# Subjects
#========

algorithms = Subject.create(
  title: "Algorithms"
)

world_wide_web = Subject.create(
  title: "World Wide Web"
)

javascript = Subject.create(
  title: "JavaScript"
)

miscellaneous = Subject.create(
  title: "Miscellaneous"
)

algorithms.save!
world_wide_web.save!
javascript.save!
miscellaneous.save!

#==========
# Topics
#==========

#------------
# Algorithms
#------------

heap = Topic.create(
  title: "Heap",
  notes: "A heap is a data structure that is a complete binary tree and it satisfies the heap property. The heap property (in a max heap) is when the value of parent node is greater than or equal to its children and (in a min heap) the value of the parent is less than or equal to its children. Except the root node, the node at the 'top' of the heap, which has no parents.",
  subject_id: algorithms.id
)

recursion = Topic.create(
  title: "Recursion",
  notes: "The process in which a function calls itself directly or indirectly is called recursion and the corresponding function is called as recursive function.",
  subject_id: algorithms.id
)

heap.save!
recursion.save!

#----------------
# World Wide Web
#----------------

dns = Topic.create(
  title: "DNS",
  notes: "DNS stands for Domain Name Servers or Domain Name System. It acts as the backbone or phonebook of the internet.",
  subject_id: world_wide_web.id
)

http = Topic.create(
  title: "HTTP",
  notes: "HTTP stands for HyperText Transfer Protocol and it's the basis for sending data across the World Wide Web.",
  subject_id: world_wide_web.id
)

dns.save!
http.save!

#------------
# JavaScript
#------------

new_keyword = Topic.create(
  title: "new",
  notes: "The 'new' keyword is a constructor function that creates a new object from a class.",
  subject_id: javascript.id
)

event_loop = Topic.create(
  title: "event loop",
  notes: "The event loop is the process in charge of resolving the event handlers queue. It checks whether the call stack is empty. If it's empty, it then proceeds to resolve the event handlers queue one function at a time.",
  subject_id: javascript.id
)

new_keyword.save!
event_loop.save!

#---------------
# Miscellaneous
#---------------

grid = Topic.create(
  title: "grid",
  notes: "Grid is a display property that allows you turn a container into a 2 dimensional layout separated by rows and columns. Very useful for scaling websites to be mobile.",
  subject_id: miscellaneous.id
)

redux = Topic.create(
  title: "Redux",
  notes: "Redux is a library that allows React application to have state. This state is represent as a giant javascript object (single immutable state tree)",
  subject_id: miscellaneous.id
)

grid.save!
redux.save!

#========
# Images
#========

algorithms_image1 = Image.create(
  url: "https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/Algorithms.jpg"
)

world_wide_web_image1 = Image.create(
  url: "https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/WorldWideWeb.jpg"
)

javascript_image1 = Image.create(
  url: "https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/JavaScript.png"
)

miscellaneous_image1 = Image.create(
  url: "https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/Miscellaneous.png"
)

heap_image1 = Image.create(
  url: "https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/maxheap.png"
)

heap_image2 = Image.create(
  url: "https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/heapsort.gif"
)

algorithms_image1.save!
world_wide_web_image1.save!
javascript_image1.save!
miscellaneous_image1.save!
heap_image1.save!
heap_image2.save!

#========
# Labels
#========

algorithms_label1 = Label.create(
  subject_id: algorithms.id,
  image_id: algorithms_image1.id
)

world_wide_web_label1 = Label.create(
  subject_id: world_wide_web.id,
  image_id: world_wide_web_image1.id
)

javascript_label1 = Label.create(
  subject_id: javascript.id,
  image_id: javascript_image1.id
)

miscellaneous_label1 = Label.create(
  subject_id: miscellaneous.id,
  image_id: miscellaneous_image1.id
)

algorithms_label1.save!
world_wide_web_label1.save!
javascript_label1.save!
miscellaneous_label1.save!

#======
# Tags
#======

heap_tag1 = Tag.create(
  topic_id: heap.id,
  image_id: heap_image1.id
)

heap_tag2 = Tag.create(
  topic_id: heap.id,
  image_id: heap_image2.id
)

heap_tag1.save!
heap_tag2.save!

#===========
# Questions
#===========

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

#=======
# Weeks
#=======

week_one = Week.create(
  title: "Week 1"
)

week_two = Week.create(
  title: "Week 2"
)

week_three = Week.create(
  title: "Week 3"
)

week_four = Week.create(
  title: "Week 4"
)

week_five = Week.create(
  title: "Week 5"
)

week_six = Week.create(
  title: "Week 6"
)

week_seven = Week.create(
  title: "Week 7"
)

week_eight = Week.create(
  title: "Week 8"
)

week_one.save!
week_two.save!
week_three.save!
week_four.save!
week_five.save!
week_six.save!
week_seven.save!
week_eight.save!

#======
# Days
#======

day_one = Day.create(
  title: "Day 1",
  week_id: week_one.id
)

day_two = Day.create(
  title: "Day 2",
  week_id: week_one.id
)

day_three = Day.create(
  title: "Day 3",
  week_id: week_one.id
)

day_four = Day.create(
  title: "Day 4",
  week_id: week_one.id
)

day_five = Day.create(
  title: "Day 5",
  week_id: week_one.id
)

day_six_and_seven = Day.create(
  title: "Day 6-7",
  week_id: week_one.id
)

day_eight = Day.create(
  title: "Day 1",
  week_id: week_two.id
)

day_nine = Day.create(
  title: "Day 2",
  week_id: week_two.id
)

day_ten = Day.create(
  title: "Day 3",
  week_id: week_two.id
)

day_eleven = Day.create(
  title: "Day 4",
  week_id: week_two.id
)

day_twelve = Day.create(
  title: "Day 5",
  week_id: week_two.id
)

day_thirteen_and_fourteen = Day.create(
  title: "Day 6-7",
  week_id: week_two.id
)

day_fifteen = Day.create(
  title: "Day 1",
  week_id: week_three.id
)

day_sixteen = Day.create(
  title: "Day 2",
  week_id: week_three.id
)

day_seventeen = Day.create(
  title: "Day 3",
  week_id: week_three.id
)

day_eighteen = Day.create(
  title: "Day 4",
  week_id: week_three.id
)

day_nineteen = Day.create(
  title: "Day 5",
  week_id: week_three.id
)

day_twenty_and_twenty_one = Day.create(
  title: "Day 6-7",
  week_id: week_three.id
)

day_twenty_two = Day.create(
  title: "Day 1",
  week_id: week_four.id
)

day_twenty_three = Day.create(
  title: "Day 2",
  week_id: week_four.id
)

day_twenty_four = Day.create(
  title: "Day 3",
  week_id: week_four.id
)

day_twenty_five = Day.create(
  title: "Day 4",
  week_id: week_four.id
)

day_twenty_six = Day.create(
  title: "Day 5",
  week_id: week_four.id
)

day_twenty_seven_and_twenty_eight = Day.create(
  title: "Day 6-7",
  week_id: week_four.id
)

day_twenty_nine = Day.create(
  title: "Day 1",
  week_id: week_five.id
)

day_thirty = Day.create(
  title: "Day 2",
  week_id: week_five.id
)

day_thirty_one = Day.create(
  title: "Day 3",
  week_id: week_five.id
)

day_thirty_two = Day.create(
  title: "Day 4",
  week_id: week_five.id
)

day_thirty_three = Day.create(
  title: "Day 5",
  week_id: week_five.id
)

day_thirty_four_and_thirty_five = Day.create(
  title: "Day 6-7",
  week_id: week_five.id
)

day_thirty_six = Day.create(
  title: "Day 1",
  week_id: week_six.id
)

day_thirty_seven = Day.create(
  title: "Day 2",
  week_id: week_six.id
)

day_thirty_eight = Day.create(
  title: "Day 3",
  week_id: week_six.id
)

day_thirty_nine = Day.create(
  title: "Day 4",
  week_id: week_six.id
)

day_fourty = Day.create(
  title: "Day 5",
  week_id: week_six.id
)

day_fourty_one_and_fourty_two = Day.create(
  title: "Day 6-7",
  week_id: week_six.id
)

day_fourty_three = Day.create(
  title: "Day 1",
  week_id: week_seven.id
)

day_fourty_four = Day.create(
  title: "Day 2",
  week_id: week_seven.id
)

day_fourty_five = Day.create(
  title: "Day 3",
  week_id: week_seven.id
)

day_fourty_six = Day.create(
  title: "Day 4",
  week_id: week_seven.id
)

day_fourty_seven = Day.create(
  title: "Day 5",
  week_id: week_seven.id
)

day_fourty_eight_and_fourty_nine = Day.create(
  title: "Day 6-7",
  week_id: week_seven.id
)

day_fifty = Day.create(
  title: "Day 1",
  week_id: week_eight.id
)

day_fifty_one = Day.create(
  title: "Day 2",
  week_id: week_eight.id
)

day_fifty_two = Day.create(
  title: "Day 3",
  week_id: week_eight.id
)

day_fifty_three = Day.create(
  title: "Day 4",
  week_id: week_eight.id
)

day_fifty_four = Day.create(
  title: "Day 5",
  week_id: week_eight.id
)

day_fifty_five_and_fifty_six = Day.create(
  title: "Day 6-7",
  week_id: week_eight.id
)

day_one.save!
day_two.save!
day_three.save!
day_four.save!
day_five.save!
day_six_and_seven.save!
day_eight.save!
day_nine.save!
day_ten.save!
day_eleven.save!
day_twelve.save!
day_thirteen_and_fourteen.save!
day_fifteen.save!
day_sixteen.save!
day_seventeen.save!
day_eighteen.save!
day_nineteen.save!
day_twenty_and_twenty_one.save!
day_twenty_two.save!
day_twenty_three.save!
day_twenty_four.save!
day_twenty_five.save!
day_twenty_six.save!
day_twenty_seven_and_twenty_eight.save!
day_twenty_nine.save!
day_thirty.save!
day_thirty_one.save!
day_thirty_two.save!
day_thirty_three.save!
day_thirty_four_and_thirty_five.save!
day_thirty_six.save!
day_thirty_seven.save!
day_thirty_eight.save!
day_thirty_nine.save!
day_fourty.save!
day_fourty_one_and_fourty_two.save!
day_fourty_three.save!
day_fourty_four.save!
day_fourty_five.save!
day_fourty_six.save!
day_fourty_seven.save!
day_fourty_eight_and_fourty_nine.save!
day_fifty.save!
day_fifty_one.save!
day_fifty_two.save!
day_fifty_three.save!
day_fifty_four.save!
day_fifty_five_and_fifty_six.save!
