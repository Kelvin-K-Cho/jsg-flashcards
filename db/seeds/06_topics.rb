algorithms_id = Subject.where(title: "Algorithms").pluck(:id).first
world_wide_web_id = Subject.where(title: "World Wide Web").pluck(:id).first
javascript_id = Subject.where(title: "JavaScript").pluck(:id).first
miscellaneous_id = Subject.where(title: "Miscellaneous").pluck(:id).first

#============#
# Algorithms #
#============#

Topic.create(
  title: "Tree",
  notes: "A tree is a data structure composed of parent and child nodes. Each node contains a value and a list of references to its child nodes. Trees are particularly useful for storing sorted data that needs to be retrieved quickly, or for representing hierarchical data.

When do you use a tree in interviews?
  •  You have data that is sorted in some way, and you want to do a lot of searches on it.
  •  You need to manage objects that are clustered or grouped by some attribute. File systems are a common hierarchy in which the nodes are either files or directories.
  •  You are trying to implement a search strategy such as backtracking.",

  subject_id: algorithms_id
)

Topic.create(
  title: "Graph",
  notes: "![basic_graph](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/basic_graph.png)
*A graph is a non-linear data structure that is made up of several nodes linked by several connectors.  The nodes are called 'vertices' and connectors are called 'edges'.  Any two nodes that directly connected to each other are said to be adjacent.  Nodes are used to represent objects and the edges represent some kind of relationship between them.*

Graphs are used to model relationships across data such as:
  •  Computer networks.
  •  Transportation.
  •  Compilers.
  •  Scheduling tasks.
  •  Matching problems.
  •  Website links.
  •  3D graphics.
  •  Relationships between information.

# Directed Graph
![directed_graph](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/directed_graph.png)
*A graph where the edges have a specific direction.*


# Weighted Graph
![weighted_graph](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/weighted_graph.png)
*A graph where the edges have some number, called a weight, associated with them. One example where weighted graphs are used is to represent paths between different locations, where the distances between are given as weights.*

# Connected Graph
![connected_graph](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/connected_graph.png)
*A graph where there is a path given any node to another.*

# Complete Graph
![complete_graph](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/complete_graph.png)
*A graph where there is an edge between every node.*

# Cyclic Graph
![cyclic_graph](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/cyclic_graph.png)
*A graph where there is a complete cycle.*

# Acyclic Graph
![acyclic_graph](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/acyclic_graph.png)
*A graph where there are no complete cycles.*",
  subject_id: algorithms_id
)

Topic.create(
  title: "Adjacency Matrix",
  notes: "![adjacency_matrix &lt;&gt;](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/adjacency_matrix.png)

*An adjacency matrix is a 2D array representation of a graph where each coordinate designates whether there is an edge between two vertices.  At each location in the matrix is stored the weight of the edge that connects those two nodes if there is one.  For the locations in the adjacency matrix where there is no edge, we can store a sentinel value such as 0 or -1. In most applications weights that are zero or less would not be used (such as for distances).  For unweighted graphs, the values stored in the matrix can just be true or false.*

Big O Notation: where 'v' denotes vertices and 'e' denotes edges.
  •  Storage: O(v²), a 2d matrix is made up of v arrays each of size v.
  •  Add Vertix: O(v²), in order to add a new vertix to the matrix, the whole matrix has to be rebuilt.
  •  Add Edge: O(1), given we know the two vertices we're trying to connect, we can easily key into the matrix to add edge.
  •  Remove Vertix: O(v²), when we remove a vertix from the matrix, the whole matrix has to be rebuilt.
  •  Remove Edge: O(1), given we know the two vertices we're trying to connect, we can easily key into the matrix to remove edge.
  •  Query: O(1), we can key into the matrix to look up the relationship between any two vertices.

Pros: Representation is easy to implement and follow.  Removal of an edge takes O(1) time.
Cons: The entire adjacency matrix consumes O(v²) space where v denotes the number of vertices.  Adding a vertix takes O(v²) time.",
  subject_id: algorithms_id
)

Topic.create(
  title: "Adjacency List",
  notes: "![adjacency_list &lt;&gt;](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/adjacency_list.png)

*An adjacency list is another approach to modeling a graph and all its edges.  In this case, a linked list is used where each vertix points to all its connections.  Each element in the linked list represents one edge in the graph, and stores the target node and the weight (if any).  To add an edge to the graph, we would go to the linked list associated with the node the edge is coming from, and insert a new edge in that list. To find whether or not an edge connects two nodes, and what the weight is, we have to search the list of edges.*

Big O Notation: where 'v' denotes vertices and 'e' denotes edges.
  •  Storage: O(|v|+|e|), each vertix and edge are stored only once.
  •  Add Vertix: O(1), in order to add a new vertix, we just build a new entry.
  •  Add Edge: O(1), given we know the vertix we're trying to connect, we can easily add an edge to the end of that linked list.
  •  Remove Vertix: O(|v|+|e|), when we remove a vertix from the linked list, we need to go through each entry to ensure not only the vertix is removed, but all its edges are as well.
  •  Remove Edge: O(|e|), given we know the edge we're trying to remove, we must traverse all the edges in a vertix in the worst case.
  •  Query: O(|v|), we can find the information we're looking for quickly, but we must go through every vertix.

Pros: Space Complexity on average is O(|v| + |e|).  Worst case scenario consumes an O(v²) space.  Adding a new vertix takes O(1) time.
Cons: Searching an adjacency list takes O(v) time.",
  subject_id: algorithms_id
)

