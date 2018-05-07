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
  notes: "A graph is a non-linear data structure that is made up of several nodes linked by several connectors.  The nodes are called 'vertices' and connectors are called 'edges'.  Any two nodes that directly connected to each other are said to be adjacent.  Nodes are used to represent objects and the edges represent some kind of relationship between them.

Graphs are used to model relationships across data such as:
  •  Computer networks.
  •  Transportation.
  •  Compilers.
  •  Scheduling tasks.
  •  Matching problems.
  •  Website links.
  •  3D graphics.
  •  Relationships between information.

Directed Graph: A graph where the edges have a specific direction.

Weighted Graph: A graph where the edges have some number, called a weight, associated with them. One example where weighted graphs are used is to represent paths between different locations, where the distances between are given as weights.

Connected Graph: A graph where there is a path given any node to another.

Complete Graph: A graph where there is an edge between every node.

Cyclic Graph: A graph where there is a complete cycle.

Acyclic Graph: A graph where there are no complete cycles.",
  subject_id: algorithms_id
)

Topic.create(
  title: "Adjacency Matrix",
  notes: "An adjacency matrix is a 2D array representation of a graph where each coordinate designates whether there is an edge between two vertices.  At each location in the matrix is stored the weight of the edge that connects those two nodes if there is one.  For the locations in the adjacency matrix where there is no edge, we can store a sentinel value such as 0 or -1. In most applications weights that are zero or less would not be used (such as for distances).  For unweighted graphs, the values stored in the matrix can just be true or false.

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
  notes: "An adjacency list is another approach to modeling a graph and all its edges.  In this case, a linked list is used where each vertix points to all its connections.  Each element in the linked list represents one edge in the graph, and stores the target node and the weight (if any).  To add an edge to the graph, we would go to the linked list associated with the node the edge is coming from, and insert a new edge in that list. To find whether or not an edge connects two nodes, and what the weight is, we have to search the list of edges.

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
  notes: "Breadth First Search (BFS) is a search through a graph/tree where all the children of the current node are viewed, before moving on.  Implementation of a BFS requries the use of a Queue.  The difference between traversing a graph versus a tree is a graph does not visit a visited node twice.

What are the steps of a BFS on a graph?
  • Initialize a queue
  • Initialize a 'visited' array
  • Look at first node; mark as visited
      - Enqueue all adjecent nodes; mark as visited
      - (Remove first node from 'result'?)
  • Move to node at head of the queue
      - Dequeue node at head
      -  Repeat...(visit and mark all adjecent neighbors)
  • If all neighbors visited, go to head of queue
  ",
  subject_id: algorithms_id
)

Topic.create(
  title: "DFS",
  notes: "Depth First Search (DFS) is a search through a graph/tree where the first child of each node is searched until no more children can be found.  Once a childless node has been reached, the DFS goes back up one parent and checks the next child until no children are found again.  The cycle repeats until the entire tree/graph is traversed.  Implementation of a DFS requires recursion.  The difference between traversing a graph versus a tree is a graph does not visit a visited node twice.

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
  notes: "The ordering of a directed graph in such a way that every edge with vertices (vertix u to vertix v) is done where vertix u always comes before vertix v.  Topological sort can only be done in a directed acyclic graph (DAG) where there is a start and an end.

What are the steps of a Topological Sort on a graph?
  1. Initialize an empty stack. Keep track of visited and unvisited nodes
  2. For a given node, visit its neghbors 'in order' until a node is found with no unvisited neghbors. Push it into the stack.
  3. Move backwards from the pushed node:
      * If all its neighbors are visited, push it onto the stack
      * If it has unvisited neighbors, visit them
  4. Start with another unvisited node and repeat until all nodes are visited
  5. Output stack

Time Complexity O( V + E )

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
  title: "Recursion",
  notes: "The process in which a function calls itself directly or indirectly is called recursion and the corresponding function is called as recursive function.",
  subject_id: algorithms_id
)

Topic.create(
  title: "Dijkastra's algorithm",
  notes: "Dijsktra's algorithm calculates a list of the shortest distance from a given vertex to every other vertices in a graph.

1. Initialize a set to track a shortest path tree set
2. Assign distance given node as 0, to all other nodes as MAX_INT at first
3. Until the set contains all vertices...
    * Visit the next nearest (shortest distance) vertex, u
    * Push u into the set
    * Update the distance value of all adjecent vertices to u
        * iterate through adj vertices
        * if (distance from u + edge_u-v.weight) < distance v, then update distance of v
4. Return the set when it contains all the vertices.",
  subject_id: algorithms_id
)

