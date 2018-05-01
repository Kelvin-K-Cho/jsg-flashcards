algorithms_id = Subject.where(title: "Algorithms").pluck(:id).first
world_wide_web_id = Subject.where(title: "World Wide Web").pluck(:id).first
javascript_id = Subject.where(title: "JavaScript").pluck(:id).first
miscellaneous_id = Subject.where(title: "Miscellaneous").pluck(:id).first

#============#
# Algorithms #
#============#

Topic.create(
  title: "Graph",
  notes: "A graph is a non-linear abstract data type that is made up of several nodes linked by several connectors.  The nodes are called 'vertices' and connectors are called 'edges'.  Any two nodes that directly connected to each other are said to be adjacent.  Graphs are used to model social networks such as LinkedIn or Facebook.",
  subject_id: algorithms_id
)

Topic.create(
  title: "Adjacency Matrix",
  notes: "An adjacency matrix is a matrix representaion of a graph where each coordinate designates whether there is an edge between two vertices.
•  Pros: Representation is easy to implement and follow.  Removal of an edge takes O(1) time.
•  Cons: The entire adjacency matrix consumes O(V^2) space where V denotes the number of vertices.
      Adding a vertix takes O(V^2) time.
  ",
  subject_id: algorithms_id
)

Topic.create(
  title: "Adjacency List",
  notes: "An adjacency list is another approach to modeling a graph and all its edges.  In this case, a linked list is used where each vertix points to the next.  Weights can be stored in this representation.
•  Pros: Space Complexity on average is O(|V| + |E|).  Worst case scenario consumes an O(V^2) space.  Adding a new vertix takes O(1) time.
•  Cons: Searching an adjacency list takes O(V) time.
  ",
  subject_id: algorithms_id
)

Topic.create(
  title: "Breadth First Search",
  notes: "Breadth First Search is a search through a graph/tree where all the children of the current node are viewed, before moving on.  Implementation of a BFS requries the use of a Queue.  The difference between traversing a graph versus a tree is a graph does not visit a visited node twice.",
  subject_id: algorithms_id
)

Topic.create(
  title: "Depth First Search",
  notes: "Depth First Search is a search through a graph/tree where the first child of each node is searched until no more children can be found.  Once a childless node has been reached, the DFS goes back up one parent and checks the next child until no children are found again.  The cycle repeats until the entire tree/graph is traversed.  Implementation of a DFS requires recursion.  The difference between traversing a graph versus a tree is a graph does not visit a visited node twice."
)

Topic.create(
  title: "Heap",
  notes: "A heap is a data structure that is a complete binary tree and it satisfies the heap property. The heap property (in a max heap) is when the value of parent node is greater than or equal to its children and (in a min heap) the value of the parent is less than or equal to its children. Except the root node, the node at the 'top' of the heap, which has no parents.",
  subject_id: algorithms_id
)

Topic.create(
  title: "Recursion",
  notes: "The process in which a function calls itself directly or indirectly is called recursion and the corresponding function is called as recursive function.",
  subject_id: algorithms_id
)

#================#
# World Wide Web #
#================#

Topic.create(
  title: "REST",
  notes: "REST stands for Representational State Transfer.  It's a set of design principles used to make network communications scalable for the World Wide Web.  It can be applied to other kinds of networks such as embedded systems.

  ",
  subject_id: world_wide_web_id
)

Topic.create(
  title: "DNS",
  notes: "DNS stands for Domain Name Servers or Domain Name System. It acts as the backbone or phonebook of the internet.",
  subject_id: world_wide_web_id
)

Topic.create(
  title: "HTTP",
  notes: "HTTP stands for HyperText Transfer Protocol and it's the basis for sending data across the World Wide Web.",
  subject_id: world_wide_web_id
)

#============#
# JavaScript #
#============#

Topic.create(
  title: "new",
  notes: "The 'new' keyword is a constructor function that creates a new object from a class.",
  subject_id: javascript_id
)

Topic.create(
  title: "event loop",
  notes: "The event loop is the process in charge of resolving the event handlers queue. It checks whether the call stack is empty. If it's empty, it then proceeds to resolve the event handlers queue one function at a time.",
  subject_id: javascript_id
)

#===============#
# Miscellaneous #
#===============#

Topic.create(
  title: "grid",
  notes: "Grid is a display property that allows you turn a container into a 2 dimensional layout separated by rows and columns. Very useful for scaling websites to be mobile.",
  subject_id: miscellaneous_id
)

Topic.create(
  title: "Redux",
  notes: "Redux is a library that allows React application to have state. This state is represent as a giant javascript object (single immutable state tree)",
  subject_id: miscellaneous_id
)