Topic.create(
  title: "BFS",
  notes: "![bfs &lt;&gt;](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/bfs.gif)
![bfs_code &gt;](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/bfs_code.png)
*Breadth First Search (BFS) is a search through a graph/tree where all the children of the current node are viewed, before moving on.  Implementation of a BFS requries the use of a Queue.  The difference between traversing a graph versus a tree is a graph does not visit a visited node twice.*

What are the steps of a BFS on a graph?
  • Initialize a queue
  • Initialize a 'visited' array
  • Look at first node; mark as visited
      - Enqueue all adjecent nodes; mark as visited
      - (Remove first node from 'result'?)
  • Move to node at head of the queue
      - Dequeue node at head
      -  Repeat...(visit and mark all adjecent neighbors)
  • If all neighbors visited, go to head of queue",
  subject_id: algorithms_id
)

Topic.create(
  title: "DFS",
  notes: "![dfs &lt;&gt;](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/dfs.gif)
![dfs_code &gt;](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/dfs_code.png)
*Depth First Search (DFS) is a search through a graph/tree where the first child of each node is searched until no more children can be found.  Once a childless node has been reached, the DFS goes back up one parent and checks the next child until no children are found again.  The cycle repeats until the entire tree/graph is traversed.  Implementation of a DFS requires recursion.  The difference between traversing a graph versus a tree is a graph does not visit a visited node twice.*

What are the steps of a DFS on a graph?
  • Initialize a stack
  • Initialize a 'visited' array
  • push first node onto stack; mark as visited
  • Loop:
      - push 'next' (pick one) adjacent + unvisited node onto stack; mark as visited
      - etc...
      - if all of a node's neighbors are visited:
          * pop off stack until a node in the stach has unvisited neighbors
  • Return node if search successful or -1 if stack.length === 0",
  subject_id: algorithms_id
)

Topic.create(
  title: "Topological Sort",
  notes: "The ordering of a directed graph in such a way that every edge (uv) is traversed where vertix u always comes before vertix v (u &rarr; v).  Topological sort can only be done in a directed acyclic graph (DAG) where there is a start and an end.

![topological_sort &gt;](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/topological_sort.png)

What are the steps of a Topological Sort (DFS) on a graph?
  1. Initialize an empty stack. Keep track of visited and unvisited nodes
  2. For a given node, visit its neighbors 'in order' until a node is found with no unvisited neghbors. Push it into the stack.
  3. Move backwards from the pushed node:
      * If all its neighbors are visited, push it onto the stack
      * If it has unvisited neighbors, visit them
  4. Start with another unvisited node and repeat until all nodes are visited
  5. Output stack

Time Complexity O( v + e )

Use Cases:
  • Build Systems
  • Advanced Packaging Tool (npm, apt-get)
  • Task Scheduling
  • Pre-requisite problems",
  subject_id: algorithms_id
)

Topic.create(
  title: "Heap",
  notes: "A heap is a data structure that is a complete binary tree and it satisfies the heap property. The heap property (in a max heap) is when the value of parent node is greater than or equal to its children and (in a min heap) the value of the parent is less than or equal to its children. Except the root node, the node at the 'top' of the heap, which has no parents.",
  subject_id: algorithms_id
)

Topic.create(
  title: "Dijkastra's algorithm",
  notes: "![dijsktra_algorithm &lt;&gt;](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/dijkstra_algorithm.gif)
Dijkstra's algorithm, conceived by Dutch computer scientist Edsger Dijkstra in 1956 and published in 1959, is a graph search algorithm that solves the single-source shortest path problem for a graph with nonnegative edge path costs, producing a shortest path tree.   This algorithm is often used in routing and as a subroutine in other graph algorithms.

For a given source vertex (node) in the graph, the algorithm finds the path with lowest cost (i.e. the shortest path) between that vertex and every other vertex.   It can also be used for finding costs of shortest paths from a single vertex to a single destination vertex by stopping the algorithm once the shortest path to the destination vertex has been determined.

1. Initialize a set to track a shortest path tree set
2. Assign distance given node as 0, to all other nodes as MAX_INT at first
3. Until the set contains all vertices...
    * Visit the next nearest (shortest distance) vertex, u
    * Push u into the set
    * Update the distance value of all adjecent vertices to u
        * iterate through adj vertices
        * if (distance from u + edge_u-v.weight) &lt; distance v, then update distance of v
4. Return the set when it contains all the vertices.",
  subject_id: algorithms_id
)