#================#
# World Wide Web #
#================#

Topic.create(
  title: "REST",
  notes: "REST stands for Representational State Transfer.  It's a set of design principles used to make network communications scalable for the World Wide Web.  It can be applied to other kinds of networks such as embedded systems.

The term, REST, was coined by Roy T. Fielding back in 2000 for his PhD dissertation, Architectural Styles and the Design of Network-based Software Architectures.  Any kind of system following a RESTful architecture is described to have several constraints known as the Fielding Constraints:

•  Uniform Interface: Any service described to be RESTful must utilize a common language between servers and clients.  This constraint is made up of four guiding principles:
  -  Identification of resources: A stable identifier such as a Uniform Resource Identifier (URI) is used to identify requests consistently to produce and extract information from resources which can come from anywhere (i.e: if you make a GET request to users, the service knows you want information from the users collection).
  -  Manipulation of resources through these representation: The ability to modify or even delete a resource (i.e: You are allowed to Create/Update/Delete information).
  -  Self-descriptive messages: Each message contains enough information to describe how to process the information (i.e: When you are making a 'GET' request, the service knows from the 'GET' that you are trying to read something).
  -  Hypermedia as the engine of application state (HATEOAS): Users can make state transitions only through actions that are identified within hypermedia by the server. (i.e: When trying to persist state on an application, you can choose to login to an existing account or create a new account.  These are controlled by hypermedia links which are used as the engine of application state).

•  Client-Server: A network must be made up of client(s) and server(s).  Clients are the computers that want to interact with the resources stored on the server and servers are the computers that have the resources of interest.

•  Stateless: Servers and Clients do not need to keep track of state between each other. Each interaction is self-contained and no history is kept.  However, servers and clients can choose to be stateful.  When a user is logged in and wants to make an action that requires one to be logged in, that request is sent to the server with the appropriate authorization details.  The server does not know the user is logged in otherwise.

•  Cacheable: Clients store information retrieved from the server in a cache for quick access.  Caching is used to improve performance and allow scalability for servers.

•  Layered System: Server architecture can be composed of hierarchical layers to restrict knowledge of a system to a single layer.  This can be used to allows systems to house legacy services that are restricted to legacy clients and barred from new clients.  An example of this would be proxy servers which are used for load balancing and security checks.  A downside to using a layered system is the increase in overhead and latency, but this can be mitigated with caching.

•  Code on demand (optional): Clients are allowed to download and execute code from the server as scripts or applets.  An example of this is a clock widget that is downloaded and ran on a home page.  This seems counter-intuitive to utilizing a RESTful architecture; however, it helps reduce using resources to implement features that can be done on the clients' end.
  ",
  subject_id: world_wide_web_id
)

Topic.create(
  title: "What happens when you type a URL in the browser and press enter?",
  notes: "1. Type it in.
  2. Lookup address in local DNS(Domain Name System) caches to find an IP address
    • First, it checks the browser cache. The browser maintains a repository of DNS records for a fixed duration for websites you have previously visited. So, it is the first place to run a DNS query.
    • Second, the browser checks the OS cache. If it is not found in the browser cache, the browser would make a system call (i.e. gethostname on Windows) to your underlying computer OS to fetch the record since the OS also maintains a cache of DNS records.
    • Third, it checks the router cache. If it’s not found on your computer, the browser would communicate with the router that maintains its’ own cache of DNS records.
    • Fourth, it checks the ISP cache. If all steps fail, the browser would move on to the ISP. Your ISP maintains its’ own DNS server which includes a cache of DNS records which the browser would check with the last hope of finding your requested URL.
  3. Query address in ISP's DNS server: If we can't find the address in our cache, the ISP will perform a recursive search from one DNS server to another until the address is found.  These requests use up small packets to travel in the fastest possible way to reach the correct DNS server.
    ## Return error if not found, else...
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
  notes: "TCP stands for Transport Control Protocol.  When the computer sends or receives packets from or to different routes. One request or response can be delivered in multiple packets, to make sure that all the packets have been delivered, TCP controls it.  It specifies how data gets from its origin to its destination.

• Data is subdivided into smaller packets
• Each packet individually takes the fastest internet route to its destination
• TCP attaches a header to each packet which contains instructions and error checking for how to assemble the packets back into the desired data at its destination",
  subject_id: world_wide_web_id
)

