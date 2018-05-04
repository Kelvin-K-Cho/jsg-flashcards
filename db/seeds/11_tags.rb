Tag.create(
  topic_id: Topic.where(title: "Graph").pluck(:id).first,
  image_id: Image.where(url: "https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/graph.png").pluck(:id).first
)

Tag.create(
  topic_id: Topic.where(title: "REST").pluck(:id).first,
  image_id: Image.where(url: "https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/REST.jpeg").pluck(:id).first
)

Tag.create(
  topic_id: Topic.where(title: "Heap").pluck(:id).first,
  image_id: Image.where(url: "https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/maxheap.png").pluck(:id).first
)

Tag.create(
  topic_id: Topic.where(title: "Heap").pluck(:id).first,
  image_id: Image.where(url: "https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/heapsort.gif").pluck(:id).first
)