Topic.create(
  title: "Recursion",
  notes: "This is the process in which a function calls itself directly or indirectly. The corresponding function is called a recursive function.  Recursion allows us to make solving some propblems easier.

Consider the following:
![factorial_iterative](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/factorial_iterative.png)

We can solve the above function using an iterative approach.  However, any algorithm that can be solved iteratively can also be solved recursively.

![factorial_recursive](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/factorial_recursive.png)

In recursion, we solve problems by first defining a base case.  A base case is the actual solution hardcoded to the smallest/simpliest input.  Once that's defined, we compose an algorithm that reduces the input and call the function again with the smaller input until we get to the base case.  Once the base case is reached, we take that answer and push it back up the previous functions to get the answer we want.

Each subsequent function call is added to the call stack of the programming language.  If the input is too large or the base case is not properly defined, the engine will intentionally stop the program because it ran out of memory to hold all the functions.  This is known as *stack overflow*.

What is the difference between direct and indirect recursion?
  •  Direct recursion involves calling the same function over and over again.  Indirect recursion involves calling another function and having that function call the original function in some way.

What is the difference between tailed and non-tailed recursion?
  •  A recursive function is tail recursive when the recursive call is the last line executed by a function.

What are the disadvantages of recursive programming over iterative programming?
  •  Recursive programming often takes more space and time and can break a program due to stack overflow.

What are the advantages of recursive programming over iterative programming?
  •  Recursion allows us to easily solve problems such as Depth-First Search in a clean way.",
  subject_id: algorithms_id
)

Topic.create(
  title: "Dynamic Programming",
  notes: "A mathematical optimization approach to solving a complex problem by breaking it into smaller and simplier sub-problems",
  subject_id: algorithms_id
)

#================#
# World Wide Web #
#================#

Topic.create(
  title: "REST",
  notes: "![REST &lt;&gt;](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/REST.jpeg)

*REST stands for Representational State Transfer.  It's a set of design principles used to make network communications scalable for the World Wide Web.  It can be applied to other kinds of networks such as embedded systems.*

*The term, REST, was coined by Roy T. Fielding back in 2000 for his PhD dissertation, Architectural Styles and the Design of Network-based Software Architectures.  Any kind of system following a RESTful architecture is described to have several constraints known as the Fielding Constraints:*

![uniform_interface &lt;&gt;](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/uniform_interface.jpg)

1. Uniform Interface: Any service described to be RESTful must utilize a common language between servers and clients.  This constraint is made up of four guiding principles:

  •   Identification of resources: A stable identifier such as a Uniform Resource Identifier (URI) is used to identify requests consistently to produce and extract information from resources which can come from anywhere (i.e: if you make a GET request to users, the service knows you want information from the users collection).

  •   Manipulation of resources through these representation: The ability to modify or even delete a resource (i.e: You are allowed to Create/Update/Delete information).

  •   Self-descriptive messages: Each message contains enough information to describe how to process the information (i.e: When you are making a 'GET' request, the service knows from the 'GET' that you are trying to read something).

  •   Hypermedia as the engine of application state (HATEOAS): Users can make state transitions only through actions that are identified within hypermedia by the server. (i.e: When trying to persist state on an application, you can choose to login to an existing account or create a new account.  These are controlled by hypermedia links which are used as the engine of application state).

![client_server &lt;&gt;](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/client_server.png)

2. Client-Server: A network must be made up of client(s) and server(s).  Clients are the computers that want to interact with the resources stored on the server and servers are the computers that have the resources of interest.

![stateless &lt;&gt;](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/stateless.png)

3. Stateless: Servers and Clients do not need to keep track of state between each other. Each interaction is self-contained and no history is kept.  However, servers and clients can choose to be stateful.  When a user is logged in and wants to make an action that requires one to be logged in, that request is sent to the server with the appropriate authorization details.  The server does not know the user is logged in otherwise.

![cacheable &lt;&gt;](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/cacheable.jpg)

4. Cacheable: Clients store information retrieved from the server in a cache for quick access.  Caching is used to improve performance and allow scalability for servers.

![layered_system &lt;&gt;](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/layered_system.jpg)

5. Layered System: Server architecture can be composed of hierarchical layers to restrict knowledge of a system to a single layer.  This can be used to allows systems to house legacy services that are restricted to legacy clients and barred from new clients.  An example of this would be proxy servers which are used for load balancing and security checks.  A downside to using a layered system is the increase in overhead and latency, but this can be mitigated with caching.

![code_on_demand &lt;&gt;](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/code_on_demand.png)

6. Code on demand (optional): Clients are allowed to download and execute code from the server as scripts or applets.  An example of this is a clock widget that is downloaded and ran on a home page.  This seems counter-intuitive to utilizing a RESTful architecture; however, it helps reduce using resources to implement features that can be done on the clients' end.",
  subject_id: world_wide_web_id
)