Topic.create(
  title: "UDP",
  notes: "UDP stands for User Datagram Protocol.  It uses a simple connectionless communication model with a minimum of protocol mechanism. message-oriented:
• Part of the transport layer of TCP/IP
• Sends data in chunks
• lightweight headers, no connection required, greater control on when data is sent
• Often used in bandwidth-heavy, packet loss-tolerant apps, such as gaming and streaming video
• Used in small transactions i.e. DNS lookup
• Doesn't guarantee the packets are sent in order.",
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
  title: "Prototype",
  notes: "In the objected-oriented programming (OOP) paradigm, there exists classes and instances.  Classes serve as the blueprint for every instance and an instance is an object that is a single occurance of an existing class.

In JavaScript, there is an in-between object known as the 'Prototype' object.  When you define a class in JavaScript, it comes with a constructor function that points to the Prototype object.  When you instantiate a new instance, it comes with a __proto__ function that points to the Prototype object.  The Prototype object is shared among all objects created using the constructor function.

For the picture on the right, the following code is written:
  let myVehicle = new Vehicle();
  console.log(Vehicle.prototype === myVehicle.__proto__); // true

What happens when the constructor is called?
  1. It creates a new object myVehicle
  2. It sets the constructor property of the object to Vehicle
  3. It sets up the object to delegate to Vehicle.prototype
  4. It calls Vehicle() in the context of the new object

New functions and variables can be assigned to the Prototype object and will be inherited by all instances:
  function Vehicle() {}
  Vehicle.prototype.wheels = 4
  let myVehicle = new Vehicle();
  console.log(myVehicle.wheels); // 4

Beware of pass by reference properties (such as an array):
  function Vehicle() {}
  Vehicle.prototype.passengers = ['a'];

  let myVehicle1 = new Vehicle();
  let myVehicle2 = new Vehicle();

  myVehicle1.passengers.push('b');

  console.log(myVehicle1.passengers); // ['a', 'b']
  console.log(myVehicle2.passengers); // ['a', 'b']

To overcome this, apply the passengers property inside the Vehicle class:
  function Vehicle() {
    this.passengers = ['a'];
  }

  let myVehicle1 = new Vehicle();
  let myVehicle2 = new Vehicle();

  myVehicle1.passengers.push('b');

  console.log(myVehicle1.passengers); // ['a', 'b']
  console.log(myVehicle2.passengers); // ['a']

The prototype chain is where an object goes up its ancestors to retrieve an inherited property.  Consider the following:
  var shape = {
    border: ‘red’
  };

  var triangle = Object.create(shape); // prototype chain: null => Object => shape => triangle

  triangle.border; // 'red'
  triangle.area; // undefined
",
  subject_id: javascript_id
)

Topic.create(
  title: "Closure",
  notes: "Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope. Closures are used for data privacy, stateful functions, and (partial) application.  The biggest draw is that it allows data encapsulation which refers to the idea that some data should not be directly exposed.

Consider the following code:
1.  let a = 3; // The variable 'a' is declared in the global scope.
2.  function addTwo(x){ // The function addTwo is declared and defined.  Everything defined within the {} is known as the lexical scope.
3.      let result = x + 2;  // The variable result is defined here.  It has access to the parameter 'x' since that was passed into the function.  This part is known as the closure.
4.      return result; // The result is returned and execution of the function ends.
5.  } // The function definition ends here.
6.  let b = addTwo(a); // The variable 'b' is declared.  JavaScript looks for the function addTwo which was defined previously in the global scope and executes it.  This function now has access to the result variable which has been encapsulated inside the addTwo function.
7.  console.log(b); // 5 is logged here.  If we were to try and log the result variable, we would get an error instead since it isn't defined.",
  subject_id: javascript_id
)

Topic.create(
  title: "event loop",
  notes: "The event loop is the process in charge of resolving the event handlers queue. It checks whether the call stack is empty. If it's empty, it then proceeds to resolve the event handlers queue one function at a time.  Commonly, this is done through callbacks, which end up scheduling a function to be executed later",
  subject_id: javascript_id
)

