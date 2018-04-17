# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Topic.destroy_all

user = User.create(username: "demo", password: "secret")

algo = Topic.create(
  title: "Algorithms",
  image_url: "https://s3-us-west-1.amazonaws.com/hallyu-dev/images/jsg/Algorithms.jpg"
)

algo.save!

heap = Subject.create(
  title: "Heaps",
  notes: "A heap is a data structure that is a complete binary tree and it satisfies the heap property. The heap property (in a max heap) is when the value of parent node is greater than or equal to its children and (in a min heap) the value of the parent is less than or equal to its children. Except the root node, the node at the 'top' of the heap, which has no parents.",
  topic_id: algo.id
)

web = Topic.create(
  title: "World Wide Web",
  image_url: "https://s3-us-west-1.amazonaws.com/hallyu-dev/images/jsg/Web.jpg"
)

web.save!

js = Topic.create(
  title: "JavaScript",
  image_url: "https://s3-us-west-1.amazonaws.com/hallyu-dev/images/jsg/JavaScript.png"
)

js.save!

misc = Topic.create(
  title: "Miscellaneous",
  image_url: "https://s3-us-west-1.amazonaws.com/hallyu-dev/images/jsg/MiscBox.png"
)

misc.save!