Topic.create(
  title: "What happens when you type a URL in the browser and press enter?",
  notes: "
  1. Type it in.

  2. Lookup address in local DNS(Domain Name System) caches to find an IP address

    • First, it checks the browser cache. The browser maintains a repository of DNS records for a fixed duration for websites you have previously visited. So, it is the first place to run a DNS query.

    • Second, the browser checks the OS cache. If it is not found in the browser cache, the browser would make a system call (i.e. gethostname on Windows) to your underlying computer OS to fetch the record since the OS also maintains a cache of DNS records.

    • Third, it checks the router cache. If it’s not found on your computer, the browser would communicate with the router that maintains its’ own cache of DNS records.

    • Fourth, it checks the ISP cache. If all steps fail, the browser would move on to the ISP. Your ISP maintains its’ own DNS server which includes a cache of DNS records which the browser would check with the last hope of finding your requested URL.

  3. Query address in ISP's DNS server: If we can't find the address in our cache, the ISP will perform a recursive search from one DNS server to another until the address is found.  These requests use up small packets to travel in the fastest possible way to reach the correct DNS server.

    • Return error if not found, else.

  4. Browser starts a TCP/IP handshake with server: Once the browser has the correct IP address, it initiates a handshake using internet protocols to build a connection. TCP is the most common one used for any type of HTTP request.  This is a three step process where the client and the server exchange SYN(synchronize) and ACK(acknowledge) messages to establish a connection.

    a) Client machine sends a SYN packet to the server over the internet asking if it is open for new connections.

    b) If the server has open ports that can accept and initiate new connections, it’ll respond with an ACKnowledgment of the SYN packet using a SYN/ACK packet.

    c) The client will receive the SYN/ACK packet from the server and will acknowledge it by sending an ACK packet.

  5. Browser makes HTTP request to server: The Browser can now send any HTTP request from 'GET' to 'POST'

  6. Server handles request and responds: The server takes the request and passes it to the information to the request handler (usually written in a language like Ruby or PHP) that reads the request/cookies/header to see what is being requested and pass updated information from the server.  The information is then assembled in a parsable format like JSON/XML/HTML.

  7. Server also sends HTTP response: These HTTP response are usually status codes to indicate how the information was processed.  (e.g: status code 200 for OK)

  8. Browser renders response: The browser renders in phases.  It first renders the bone HTML skeleton, then it caches any static images and then proceeds to render based on what was retrieved.",
  subject_id: world_wide_web_id
)

Topic.create(
  title: "DNS",
  notes: "DNS stands for Domain Name Servers or Domain Name System. It acts as the backbone or phonebook of the internet.

When you type a user-friendly hostname into the address bar of a web browser (e.g. www.google.com), the Internet Service Provider takes hostname and looks up the DNS associated with the domain name. It then translates it to a machine friendly IP address (e.g. 216.58.207.78) and send you to that website.
",
  subject_id: world_wide_web_id
)

Topic.create(
  title: "TCP",
  notes: "![tcp &lt;&gt;](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/tcp.jpg)
TCP stands for Transport Control Protocol.  When the computer sends or receives packets from or to different routes. One request or response can be delivered in multiple packets, to make sure that all the packets have been delivered, TCP controls it.  It specifies how data gets from its origin to its destination.

• Data is subdivided into smaller packets
• Each packet individually takes the fastest internet route to its destination
• TCP attaches a header to each packet which contains instructions and error checking for how to assemble the packets back into the desired data at its destination",
  subject_id: world_wide_web_id
)

Topic.create(
  title: "UDP",
  notes: "![udp &lt;&gt;](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/udp.jpeg)

UDP stands for User Datagram Protocol.  It uses a simple connectionless communication model with a minimum of protocol mechanism. message-oriented:
• Part of the transport layer of TCP/IP
• Sends data in chunks
• lightweight headers, no connection required, greater control on when data is sent
• Often used in bandwidth-heavy, packet loss-tolerant apps, such as gaming and streaming video
• Used in small transactions i.e. DNS lookup
• Doesn't guarantee the packets are sent in order.

![tcp_vs_udp &lt;&gt;](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/tcp_vs_udp.jpeg)",
  subject_id: world_wide_web_id
)

Topic.create(
  title: "HTTP",
  notes: "HTTP stands for HyperText Transfer Protocol and it's the basis for sending data across the World Wide Web.  In order for clients to communicate with servers, there are several different kinds of methods that are used that allow the server to understand the action the client is trying to perform.  These method names are case-insensitive and must be used in UPPERCASE.

  •  GET: This method is used to retrieve information from any given server using a given Uniform Resource Identifier (URI).  This method should only retrieve data and should have no effect on the data.
  •  HEAD: This method is the same as GET except it only retrieves the status line and header section only.
  •  POST: This method is used to send data to the server.  It makes use of sending a form data to the server.
  •  PUT: This method is used to replace all the current representations of a target resource with the upload content.
  •  DELETE: This method removes all current representations of the target resource given by a URI.
  •  CONNECT: This method establishes a tunnel to the server with a given URI.
  •  OPTIONS: This method used by the client can be sent to the server to find out the different kinds of HTTP methods that can be retrieved from the server.
  •  TRACE: This method sends back the contents of an HTTP Request to the requester for debugging purposes.",
  subject_id: world_wide_web_id
)

Topic.create(
  title: "Status Codes",
  notes: "Status codes are issued by a server in response to a client request.

1xx - Informational responses: These indicate that the request was received and understood.

2xx - Success: These indicate the action requested by the client was received, understood and accepted:
  •  200 - OK: Standard response for successful HTTP requests.
  •  201 - Created: The request was fulfilled and a new resource has been created.
  •  204 - No Content: The server was able to process the request, but no content was returned.

3xx - Redirection: These indicate the client needs to take additional action to complete the request.
  •  304 - Not Modified: The resource was not modified since last requested.  This response MUST NOT contain a message-body.

4xx - Client errors: An error was caused by the cleint.
  •  400 - Bad Request: The server cannot/will not process the request due to client error such as incorrect route or excessive file size.
  •  401 - Unauthorized: The client does not have the proper authentication to access the requested resource.
  •  403 - Forbidden: Request was valid, but the server refused to honor it.  Similar to 401 where necessary permissions were not provided.
  •  404 - Not Found: Requested resource could not be found, but may be available in the future.
  •  409 - Conflict: Request was not honored due to confliciting issues such as multiple users attempting to edit the same resource.

5xx - Server error: An error caused by the server.
  •  500 - Internal Server Error: A generic error message given when an unexpected condition was encountered and no suitable message could be provided.",
  subject_id: world_wide_web_id
)