Topic.create(
  title: "IIFE",
  notes: "Immediate Invoked Function Expression is a function expression which is called immediately after it's defined.

•  Used to create new variable scope
•  Enables you to attach private data to a function
•  Creates fresh environments
•  Avoids polluting the global namespace.",
  subject_id: javascript_id
)

Topic.create(
  title: "== vs. ===",
  notes: "== checks for equality with coercion
=== checks for equality ithout coercion == strict equality

2 == '2' // True
2 === '2' // False
undefined == null // True
undefined === null // False",
  subject_id: javascript_id
)

Topic.create(
  title: "this",
  notes: "'this' is a runtime binding of context to a function call, based on how a function was invoked:

    1. Called with new? Use the newly constructed object.
    2. Called with call or apply (or bind)? Use the specified object.
    3. Called with a context object owning the call? Use that context object.
    4. Default: undefined in strict mode, global object otherwise.

'this' is not a reference to the function nor a reference to lexical scope

ES6 arrow functions pass in lexical scoping for 'this' binding",
  subject_id: javascript_id
)

Topic.create(
  title: "new",
  notes: "The 'new' keyword is a constructor function that creates a new object from a class.",
  subject_id: javascript_id
)

#===============#
# Miscellaneous #
#===============#

Topic.create(
  title: "Benefits of HTML5",
  notes: "Released back in October 2014 by the World Wide Web Consortium (W3C), HTML5 is the latest iteration of a markup language used for structuring and presenting content across the World Wide Web.  The benefits are:
  1. Be more accessible (e.g. screenreaders with semantics): new page structure elements such as <main>, <section>, <article>, <header>, <footer>, <aside>, <nav> and <figure>, are added.
  2. Video and audio support: <audio> and <video> tags were added to allow easy parsing of media files as if it were an image.
  3. <!DOCTYPE> to clean up on unnecessary header clutter for compatibility between the different browsers: <!DOCTYPE> is the declaration made to at the top of any html file to instruct the web browser on how to render the content. <!DOCTYPE> in HTML5 simplifies the process as it's one line compared to the multi-line mess from older versions of HTML.
  4. Can clear up code making it more readable by having more semantics (nav/header instead of div): More semantics such as <nav> were added to simplify having to write out <div id='nav'/> instead.
  5. Smarter storage that allow for sessions to persist across different sessions and windows: Local storage allows users to store different information across different windows that will persist when the windows are closed.  This information is stored via client-side and can parsed with third-party plug-ins.
  6. Canvas introduced an easy way to interact and animate with the user: The <canvas> tag draws interactive and animated content implemented with JavaScript.
  7. Allow for great game development: In addition to the animated content, the <canvas> tag allows people to create games with it as well.
  8. Great legacy and cross browser support: HTML5 is not only used by all the popular browsers, it can also be used by legacy browsers such as IE6.
  9. Mobile friendly - both to develop on and user: Can be used to render content for mobile devices to allow for responsive design.",
  subject_id: miscellaneous_id
)

Topic.create(
  title: "Media Query",
  notes: "Media query is a CSS technique introduced in CSS3.  It uses the @media rule to include a block of CSS properties only when a certain size of the window is true.

Mobile First means designing for mobile before designing for desktop or any other device (This will make the page display faster on smaller devices).",
  subject_id: miscellaneous_id
)

Topic.create(
  title: "CSS Grid",
  notes: "CSS Grid is a display property that allows you turn a container into a 2 dimensional layout separated by rows and columns. It is native to modern browsers(like Flexbox) and two-dimensional (unlike Flexbox, which is only one dimensional).",
  subject_id: miscellaneous_id
)

Topic.create(
  title: "React Lifecycle Methods",
  notes: "The React Lifecycle methods are as follows from birth to death:

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
  notes: "React is a popular frontend library developed in 2013 by Facebook.  It's written in JavaScript and used in the development of single-page applications.",
  subject_id: miscellaneous_id
)

Topic.create(
  title: "Redux",
  notes: "Redux is a library that allows React application to have state. This state is represent as a giant javascript object (single immutable state tree)",
  subject_id: miscellaneous_id
)
