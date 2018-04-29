Tag.create(
  topic_id: Topic.where(title: "Heap").pluck(:id).first,
  image_id: Image.where(url: "https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/maxheap.png").pluck(:id).first
)

Tag.create(
  topic_id: Topic.where(title: "Heap").pluck(:id).first,
  image_id: Image.where(url: "https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/heapsort.gif").pluck(:id).first
)
