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
