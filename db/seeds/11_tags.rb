Tag.create(
  topic_id: Topic.where(title: "Graph").pluck(:id).first,
  image_id: Image.where(url: "https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/basic_graph.png").pluck(:id).first
)

Tag.create(
  topic_id: Topic.where(title: "Graph").pluck(:id).first,
  image_id: Image.where(url: "https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/directed_graph.png").pluck(:id).first
)

Tag.create(
  topic_id: Topic.where(title: "Graph").pluck(:id).first,
  image_id: Image.where(url: "https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/weighted_graph.png").pluck(:id).first
)

Tag.create(
  topic_id: Topic.where(title: "Graph").pluck(:id).first,
  image_id: Image.where(url: "https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/connected_graph.png").pluck(:id).first
)

Tag.create(
  topic_id: Topic.where(title: "Graph").pluck(:id).first,
  image_id: Image.where(url: "https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/complete_graph.png").pluck(:id).first
)

Tag.create(
  topic_id: Topic.where(title: "Graph").pluck(:id).first,
  image_id: Image.where(url: "https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/cyclic_graph.png").pluck(:id).first
)

Tag.create(
  topic_id: Topic.where(title: "Graph").pluck(:id).first,
  image_id: Image.where(url: "https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/acyclic_graph.png").pluck(:id).first
)

Tag.create(
  topic_id: Topic.where(title: "REST").pluck(:id).first,
  image_id: Image.where(url: "https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/REST.jpeg").pluck(:id).first
)

Tag.create(
  topic_id: Topic.where(title: "prototype").pluck(:id).first,
  image_id: Image.where(url: "https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/prototype.jpg").pluck(:id).first
)

Tag.create(
  topic_id: Topic.where(title: "prototype").pluck(:id).first,
  image_id: Image.where(url: "https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/prototype_chain.jpg").pluck(:id).first
)

Tag.create(
  topic_id: Topic.where(title: "Heap").pluck(:id).first,
  image_id: Image.where(url: "https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/maxheap.png").pluck(:id).first
)

Tag.create(
  topic_id: Topic.where(title: "Heap").pluck(:id).first,
  image_id: Image.where(url: "https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/heapsort.gif").pluck(:id).first
)
