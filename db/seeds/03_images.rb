images = %w(
  https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/Algorithms.jpg
  https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/WorldWideWeb.jpg
  https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/JavaScript.png
  https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/Miscellaneous.png
  https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/basic_graph.png
  https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/directed_graph.png
  https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/weighted_graph.png
  https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/connected_graph.png
  https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/complete_graph.png
  https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/cyclic_graph.png
  https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/acyclic_graph.png
  https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/REST.jpeg
  https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/prototype.jpg
  https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/prototype_chain.jpg
  https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/maxheap.png
  https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/heapsort.gif
  https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/HTML5.png
  https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/media_query.png
  https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/adjacency_matrix.png
)

images.each do |image|
  Image.create(
    url: image
  )
end
