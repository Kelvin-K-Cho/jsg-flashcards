images = %w(https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/Algorithms.jpg
  https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/WorldWideWeb.jpg
  https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/JavaScript.png
  https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/Miscellaneous.png
  https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/maxheap.png
  https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/heapsort.gif
)

images.each do |image|
  Image.create(
    url: image
  )
end
