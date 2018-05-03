Label.create(
  subject_id: Subject.where(title: "Algorithms").pluck(:id).first,
  image_id: Image.where(url: "https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/Algorithms.jpg").pluck(:id).first
)

Label.create(
  subject_id: Subject.where(title: "World Wide Web").pluck(:id).first,
  image_id: Image.where(url: "https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/WorldWideWeb.jpg").pluck(:id).first
)

Label.create(
  subject_id: Subject.where(title: "JavaScript").pluck(:id).first,
  image_id: Image.where(url: "https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/JavaScript.png").pluck(:id).first
)

Label.create(
  subject_id: Subject.where(title: "Miscellaneous").pluck(:id).first,
  image_id: Image.where(url: "https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/Miscellaneous.png").pluck(:id).first
)