#============#
# JavaScript #
#============#

Topic.create(
  title: "Prototype",
  notes: "In the objected-oriented programming (OOP) paradigm, there exists classes and instances.  Classes serve as the blueprint for every instance and an instance is an object that is a single occurance of an existing class.

In JavaScript, there is an in-between object known as the 'Prototype' object.  When you define a class in JavaScript, it comes with a constructor function that points to the Prototype object.  When you instantiate a new instance, it comes with a `__proto__` function that points to the Prototype object.  The Prototype object is shared among all objects created using the constructor function.

![prototype &gt;](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/prototype.jpg)

*For the picture to the right, the following code is written:*
```javascript
  let myVehicle = new Vehicle();
  console.log(Vehicle.prototype === myVehicle.__proto__); // true
```

What happens when the constructor is called?
1. It creates a new object myVehicle
2. It sets the constructor property of the object to Vehicle
3. It sets up the object to delegate to Vehicle.prototype
4. It calls Vehicle() in the context of the new object

New functions and variables can be assigned to the Prototype object and will be inherited by all instances:
```javascript
  function Vehicle() {}
  Vehicle.prototype.wheels = 4
  let myVehicle = new Vehicle();
  console.log(myVehicle.wheels); // 4
```

Beware of pass by reference properties (such as an array):
```javascript
  function Vehicle() {}
  Vehicle.prototype.passengers = ['a'];

  let myVehicle1 = new Vehicle();
  let myVehicle2 = new Vehicle();

  myVehicle1.passengers.push('b');

  console.log(myVehicle1.passengers); // ['a', 'b']
  console.log(myVehicle2.passengers); // ['a', 'b']
```

![prototype_chain &gt;](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/prototype_chain.jpg)

To overcome this, apply the passengers property inside the Vehicle class:
```javascript
  function Vehicle() {
    this.passengers = ['a'];
  }

  let myVehicle1 = new Vehicle();
  let myVehicle2 = new Vehicle();

  myVehicle1.passengers.push('b');

  console.log(myVehicle1.passengers); // ['a', 'b']
  console.log(myVehicle2.passengers); // ['a']
```

The prototype chain is where an object goes up its ancestors to retrieve an inherited property.  Consider the following:
```javascript
  var shape = {
    border: ‘red’
  };

  var triangle = Object.create(shape);
  // prototype chain: null &larr; Object &larr; shape &larr; triangle

  triangle.border; // 'red'
  triangle.area; // undefined
```",
  subject_id: javascript_id
)

Topic.create(
  title: "Closure",
  notes: "![closure &lt;&gt;](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/closure.png)

*Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope. Closures are used for data privacy, stateful functions, and (partial) application.  The biggest draw is that it allows data encapsulation which refers to the idea that some data should not be directly exposed.*

Consider the following code:
```javascript
1.  let a = 3; // The variable 'a' is declared in the global scope.
2.  function addTwo(x){ // The function addTwo is declared and defined.  Everything defined within the {} is known as the lexical scope.
3.      let result = x + 2;  // The variable 'result' is defined here.  It has access to the argument 'x'.  This part is known as the closure.
4.      return result; // The 'result' is returned and execution of the function ends.
5.  } // The function definition ends here.
6.  let b = addTwo(a); // The variable 'b' is declared.  JavaScript looks for addTwo defined in the global scope and executes it.
7.  This function now has access to the result variable which has been encapsulated inside the addTwo function.
8.  console.log(b); // 5 is logged here.  If we were to try and log the result variable, we would get an error instead since it isn't defined.
```",
  subject_id: javascript_id
)

Topic.create(
  title: "Event Loop",
notes: "![event_loop &gt;](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/event_loop.gif)

JavaScript is single-threaded and asynchronous.  This means:
•  Single-threaded: JavaScript can only execute one line of code at a time.
•  Asynchronous: JavaScript can schedule code to execute at a later time.

Consider the following code:
```javascript
1.  console.log('Hello.');
2.  setTimeout(function(){
3.    console.log('Goodbye!');
4.  }, 2000);
5.  console.log('How are you doing?');
```

As with what you would expect, JavaScript like most languages can only read one line of code at a time.  It cannot read and perform lines 1 and 5 at the same time.  It would perform line 1 first, followed by line 2 and so on.  This is the single-threaded aspect of JavaScript.

However, unlike what you might expect, the logs will not print out 'Hello. Goodbye! How are you?'.  Instead, it will print out 'Hello.  How are you?  Goodbye!'.  Even though 'Goodbye' shows up before 'How are you?', the function was thrown in an asynchronous function that was scheduled to perform at a later time.  This is what is meant when JavaScript is called asynchronous.

![javascript_engine](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/javascript_runtime.png)

The JavaScript runtime engine is made up of several different components:
•  Heap: Objects created in the JavaScript are allocated here to memory.  (e.g: var num = 1;)
•  Call Stack: The data structure which records function calls.  Every time we call a new function in our JavaScript program, we push that function on top of any function we're currently running.
•  Web API's: The component that stores all our asynchronous functions which we can call at any time in our program.
•  Callback Queue: The data structure which houses all the asynchronous functions we have called when we executed our program.
•  Event Loop: The component responsible for ensuring the Call Stack is empty and dequeues each function in the Callback Queue in order one function at a time.",
  subject_id: javascript_id
)

