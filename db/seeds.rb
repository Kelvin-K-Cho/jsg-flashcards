# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Topic.destroy_all
Subject.destroy_all

user = User.create(username: "demo", password: "secret")

algorithm = Topic.create(
  title: "Algorithms",
  image_url: "https://s3-us-west-1.amazonaws.com/hallyu-dev/images/jsg/Algorithms.jpg"
)

algorithm.save!

heap = Subject.create(
  title: "Heap",
  notes: "A heap is a data structure that is a complete binary tree and it satisfies the heap property. The heap property (in a max heap) is when the value of parent node is greater than or equal to its children and (in a min heap) the value of the parent is less than or equal to its children. Except the root node, the node at the 'top' of the heap, which has no parents.",
  topic_id: algorithm.id
)

recursion = Subject.create(
  title: "Recursion",
  notes: "The process in which a function calls itself directly or indirectly is called recursion and the corresponding function is called as recursive function.",
  topic_id: algorithm.id
)

worldwideweb = Topic.create(
  title: "World Wide Web",
  image_url: "https://s3-us-west-1.amazonaws.com/hallyu-dev/images/jsg/Web.jpg"
)

worldwideweb.save!


dns = Subject.create(
  title: "DNS",
  notes: "DNS stands for Domain Name Servers or Domain Name System. It acts as the backbone or phonebook of the internet.",
  topic_id: worldwideweb.id
)

http = Subject.create(
  title: "HTTP",
  notes: "HTTP stands for HyperText Transfer Protocol and it's the basis for sending data across the World Wide Web.",
  topic_id: worldwideweb.id
)

javascript = Topic.create(
  title: "JavaScript",
  image_url: "https://s3-us-west-1.amazonaws.com/hallyu-dev/images/jsg/JavaScript.png"
)

javascript.save!

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

miscellaneous = Topic.create(
  title: "Miscellaneous",
  image_url: "https://s3-us-west-1.amazonaws.com/hallyu-dev/images/jsg/MiscBox.png"
)

miscellaneous.save!

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