Topic.create(
  title: "IIFE",
  notes: "![IIFE &lt;&gt;](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/IIFE.png)

Immediate Invoked Function Expression is a function expression which is called immediately after it's defined.

•  Used to create new variable scope
•  Enables you to attach private data to a function
•  Creates fresh environments
•  Avoids polluting the global namespace.

![IIFE_example](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/IIFE_example.png)

Consider the following code:
```javascript
1. var array = [1,2,3];
2. for(var i = 0; i ⟨ array.length; i++) {
3. console.log('inside ' + i);
4. }
5. console.log('outside ' + i);
```

If you run this code, it will print the following:
```
inside 0
inside 1
inside 2
outside 3
```

The variable i was defined in the for loop block and was meant to just iterate through the loop. However, the variable i is still accessible outside the block.

To fix this, one can utilize IIFE as the following:
```javascript
1. var array = [1,2,3];
2. (function(){
3. for(var i = 0; i ⟨ array.length; i++) {
4. console.log('inside ' + i);
5. }
6. })();
7. console.log('outside ' + i);
```

If you run this code, it will print the following:
```
inside 0
inside 1
inside 2
ReferenceError: i is not defined
```

In the same example, just use ES6 syntax with let instead of var:
```javascript
1. var array = [1,2,3];
2. for(let i = 0; i ⟨ array.length; i++) {
3. console.log('inside ' + i);
4. }
5. console.log('outside ' + i);
```

If you run this code, it will print the following:
```
inside 0
inside 1
inside 2
ReferenceError: i is not defined
```",
  subject_id: javascript_id
)

Topic.create(
  title: "== vs. ===",
  notes: "![coercion_examples &lt;&gt;](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/coercion_examples.png)
== checks for equality with coercion
=== checks for equality without coercion(strict equality)

When you use ==, JavaScript first coerces the variables it's comparing into types that can be easily parsed.

Consider the following code:
```javascript
let a = '0';
console.log(Boolean(a)); // True
let b = false;
console.log(Boolean(b)); // False

console.log(a == b);     // True
```

Under the hood, JavaScript is executing the following coercion:
```
(1) '0' == false
(2) '0' == 0
(3)  0  == 0
```

The moral of the story is always use === unless you have a good reason to use ==.

![==](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/%3D%3D.png)",
  subject_id: javascript_id
)

Topic.create(
  title: "this",
  notes: "![this &lt;&gt;](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/this.png)
'this' is a variable with the value of the object that invokes the function where 'this' is used.  The value for 'this' is not assigned until an object invokes the function where 'this' is defined.  'this' always refers to and holds the value of a singular object.

If we use strict mode and call this in the global scope, it returns undefined:

![this_global](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/this_global.png)

If we apply it to an object variable, it would look something like the following:

![this_object](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/this_object.png)

However, if we do something like this:

![this_setTimeout](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/this_setTimeout.png)

We ended up calling the window object during the setTimeout because 'this' in that context is the window object.  In order to rectify this problem, we need to bind it:

![this_bind](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/this_bind.png)

Lexical Scoping is a fancy way of saying you're passing the current context onto the function you're defining.  We can use a fat arrow function instead of bind to fix the above problem:
![this_fat_arrow](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/this_fat_arrow.png)",
  subject_id: javascript_id
)

Topic.create(
  title: "Hoisting",
  notes: "In JavaScript, variable and function declarations are moved to the top of their respective scopes during the compilation phase.

Function declarations are entirely hoisted, but variables are only partially hoisted.  Consider the following:

![function_hoisted](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/function_hoisted.png)

If we run this code, it will print 25 onto the console.  This is because the function declaration is fully hoisted to the top and the actual code that is executed is similar to the following:

```javascript
  function square (n) {
    return n*n;
  }
  console.log(square(5));
```

Now, consider the following:

![variable_hoisted_1](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/variable_hoisted_1.png)

If we run this code, we get undefined because variables are partially hoisted.  It is equivalent to the following:

![variable_hoisted_2](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/variable_hoisted_2.png)

It's important to note that 'let' and 'const' are **NOT** hoisted.  If we replace the var with either keywords, we will get 'ReferenceError: i is not defined'.",
  subject_id: javascript_id
)

Topic.create(
  title: "new",
  notes: "The 'new' keyword invokes a constructor function which creates a new object from a class.  It does so in the following manner:

1.  Creates a new object.
2.  Sets the object's prototype to be the prototype of the constructor function.
3.  Sets the 'this' variable to point to the newly created object.
3.  Executes the construtor function using the newly created object wherever 'this' is mentioned.
4.  Returns the created object.  If the constructor function returns a non-null object reference, then the reference to that object is returned instead.

What happens if you try to create a new object without the 'new' keyword?
  -  JavaScript attempts to execute the class as a function instead of trying to create a new object out of that class.",
  subject_id: javascript_id
)

#===============#
# Miscellaneous #
#===============#

Topic.create(
  title: "Benefits of HTML5",
  notes: "![HTML5 &lt;&gt;](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/HTML5.png)

*Released back in October 2014 by the World Wide Web Consortium (W3C), HTML5 is the latest iteration of a markup language used for structuring and presenting content across the World Wide Web.*

The benefits are:

![semantics](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/semantics.png)

1. Be more accessible (e.g. screenreaders with semantics): new page structure elements such as &lt;main&gt;, &lt;section&gt;, &lt;article&gt;, &lt;header&gt;, &lt;footer&gt;, &lt;aside&gt;, &lt;nav&gt; and &lt;figure&gt;, are added.

![audio_tag](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/audio_tag.png)

2. Video and audio support: &lt;audio&gt; and &lt;video&gt; tags were added to allow easy parsing of media files as if it were an image.

![DOCTYPE](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/DOCTYPE.jpg)

3. &lt;!DOCTYPE&gt; to clean up on unnecessary header clutter for compatibility between the different browsers: &lt;!DOCTYPE&gt; is the declaration made to at the top of any html file to instruct the web browser on how to render the content. &lt;!DOCTYPE&gt; in HTML5 simplifies the process as it's one line compared to the multi-line mess from older versions of HTML.

![nav](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/nav.png)

4. Can clear up code making it more readable by having more semantics (nav/header instead of div): More semantics such as &lt;nav&gt; were added to simplify having to write out &lt;div id='nav'/&gt; instead.

![smarter_storage](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/smarter_storage.jpg)

5. Smarter storage that allow for sessions to persist across different sessions and windows: Local storage allows users to store different information across different windows that will persist when the windows are closed.  This information is stored via client-side and can parsed with third-party plug-ins.

![canvas](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/canvas.png)

6. Canvas introduced an easy way to interact and animate with the user: The &lt;canvas&gt; tag draws interactive and animated content implemented with JavaScript.

7. Allow for great game development: In addition to the animated content, the &lt;canvas&gt; tag allows people to create games with it as well.

![ie6](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/ie6.png)

8. Great legacy and cross browser support: HTML5 is not only used by all the popular browsers, it can also be used by legacy browsers such as IE6.

![mobile_friendly](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/mobile_friendly.png)

9. Mobile friendly - both to develop on and user: Can be used to render content for mobile devices to allow for responsive design.",

  subject_id: miscellaneous_id
)

Topic.create(
  title: "Media Query",
  notes: "![media_query &lt;&gt;](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/media_query.png)

*Media query is a CSS technique introduced in CSS3.  It uses the @media rule to include a block of CSS properties only when a certain size of the window is true.  Mobile First means designing for mobile before designing for desktop or any other device (This will make the page display faster on smaller devices).*",
  subject_id: miscellaneous_id
)

Topic.create(
  title: "CSS Grid",
  notes: "![css_grid &lt;&gt;](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/css_grid.png)
*CSS Grid is a display property that allows you turn a container into a 2 dimensional layout separated by rows and columns. It is native to modern browsers(like Flexbox) and two-dimensional (unlike Flexbox, which is only one dimensional).*",
  subject_id: miscellaneous_id
)

Topic.create(
  title: "React Lifecycle Methods",
  notes: "![react_lifecycle &lt;&gt;](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/react_lifecycle_methods.png)

The React Lifecycle methods are as follows from birth to death:

1. componentWillMount
    Use Case: Configuring an app to render.
    setState: No
2. componentDidMount
    Use Case: Perform AJAX calls to load data into the component.
    setState: Yes
3. componentWillReceiveProps
    Use Case: Using a prop change to trigger a state transition.
    setState: Yes
4. shouldComponentUpdate
    Use Case: Controlling when the component will re-render.
    setState: No
5. componentWillUpdate
    Use Case: the same as componentWillReceiveProps
    setState: No
6. componentDidUpdate
    Use Case: Updating the DOM to respond to prop/state changes
    setState: Yes
7. componentWillUnmount
    Use Case: Removing any leftover information from the component
    setState: No",
    subject_id: miscellaneous_id
)

Topic.create(
  title: "React Review",
  notes: "React is a popular frontend library developed in 2013 by Facebook.  It's written in JavaScript and used in the development of single-page applications.  React follows a few key fundamentals:

1.  React is designed around making reusable components which are basically plain old JavaScript objects.
  •  Components start out with a capital letter.  Lowercase names are reserved for HTML elements like &lt;div&gt;.
  •  Every component receives a list of attributes called **props**.
  •  In order to help simplify writing React Components, a popular extension known as **JSX** is used to name files.  JSX allows us write both JavaScript and HTML in one file.  That feature is called a **compromise**.

2.  React can be written without JSX.  We can keep everything in JavaScript and write our components out using ```React.createElement```
  •  ```React.createElement``` can accept multiple arguments are the first two arguments: 1st being the kind of tag it will be (like &lt;div&gt;) and the 2nd being an object holding the props you're trying to pass down.
  •  You can nest multiple ```React.createElement``` as it is JavaScript
  •  We can pass in null or an empty object for the second argument of ```React.createElement```
  •  Since React's API is close to the DOM API, we use ```className``` instead of ```class```

3.  JavaScript expressions can be used anywhere in JSX.  Any time we want to start writing JavaScript in a JSX file, we can start by putting the JavaScript in curly braces {}.  This is the equivalent to string interpolation for JavaSript.
  •  The only constraint about using JavaScript in JSX is it has to be an expression.  For example, we cannot use an if statement, but we can use a ternary expression.
  •  Variables, objects and even React elements are expressions.
  •  Functional methods such as ```map```, ```reduce```, ```filter``` or ```concat``` can be used inside JSX.

4.  React components can be written as JavaScript classes.  If we wanted to write Button component, we could do it by writing ```class Button extends React.Component```
  •  React component classes contain a ```render``` function that returns a virtual DOM element.
  •  Every element rendered through a class component gets the instance property of **props**.
  •  After a React component is constructed, we can also bind additional functions or set state using the ```constructor``` function native to JavaScript classes.

5.  Event Handling is different for React than it is for the DOM API in two ways.
  •  All React elements are named using camelCase.
  •  When we pass on an eventhandler, we pass in a JavaScript function reference instead of a string.  i.e. It’s ```onClick={handleClick}```, not ```onClick='handleClick'```

6.  Lifecycle Methods Part 1.  These methods allow us to make React Components change dynamically during different times:
  •  1st: A template for React to create elements is defined.
  •  2nd: We instruct React to use the component somewhere usually in a ```render``` call or with ```ReactDOM.render```
  •  3rd: React instantiates the element and passes **props** to it to access.
  •  4th: If the ```constructor``` function was defined, it is then called here.
  •  5th: React computes the render method of the component.
  •  6th: React communicates with the browser using the DOM API to display the element.  This process is called **mounting**.
  •  7th: At this point, React invokes the lifecycle method ```componentDidMount```.
  •  8th: The **state** of any mounted component might change here.  The component could receive updated **props**.  The real magic of using React happens at this point.
  •  9th: When a component is unmounted, it runs ```componentWillUnmount``` first.

7.  Components that don't keep track of state are known as **dumb** components.  They are primarily used to render or present elements to the DOM.  However, components that keep track of **state** are known as smart components.
  •  React monitors every component's state for changes.  We can change state using ```this.setState```
  •  We can update state in two ways: 1.  Passing a function that returns an object or 2.  Passing a regular object inside a callback.
  •  setState merges state with what you pass it.

8.  React gets its name because it reacts to state changes...on a schedule.  However, the way we see it, it appears as though components get updated when it sees an update.
  •  Render functions keep track of two inputs: props passed by parents and an internal private state.
  •  React keeps a history of all renders.  When one render appears different from a previous one, it computes the difference between them and translates the change onto the DOM.

9.  React handles communicating to the browser for us.

10.  Lifecycle Methods Part 2.
  •  Components re-render when React detects a state change or updated props.
  •  If there are updated props, React invokes a lifecycle method called ```componentWillReceiveProps```
  •  If React detects a change, it has to decide whether the DOM should be updated.  At this point, ```shouldComponentUpdate``` is called here.  This method must return true or false.
  •  If ```shouldComponentUpdate``` is not defined, React makes the decision on its own by default.
  •  When a component is updating, it calls another lifecycle method called ```componentWillUpdate```.
  •  React compares the new rendered output and the last rendered output.  If it's the same, React does nothing.
  •  If there is a difference, React takes the difference.
  •  Once the update is done, React invokes a final lifecycle method called ```componentDidMount```.",
  subject_id: miscellaneous_id
)

Topic.create(
  title: "Redux",
  notes: "![redux &lt;&gt;](https://s3-us-west-1.amazonaws.com/jsg-flashcards/images/redux.gif)

Redux is a JavaScript framework created by Dan Abramov in 2015 that allows one to manage state for a web application.  It aims to serve as a simplification of Flux (a coding pattern that works in a uni-directional way).  It is very lightweight, it works really quickly and handles data in a predictable way.  It follows three key design principles:

1.  A Single Source of Truth: State is managed and stored in a single, plain old JavaScript Object.

2.  State is Read-Only: State cannot be modified directly.  It can only be changed through dispatching actions.

3.  Changes made by Pure Functions: Reducers receive actions and return an updated state.  These are pure functions that are deterministic, predictable and don't mutate input.

Data Flow:

1.  Models (slices of state) reside in a container called a 'Store'.  Although you can have many stores in an application, Redux aims to only maintain one.

2.  Communication in the store happens only through 'dispatch' functions.

3.  In order to modify state, 'actions' which are simple JavaScript objects are dispatched.

4.  The store receives the actions and passes them to the 'reducers'.  Reducers are pure functions intended to modify a copy of existing store's state.

5.  State is immutable, so any modification will generate a new state.

6.  The store will notify any subscribers about the new change.

7.  UI re-renders itself based on detected state changes by using pure functions which accept store's state as a parameter.

8.  Asynchronous network calls modify the store through actions.

Advantages of Redux:

1.  Predictable: Output is classified as deterministic due to the nature of pure functions.

2.  Time Agnostic: Theoretically, since new states are created through pure functions, we can actually retrieve an old state from history and re-create it.

3.  Action Logging: We are easily able to discern who modified state and when it happened.

4.  Flexibility: Collaborative applications such as Google Docs can be created using Redux.

5.  Debugging: Error handling is easy since actions are logged.

6.  Deterministic UI: The same input will always generate the same output.

7.  Unit Testing: Due to the nature of pure functions, we can easily write tests for reducers.",
  subject_id: miscellaneous_id
)
