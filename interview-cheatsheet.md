# Interview Cheatsheet

- [Interview Cheatsheet](#interview-cheatsheet)
  - [Core Java](#core-java)
    - [OOP Concepts](#oop-concepts)
    - [Data Structures](#data-structures)
    - [Exceptions](#exceptions)
    - [Functional Interfaces and Lambda Expressions](#functional-interfaces-and-lambda-expressions)
    - [Streams](#streams)
    - [Multithreading](#multithreading)
    - [Reflection API](#reflection-api)
    - [Servlet API](#servlet-api)
  - [Testing](#testing)
    - [JUnit](#junit)
    - [Mockito](#mockito)
  - [SQL](#sql)
    - [RDB Basics](#rdb-basics)
      - [SQL Sublanguages](#sql-sublanguages)
      - [Database Objects](#database-objects)
    - [Joins](#joins)
    - [Functions/Procedures](#functionsprocedures)
    - [Constraints](#constraints)
    - [Relationships](#relationships)
    - [Normalization](#normalization)
  - [Spring Framework](#spring-framework)
    - [Spring Core](#spring-core)
    - [Spring MVC](#spring-mvc)
    - [Spring Boot](#spring-boot)
    - [Spring Data](#spring-data)
  - [Web](#web)
    - [HTTP](#http)
      - [HTTP Verbs (request methods)](#http-verbs-request-methods)
      - [Status Codes](#status-codes)
    - [REST](#rest)
      - [Guiding Principles](#guiding-principles)
      - [Richardson Maturity Model](#richardson-maturity-model)

## Core Java

### [OOP Concepts](https://stackify.com/oops-concepts-in-java/)

- Abstraction.
  - Abstraction means using simple things to represent complexity. We all know how to turn the TV on, but we don’t need to know how it works in order to enjoy it. In Java, abstraction means simple things like objects, classes, and variables represent more complex underlying code and data. This is important because it lets avoid repeating the same work multiple times.
- Encapsulation.
  - This is the practice of keeping fields within a class private, then providing access to them via public methods. It’s a protective barrier that keeps the data and code safe within the class itself. This way, we can re-use objects like code components or variables without allowing open access to the data system-wide.
- Inheritance.
  - This is a special feature of Object Oriented Programming in Java. It lets programmers create new classes that share some of the attributes of existing classes. This lets us build on previous work without reinventing the wheel.
- Polymorphism.
  - This Java OOP concept lets programmers use the same word to mean different things in different contexts. One form of polymorphism in Java is method overloading. That’s when different meanings are implied by the code itself. The other form is method overriding. That’s when the different meanings are implied by the values of the supplied variables. See more on this below.

### [Data Structures](https://www.mygreatlearning.com/blog/data-structures-using-java/)

- Arrays
  - Description
    - Linear Data Structure
    - Elements are stored in contiguous memory locations
    - Can access elements randomly using index
    - Stores homogeneous elements i.e, similar elements
    - Syntax:
    - Array declaration
    - datatype varname []=new datatype[size];
    - datatype[] varname=new datatype[size];
    - Can also do declaration and initialization at once
      - Datatype varname [] = {ele1, ele2, ele3, ele4};
  - Advantages
    - Random access
    - Easy sorting and iteration
    - Replacement of multiple variables
  - Disadvantages
    - Size is fixed
    - Difficult to insert and delete
    - If capacity is more and occupancy less, most of the array gets wasted
    - Needs contiguous memory to get allocated
  - Applications
    - For storing information in a linear fashion
    - Suitable for applications that require frequent searching
- Linked List
  - Description
    - Linear Data Structure
    - Elements can be stored as per memory availability
    - Can access elements on linear fashion only
    - Stores homogeneous elements i.e, similar elements
    - Dynamic in size
    - Easy insertion and deletion
    - Starting element or Node is the key which is generally termed as head.
  - Advantages
    - Dynamic in size
    - No wastage as capacity and size is always equal
    - Easy insertion and deletion as 1 link manipulation is required
    - Efficient memory allocation
  - Disadvantages
    - If head Node is lost, the linked list is lost
    - No random access possible
  - Applications
    - Suitable where memory is limited
    - Suitable for applications that require frequent insertion and deletion
- Stack
  - Description
    - Linear Data Structures using Java
    - Follows LIFO: Last In First Out
    - Only the top elements are available to be accessed
    - Insertion and deletion takes place from the top
    - Eg: a stack of plates, chairs, etc
    - 4 major operations:
      - push(ele) – used to insert element at top
      - pop() – removes the top element from stack
      - isEmpty() – returns true is stack is empty
      - peek() – to get the top element of the stack
    - All operation works in constant time i.e, O(1)
  - Advantages
    - Maintains data in a LIFO manner
    - The last element is readily available for use
    - All operations are of O(1) complexity
  - Disadvantages
    - Manipulation is restricted to the top of the stack
    - Not much flexible
  - Applications
    - Recursion
    - Parsing
    - Browser
    - Editors
- Queue
  - Description
    - Linear Data Structure
    - Follows FIFO: First In First Out
    - Insertion can take place from the rear end.
    - Deletion can take place from the front end.
    - Eg: queue at ticket counters, bus station
    - 4 major operations:
      - enqueue(ele) – used to insert element at top
      - dequeue() – removes the top element from queue
      - peekfirst() – to get the first element of the queue
      - peeklast() – to get the last element of the queue
    - All operation works in constant time i.e, O(1)
  - Advantages
    - Maintains data in FIFO manner
    - Insertion from beginning and deletion from end takes O(1) time
  - Applications
    - Scheduling
    - Maintaining playlist
    - Interrupt handling
- Binary Tree
  - Description
    - Hierarchical Data Structure
    - Topmost element is known as the root of the tree
    - Every Node can have at most 2 children in the binary tree
    - Can access elements randomly using index
    - Eg: File system hierarchy
    - Common traversal methods:
      - preorder(root) : print-left-right
      - postorder(root) : left-right-print
      - inorder(root) : left-print-right
  - Advantages
    - Can represent data with some relationship
    - Insertion and search are much efficient
  - Disadvantages
    - Sorting is difficult
    - Not much flexible
  - Applications
    - File system hierarchy
    - Multiple variations of the binary tree have a wide variety of applications
- Binary Search Tree
  - Description
    - Binary tree with the additional restriction
    - Restriction:
      - The left child must always be less than the root node
      - The right child must always be greater than the root node
    - Insertion, Deletion, Search is much more efficient than a binary tree
  - Advantages
    - Maintains order in elements
    - Can easily find the min and max Nodes in the tree
    - Inorder traversal gives sorted elements
  - Disadvantages
    - Random access not possible
    - Ordering adds complexity
  - Applications
    - Suitable for sorted hierarchical data
- Graph
  - Description
    - Basically it is a group of edges and vertices
    - Graph representation
      - G(V, E); where V(G) represents a set of vertices and E(G) represents a set of edges
    - The graph can be directed or undirected
    - The graph can be connected or disjoint
  - Advantages
    - finding connectivity
    - Shortest path
    - min cost to reach from 1 pt to other
    - Min spanning tree
  - Disadvantages
    - Storing graph(Adjacency list and Adjacency matrix) can lead to complexities
  - Applications
    - Suitable for a circuit network
    - Suitable for applications like Facebook, LinkedIn, etc
    - Medical science

### [Exceptions](https://www.tutorialspoint.com/java/java_exceptions.htm)

An exception (or exceptional event) is a problem that arises during the execution of a program. When an Exception occurs the normal flow of the program is disrupted and the program/Application terminates abnormally, which is not recommended, therefore, these exceptions are to be handled.

- Checked Exceptions
  - A checked exception is an exception that is checked (notified) by the compiler at compilation-time, these are also called as compile time exceptions. These exceptions cannot simply be ignored, the programmer should take care of (handle) these exceptions.
- Unchecked Exceptions
  - An unchecked exception is an exception that occurs at the time of execution. These are also called as Runtime Exceptions. These include programming bugs, such as logic errors or improper use of an API. Runtime exceptions are ignored at the time of compilation.
- Errors
  - These are not exceptions at all, but problems that arise beyond the control of the user or the programmer. Errors are typically ignored in your code because you can rarely do anything about an error. For example, if a stack overflow occurs, an error will arise. They are also ignored at the time of compilation.

### [Functional Interfaces and Lambda Expressions](https://www.baeldung.com/java-8-functional-interfaces)

- Lambda Expressions
  - Java 8 brought a powerful new syntactic improvement in the form of lambda expressions. A lambda is an anonymous function that we can handle as a first-class language citizen. For instance, we can pass it to or return it from a method.
  - Before Java 8, we would usually create a class for every case where we needed to encapsulate a single piece of functionality. This implied a lot of unnecessary boilerplate code to define something that served as a primitive function representation.
- Functional Interfaces
  - It's recommended that all functional interfaces have an informative @FunctionalInterface annotation. This clearly communicates the purpose of the interface, and also allows a compiler to generate an error if the annotated interface does not satisfy the conditions.
  - Any interface with a SAM(Single Abstract Method) is a functional interface, and its implementation may be treated as lambda expressions.
  - Note that Java 8's default methods are not abstract and do not count; a functional interface may still have multiple default methods.

### [Streams](https://www.geeksforgeeks.org/stream-in-java/)

- Introduced in Java 8, the Stream API is used to process collections of objects. A stream is a sequence of objects that supports various methods which can be pipelined to produce the desired result.
  The features of Java stream are:
  - A stream is not a data structure instead it takes input from the Collections, Arrays or I/O channels.
  - Streams don’t change the original data structure, they only provide the result as per the pipelined methods.
  - Each intermediate operation is lazily executed and returns a stream as a result, hence various intermediate operations can be pipelined. Terminal operations mark the end of the stream and return the result.
- Stream Operations
  - Intermediate
    - map: The map method is used to returns a stream consisting of the results of applying the given function to the elements of this stream.
      > List number = Arrays.asList(2,3,4,5);<br>
      > List square = number.stream().map(x->x\*x).collect(Collectors.toList());
    - filter: The filter method is used to select elements as per the Predicate passed as argument.
      > List names = Arrays.asList("Reflection","Collection","Stream"); <br>
      > List result = names.stream().filter(s->s.startsWith("S")).collect(Collectors.toList());
    - sorted: The sorted method is used to sort the stream.
      > List names = Arrays.asList("Reflection","Collection","Stream");<br>
      > List result = names.stream().sorted().collect(Collectors.toList());
  - Terminal
    - collect: The collect method is used to return the result of the intermediate operations performed on the stream.
      > List number = Arrays.asList(2,3,4,5,3);<br>
      > Set square = number.stream().map(x->x\*x).collect(Collectors.toSet());
    - forEach: The forEach method is used to iterate through every element of the stream.
      > List number = Arrays.asList(2,3,4,5);<br>
      > number.stream().map(x->x\*x).forEach(y->System.out.println(y));
    - reduce: The reduce method is used to reduce the elements of a stream to a single value.The reduce method takes a BinaryOperator as a parameter.
      > List number = Arrays.asList(2,3,4,5);<br>
      > int even = number.stream().filter(x->x%2==0).reduce(0,(ans,i)-> ans+i);

### [Multithreading](https://www.guru99.com/multithreading-java.html)

- Multithreading in Java is a process of executing two or more threads simultaneously to maximum utilization of CPU. Multithreaded applications execute two or more threads run concurrently. Hence, it is also known as Concurrency in Java. Each thread runs parallel to each other. Mulitple threads don’t allocate separate memory area, hence they save memory. Also, context switching between threads takes less time.
- Advantages
  - The users are not blocked because threads are independent, and we can perform multiple operations at times
  - As such the threads are independent, the other threads won’t get affected if one thread meets an exception
- Life Cycle of a Thread
  - New:
    - In this phase, the thread is created using class “Thread class”.It remains in this state till the program starts the thread. It is also known as born thread.
  - Runnable:
    - In this page, the instance of the thread is invoked with a start method. The thread control is given to scheduler to finish the execution. It depends on the scheduler, whether to run the thread.
  - Running:
    - When the thread starts executing, then the state is changed to “running” state. The scheduler selects one thread from the thread pool, and it starts executing in the application.
  - Waiting:
    - This is the state when a thread has to wait. As there multiple threads are running in the application, there is a need for synchronization between threads. Hence, one thread has to wait, till the other thread gets executed. Therefore, this state is referred as waiting state.
  - Dead:
    - This is the state when the thread is terminated. The thread is in running state and as soon as it completed processing it is in “dead state”.
- Thread Creation
  - Subclass
    - The first way to specify what code a thread is to run, is to create a subclass of Thread and override the run() method. The run() method is what is executed by the thread after you call start().
  - Runnable
    - The second way to specify what code a thread should run is by creating a class that implements the java.lang.Runnable interface. A Java object that implements the Runnable interface can be executed by a Java Thread.
  - Executor Service
    - The third way to specify what code a thread should run is via an Executor Service. Executors are capable of running asynchronous tasks and typically manage a pool of threads, so we don't have to create new threads manually. All threads of the internal pool will be reused under the hood for revenant tasks, so we can run as many concurrent tasks as we want throughout the life-cycle of our application with a single executor service.
    - We can assign tasks to the Executor Service using several methods:
      - execute()
        - the execute() method is void and doesn't give any possibility to get the result of a task's execution or to check the task's status (is it running)
      - submit()
        - submit() submits a Callable or a Runnable task to an ExecutorService and returns a result of type Future
      - invokeAny()
        - invokeAny() assigns a collection of tasks to an ExecutorService, causing each to run, and returns the result of a successful execution of one task (if there was a successful execution)
      - invokeAll()
        - invokeAll() assigns a collection of tasks to an ExecutorService, causing each to run, and returns the result of all task executions in the form of a list of objects of type Future
          > ExecutorService executor = Executors.newFixedThreadPool(10);<br>
          > Runnable runnableTask = () -> {<br> &nbsp;&nbsp;&nbsp;&nbsp;try {<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TimeUnit.MILLISECONDS.sleep(300);<br>
              &nbsp;&nbsp;&nbsp;&nbsp;} catch (InterruptedException e) {<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e.printStackTrace();<br>
              &nbsp;&nbsp;&nbsp;&nbsp;}<br>
          };<br>
          Callable<String> callableTask = () -> {<br>
          &nbsp;&nbsp;&nbsp;&nbsp;TimeUnit.MILLISECONDS.sleep(300);<br>
          &nbsp;&nbsp;&nbsp;&nbsp;return "Task's execution";<br>
          };<br>
          List<Callable<String>> callableTasks = new ArrayList<>();<br>
          callableTasks.add(callableTask);<br>
          callableTasks.add(callableTask);<br>
          callableTasks.add(callableTask);<br>
          executorService.execute(runnableTask);<br>
          Future<String> future = executorService.submit(callableTask);<br>
          String result = executorService.invokeAny(callableTasks);<br>
          List<Future<String>> futures = executorService.invokeAll(callableTasks);<br>

### [Reflection API](https://www.geeksforgeeks.org/reflection-in-java/)

- Reflection is an API which is used to examine or modify the behavior of methods, classes, interfaces at runtime. The required classes for reflection are provided under java.lang.reflect package. Reflection gives us information about the class to which an object belongs and also the methods of that class which can be executed by using the object. Through reflection we can invoke methods at runtime irrespective of the access specifier used with them.
- Reflection can be used to get information about:
  - Class
    - The getClass() method is used to get the name of the class to which an object belongs.
  - Constructors
    - The getConstructors() method is used to get the public constructors of the class to which an object belongs.
  - Methods
    - The getMethods() method is used to get the public methods of the class to which an objects belongs.
- Reflection can also be used to invoke methods:
  > Class.getDeclaredMethod(name, parametertype)<br>
  > Method.invoke(Object, parameter)
- Through reflection we can access the private variables and methods of a class with the help of its class object and invoke the method by using the object as discussed above. We use below two methods for this purpose.
  - Class.getDeclaredField(FieldName) :
    - Used to get the private field. Returns an object of type Field for specified field name
  - Field.setAccessible(true) :
    - Allows to access the field irrespective of the access modifier used with the field.
- Advantages
  - Extensibility Features:
    - An application may make use of external, user-defined classes by creating instances of extensibility objects using their fully-qualified names.
  - Debugging and testing tools:
    - Debuggers use the property of reflection to examine private members on classes.
- Disadvantages
  - Performance Overhead:
    - Reflective operations have slower performance than their non-reflective counterparts, and should be avoided in sections of code which are called frequently in performance-sensitive applications.
  - Exposure of Internals:
    - Reflective code breaks abstractions and therefore may change behavior with upgrades of the platform.

### [Servlet API](https://www.geeksforgeeks.org/introduction-java-servlets/)

- Servlets are the Java programs that run on the Java-enabled web server or application server. They are used to handle the request obtained from the webserver, process the request, produce the response, then send a response back to the webserver.
- Properties of Servlets are as follows:
  - Servlets work on the server-side.
  - Servlets are capable of handling complex requests obtained from the webserver.
- Execution of Servlets basically involves six basic steps:
  1. The clients send the request to the webserver.
  2. The web server receives the request.
  3. The web server passes the request to the corresponding servlet.
  4. The servlet processes the request and generates the response in the form of output.
  5. The servlet sends the response back to the webserver.
  6. The web server sends the response back to the client and the client browser displays it on the screen.
- Servlet Hierarchy
  - Servlet (I)
    - Generic Servlet (AC)
      - Http Servlet (AC)
        - My Servlet (C)
- Servlet Lifycycle
  - Initialization
    - init()
  - Servicing
    - service()
  - Destroying
    - destroy()
- HttpServlet Methods
  - doGet()
    - used to receive get requests via HTTP
  - doPost()
    - used to receive post requests via HTTP
  - doPut()
    - used to receive put requests via HTTP
  - doDelete()
    - user to receive delete requests via HTTP
  - init()
    - initializes the servlet
  - destroy()
    - terminates the servlet instance
  - getServletInfo()
    - used to provide information about the servlet
- Servlet Container
  - Servlet container, also known as Servlet engine is an integrated set of objects that provide a run time environment for Java Servlet components.
    - In simple words, it is a system that manages Java Servlet components on top of the Web server to handle the Web client requests.
  - Services provided by the Servlet container :
    - Network Services:
      - Loads a Servlet class. The loading may be from a local file system, a remote file system or other network services. The Servlet container provides the network services over which the request and response are sent.
    - Manage Servlet container:
      - Manages the lifecycle of a Servlet.
    - Resource management:
      - Manages the static and dynamic resources, such as HTML files, Servlets, and JSP pages.
    - Security Service:
      - Handles authorization and authentication of resource access.
    - Session Management:
      - Maintains a session by appending a session ID to the URL path.

## Testing

### [JUnit](https://www.tutorialspoint.com/junit/index.htm)

- JUnit is a unit testing framework for Java programming language. JUnit has been important in the development of test-driven development, and is one of a family of unit testing frameworks collectively known as xUnit, that originated with JUnit.
- JUnit promotes the idea of "first testing then coding", which emphasizes on setting up the test data for a piece of code that can be tested first and then implemented. This approach is like "test a little, code a little, test a little, code a little." This concept is called Test Driven Development, or TDD for short.
- JUnit test framework provides the following important features:
  - Fixtures
    - Fixtures is a fixed state of a set of objects used as a baseline for running tests. The purpose of a test fixture is to ensure that there is a well-known and fixed environment in which tests are run so that results are repeatable. It includes:
      - setUp() method, which runs before every test invocation
      - tearDown() method, which runs after every test method.
  - Test suites
    - A test suite bundles a few unit test cases and runs them together. In JUnit, both @RunWith and @Suite annotation are used to run the suite test.
  - Test runners
    - The test runner is used for executing test cases.
  - JUnit classes
    - Assert
      - Contains a set of assert methods.
    - TestCase
      - Contains a test case that defines the fixture to run multiple tests.
    - TestResult
      - Contains methods to collect the results of executing a test case.
- Usage
  - In order for a test class to be seen by the test runner, it should have the word "test" somewhere in its name.
  - In order for a test method (test case) to be seen by the test runner, it should be placed inside of the test class and annotated with the @Test annotation.
  - In order for it to be a fully functional test, your test methods should have some form of an assertion, a method that asserts that a result value matches your expected value. When assertions fail, your test fails; when it doesn't fail, the test passes. This is how we confirm that a class is behaving as expected.
  - There are several assertion methods that we see commonly:
    - assertEquals()
    - assertFalse()
    - assertTrue()
    - assertNotNull()
    - assertNull()

### [Mockito](https://www.tutorialspoint.com/mockito/index.htm)

- Mockito is a mocking framework, JAVA-based library that is used for effective unit testing of JAVA applications. Mockito is used to mock interfaces so that a dummy functionality can be added to a mock interface that can be used in unit testing.
- Advantages
  - Most times in Java development, we end up with classes that are dependent on other classes functionality or data. When trying to test the class, it would not be considered a unit test if we were also testing the subsequent dependency that the tested class was dependent on. I.e. if I'm testing a service class but most of the methods are dependent on data from a repository, we would be entirely dependent on the data sent back from our data access layer. As such, we utilize Mocking to provide mock values from the dependency so that we can focus our tests solely on a single unit or class.
- Usage
  - Creating a mock
    - In your test class, in order to create a mock of an object, the code would be as follows:
      > Class classNameMock = Mockito.mock(Class.class);
    - The above code now allows this mock object to be used and minipulated during our following tests
  - Supplying mock values from a mock object
    - Once you have your mock object, you now need to describe some behavior or data for the mock object to return when a specific action takes place. We typically see this as when(some action).thenReturn(some value) instead of the actual value
      > Mockito.when(classNameMock.methodA(data)).thenReturn(someValue)
    - In the above example, you provide explicit return values for each method that with likely be called during the test suite
    - For example, lets say we have a class that is dependent on classNameMock and a method that calls classNameMock.methodA() in its implementation. The code for calling the inital class method does not change, we are simply providing the data that is returned from the dependency.

## [SQL](http://www.sqlcourse.com/intro.html)

- SQL stands for Structured Query Language. SQL is used to communicate with a database. According to ANSI (American National Standards Institute), it is the standard language for relational database management systems. SQL statements are used to perform tasks such as update data on a database, or retrieve data from a database.

### RDB Basics

#### [SQL Sublanguages](https://www.interviewsansar.com/sql-sub-languages/)

- DDL – Data Definition Language.
  - CREATE
  - ALTER
  - DROP
  - TRUNCATE
  - RENAME
- DML – Data Manipulation Language.
  - INSERT
  - UPDATE
  - DELETE
- DRL/DQL – Data Retrieval Language/Data Query Language.
  - SELECT
- TCL – Transaction Query Language.
  - COMMIT
  - ROLLBACK
  - SAVEPOINT
  - ROLLBACK TO
- DCL – Data Control Language.
  - GRANT
  - REVOKE
  - AUDIT
  - COMMENT
  - ANALYZE
- SCL – Session Control Language.
  - ALTER SESSION
  - SET ROLL

#### [Database Objects](https://www.geeksforgeeks.org/database-objects-in-dbms/)

- Table
  - This database object is used to create a table in database.
- View
  - This database object is used to create a view in database.A view is a logical table based on a table or another view. A view contains no data of its own but is like a window through which data from tables can be viewed or changed.
- Sequence
  - This database object is used to create a sequence in database.A sequence is a user created database object that can be shared by multiple users to generate unique integers. A typical usage for sequences is to create a primary key value, which must be unique for each row.
- Index
  - This database object is used to create a indexes in database. An index provides direct and fast access to rows in a table. Its purpose is to reduce the necessity of disk I/O by using an indexed path to locate data quickly.

### [Joins](https://www.techonthenet.com/sql/joins.php)

- A JOIN clause is used to combine rows from two or more tables, based on a related column between them.
- Different Types of SQL JOINs:
  - (INNER) JOIN:
    - Returns records that have matching values in both tables
      > SELECT columns<br>
      > FROM table1 <br>
      > INNER JOIN table2<br>
      > ON table1.column = table2.column;
  - LEFT (OUTER) JOIN:
    - Returns all records from the left table, and the matched records from the right table
      > SELECT columns<br>
      > FROM table1<br>
      > LEFT JOIN table2<br>
      > ON table1.column = table2.column;
  - RIGHT (OUTER) JOIN:
    - Returns all records from the right table, and the matched records from the left table
      > SELECT columns<br>
      > FROM table1<br>
      > RIGHT JOIN table2<br>
      > ON table1.column = table2.column;
  - FULL (OUTER) JOIN:
    - Returns all records when there is a match in either left or right table
      > SELECT columns<br>
      > FROM table1<br>
      > FULL JOIN table2<br>
      > ON table1.column = table2.column;

### Functions/Procedures

- [Functions](https://www.geeksforgeeks.org/sql-functions-aggregate-scalar-functions/)
  - For doing operations on data sql has many built-in functions, they are categorised in two categories and further sub-categorised in different seven functions under each category. The categories are:
    - Aggregate functions:
      - These functions are used to do operations from the values of the column and a single value is returned.
        - AVG()
        - COUNT()
        - FIRST()
        - LAST()
        - MAX()
        - MIN()
        - SUM()
    - Scalar functions:
      - These functions are based on user input, these too returns single value.
        - UCASE()
        - LCASE()
        - MID()
        - LEN()
        - ROUND()
        - NOW()
        - FORMAT()
    - User Defined Functions:
      - Users can also create their own functions to perform custom operations on data.
- [Procedures](https://www.w3resource.com/sql/sql-procedure.php)
  - A procedure (often called a stored procedure) is a subroutine like a subprogram in a regular computing language, stored in database. SQL procedures can be used to create simple scripts for quickly querying transforming, updating data, generating basic reports, improve application performance, modularizing applications, and improve overall database design, and database security.
  - Advantages
    - Can contain SQL Procedural Language statements and features which support the implementation of control-flow logic around traditional static and dynamic SQL statements.
    - Easy to implement, because they use a simple high-level, strongly-typed language.
    - SQL procedures are more reliable than equivalent external procedures.
    - Support input, output, and input-output parameter passing modes.
    - Support a simple, but powerful condition and error-handling model.
    - Return multiple results sets to the caller or to a client application.
    - Allow you to easily access the SQLSTATE and SQLCODE values as special variables.
    - Reside in the database and are automatically backed up and restored.
    - Can be invoked wherever the CALL statement is supported.
    - Support nested procedure calls to other SQL procedures or procedures implemented in other languages.
  - Disadvantages
    - Stored procedure languages are vendor specific. Therefore if you switch to another vendor's database, it requires to rewriting the existing stored procedures.
    - Stored procedure languages from different vendors have different levels of sophistication. For example, Oracle's PL/SQL has more language features and built-in features than Microsoft's T-SQL.
    - Tool support for writing and debugging stored procedures is often not as good as for other programming languages, though it depends on vendors and languages.

### [Constraints](https://www.w3schools.com/sql/sql_constraints.asp)

- SQL constraints are used to specify rules for the data in a table. Constraints are used to limit the type of data that can go into a table. This ensures the accuracy and reliability of the data in the table. If there is any violation between the constraint and the data action, the action is aborted.
- The following constraints are commonly used in SQL:
  - NOT NULL
    - Ensures that a column cannot have a NULL value
  - UNIQUE
    - Ensures that all values in a column are different
  - PRIMARY KEY
    - A combination of a NOT NULL and UNIQUE. Uniquely identifies each row in a table
  - FOREIGN KEY
    - Prevents actions that would destroy links between tables
  - CHECK
    - Ensures that the values in a column satisfies a specific condition
  - DEFAULT
    - Sets a default value for a column if no value is specified
  - CREATE INDEX
    - Used to create and retrieve data from the database very quickly

### [Relationships](https://vladmihalcea.com/database-table-relationships/)

- When creating a database, common sense dictates that we use separate tables for different types of entities. Some examples are: customers, orders, items, messages etc... But we also need to have relationships between these tables. For instance, customers make orders, and orders contain items. These relationships need to be represented in the database. Also, when fetching data with SQL, we need to use certain types of JOIN queries to get what we need.
- Types of SQL Relationships:
  - One to One
    - One-to-one requires the child table Primary Key to be associated via a Foreign Key with the parent table Primary Key column.
  - One to Many
    - one-to-many is the most common relationship, and it associates a row from a parent table to multiple rows in a child table.
  - Many to Many
    - many-to-many requires a link table containing two Foreign Key columns that reference the two different parent tables.

### [Normalization](https://www.edureka.co/blog/normalization-in-sql/)

- It is the processes of reducing the redundancy of data in the table and also improving the data integrity. So why is this required? without Normalization in SQL, we may face many issues such as
  - Insertion anomaly:
    - It occurs when we cannot insert data to the table without the presence of another attribute
  - Update anomaly:
    - It is a data inconsistency that results from data redundancy and a partial update of data.
  - Deletion Anomaly:
    - It occurs when certain attributes are lost because of the deletion of other attributes.
- Normal Forms
  - 1st Normal Form (1NF)
    - In this Normal Form, we tackle the problem of atomicity. Here atomicity means values in the table should not be further divided. In simple terms, a single cell cannot hold multiple values. If a table contains a composite or multi-valued attribute, it violates the First Normal Form.
  - 2nd Normal Form (2NF)
    - The first condition in the 2nd NF is that the table has to be in 1st NF. The table also should not contain partial dependency. Here partial dependency means the proper subset of candidate key determines a non-prime attribute.
  - 3rd Normal Form (3NF)
    - The same rule applies as before i.e, the table has to be in 2NF before proceeding to 3NF. The other condition is there should be no transitive dependency for non-prime attributes. That means non-prime attributes (which doesn’t form a candidate key) should not be dependent on other non-prime attributes in a given table. So a transitive dependency is a functional dependency in which X → Z (X determines Z) indirectly, by virtue of X → Y and Y → Z (where it is not the case that Y → X)
  - Boyce Codd Normal Form (BCNF)
    - This is also known as 3.5 NF. Its the higher version 3NF and was developed by Raymond F. Boyce and Edgar F. Codd to address certain types of anomalies which were not dealt with 3NF. Before proceeding to BCNF the table has to satisfy 3rd Normal Form. In BCNF if every functional dependency A → B, then A has to be the Super Key of that particular table.

## [Spring Framework](https://spring.io/projects/spring-framework)

- The Spring Framework provides a comprehensive programming and configuration model for modern Java-based enterprise applications - on any kind of deployment platform. A key element of Spring is infrastructural support at the application level: Spring focuses on the "plumbing" of enterprise applications so that teams can focus on application-level business logic, without unnecessary ties to specific deployment environments.

### [Spring Core](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html)

- The IoC Container
  - IoC is also known as dependency injection (DI). It is a process whereby objects define their dependencies (that is, the other objects they work with) only through constructor arguments, arguments to a factory method, or properties that are set on the object instance after it is constructed or returned from a factory method. The container then injects those dependencies when it creates the bean.
  - There are two types of IoC containers:
    - BeanFactory
      - The BeanFactory is the actual container which instantiates, configures, and manages a number of beans. These beans typically collaborate with one another, and thus have dependencies between themselves. These dependencies are reflected in the configuration data used by the BeanFactory .
      - A BeanFactory is represented by the interface org.springframework.beans.factory.BeanFactory, for which there are multiple implementations. The most commonly used simple BeanFactory implementation is org.springframework.beans.factory.xml.XmlBeanFactory.
    - ApplicationContext
      - The AppplicationContext is the interface for an advanced bean factory, thus it is built on top of BeanFactory and provides more advanced functionality.
      - As the ApplicationContext includes all functionality of the BeanFactory, it is generally recommended that it be used over the BeanFactory, except for a few limited situations such as perhaps in an Applet, where memory consumption might be critical, and a few extra kilobytes might make a difference.
      - The ApplicationContext lets youy read bean definitions and access them as the following example shows:
        > // create and configure beans<br>
        > ApplicationContext context = new ClassPathXmlApplicationContext("services.xml", "daos.xml");<br>
        > // retrieve configured instance<br>
        > PetStoreService service = context.getBean("petStore", PetStoreService.class);<br>
        > // use configured instance<br>
        > List<String> userList = service.getUsernameList();
- Configuration Metadata
  - This configuration metadata represents how you, as an application developer, tell the Spring container to instantiate, configure, and assemble the objects in your application. Configuration metadata is traditionally supplied in a simple and intuitive XML format, which is what most of this chapter uses to convey key concepts and features of the Spring IoC container.
  - There are three main types of Metadata configuration:
    - XML
      > &lt;?xml version="1.0" encoding="UTF-8"?>
      > &lt;beans xmlns="http://www.springframework.org/schema/beans"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://www.springframework.org/schema/beans
              https://www.springframework.org/schema/beans/spring-beans.xsd"><br>
          &lt;bean id="..." class="...">
              collaborators and configuration for this bean go here<br>
          &lt;/bean><br>
          &lt;bean id="..." class="..."><br>
              collaborators and configuration for this bean go here<br>
          &lt;/bean><br>
          more bean definitions go here<br>
      &lt;/beans>
    - [Annotations](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-annotation-config)
      - See the reference doc
    - Java
      - Basic Concepts:
        - @Bean
          - The @Bean annotation is used to indicate that a method instantiates, configures, and initializes a new object to be managed by the Spring IoC container. For those familiar with Spring’s <beans/> XML configuration, the @Bean annotation plays the same role as the <bean/> element. You can use @Bean-annotated methods with any Spring @Component. However, they are most often used with @Configuration beans.
        - @Configuration
          - Annotating a class with @Configuration indicates that its primary purpose is as a source of bean definitions. Furthermore, @Configuration classes let inter-bean dependencies be defined by calling other @Bean methods in the same class. The simplest possible @Configuration class reads as follows:
            > @Configuration<br>
            > public class AppConfig {<br> > &nbsp;&nbsp;&nbsp;&nbsp;@Bean<br> > &nbsp;&nbsp;&nbsp;&nbsp;public MyService myService() {<br> > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return new MyServiceImpl();<br> > &nbsp;&nbsp;&nbsp;&nbsp;}<br>
            > }
        - @Autowired
          - @Autowired allows Spring to resolve and inject collaborating beans into our bean.
          - You can use @Autowired on
            - Constructors
              > public class FooService {<br> > &nbsp;&nbsp;&nbsp;&nbsp;private FooFormatter fooFormatter;<br> > &nbsp;&nbsp;&nbsp;&nbsp;@Autowired<br> > &nbsp;&nbsp;&nbsp;&nbsp;public void setFooFormatter(FooFormatter fooFormatter) {<br> > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.fooFormatter = fooFormatter;<br> > &nbsp;&nbsp;&nbsp;&nbsp;}<br>
              > }
            - Properties
              > @Component<br>
              > public class FooService { <br> > &nbsp;&nbsp;&nbsp;&nbsp;@Autowired<br> > &nbsp;&nbsp;&nbsp;&nbsp;private FooFormatter fooFormatter;<br>
              > }
            - A mix of both
              > public class FooService {<br> > &nbsp;&nbsp;&nbsp;&nbsp;private FooFormatter fooFormatter;<br> > &nbsp;&nbsp;&nbsp;&nbsp;@Autowired<br> > &nbsp;&nbsp;&nbsp;&nbsp;private FooProperty fooProperty;<br> > &nbsp;&nbsp;&nbsp;&nbsp;@Autowired<br> > &nbsp;&nbsp;&nbsp;&nbsp;public void setFooFormatter(FooFormatter fooFormatter) {<br> > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.fooFormatter = fooFormatter;<br> > &nbsp;&nbsp;&nbsp;&nbsp;}<br>
              > }

### [Spring MVC](https://www.javatpoint.com/spring-mvc-tutorial)

- A Spring MVC is a Java framework which is used to build web applications. It follows the Model-View-Controller design pattern. It implements all the basic features of a core spring framework like Inversion of Control, Dependency Injection.

  - Artifacts of Spring MVC
    - Model
      - A model contains the data of the application. A data can be a single object or a collection of objects.
    - Controller
      - A controller contains the business logic of an application. Here, the @Controller annotation is used to mark the class as the controller.
    - View
      - A view represents the provided information in a particular format. Generally, JSP+JSTL is used to create a view page. Although spring also supports other view technologies such as Apache Velocity, Thymeleaf and FreeMarker.
    - Front Controller
      - In Spring Web MVC, the DispatcherServlet class works as the front controller. It is responsible to manage the flow of the Spring MVC application.
  - Annotations

    - @Controller
      - Used to mark the class as a controller
    - @RestController
      - Combines the @Controller and @ResponseBody annotations allowing for a simpler implementation and cleaner code
    - @RequestMapping
      - Simply put, @RequestMapping marks request handler methods inside @Controller classes; it can be configured using:
        - path, or its aliases, name, and value:
          - which URL the method is mapped to
        - method:
          - compatible HTTP methods
        - params:
          - filters requests based on presence, absence, or value of HTTP parameters
        - headers:
          - filters requests based on presence, absence, or value of HTTP headers
        - consumes:
          - which media types the method can consume in the HTTP request body
        - produces:
          - which media types the method can produce in the HTTP response body
    - @RequestBody
      - maps the body of the HTTP request to an object
    - @ResponseBody

      - If we mark a request handler method with @ResponseBody, Spring treats the result of the method as the response itself. If we annotate a @Controller class with this annotation, all request handler methods will use it

    - @PathVariable
      - This annotation indicates that a method argument is bound to a URI template variable. We can specify the URI template with the @RequestMapping annotation and bind a method argument to one of the template parts with @PathVariable.
    - @RequestParam
      - We use @RequestParam for accessing HTTP request parameters. It has the same configuration options as the @PathVariable annotation. In addition to those settings, with @RequestParam we can specify an injected value when Spring finds no or empty value in the request. To achieve this, we have to set the defaultValue argument. Providing a default value implicitly sets required to false:
    - @ExceptionHandler
      - With this annotation, we can declare a custom error handler method. Spring calls this method when a request handler method throws any of the specified exceptions.
    - @ResponseStatus
      - We can specify the desired HTTP status of the response if we annotate a request handler method with this annotation. We can declare the status code with the code argument, or its alias, the value argument. Also, we can provide a reason using the reason argument.

### [Spring Boot](https://www.tutorialspoint.com/spring_boot/spring_boot_introduction.htm)

- Spring Boot provides a good platform for Java developers to develop a stand-alone and production-grade spring application that you can just run. You can get started with minimum configurations without the need for an entire Spring configuration setup.
- Spring Boot automatically configures your application based on the dependencies you have added to the project by using @EnableAutoConfiguration annotation. For example, if MySQL database is on your classpath, but you have not configured any database connection, then Spring Boot auto-configures an in-memory database. The entry point of the spring boot application is the class contains @SpringBootApplication annotation and the main method. Spring Boot automatically scans all the components included in the project by using @ComponentScan annotation.
- Spring Boot Starters:
  - Spring Boot Starter Actuator
    - used to monitor and manage your application.
  - Spring Boot Starter Security
    - used for Spring Security
  - Spring Boot Starter web
    - used to write Rest Endpoints.
  - Spring Boot Starter Thyme Leaf
    - used to create a web application.
  - Spring Boot Starter Test
    - used for writing Test cases.
- Auto Configuration
  - pring Boot Auto Configuration automatically configures your Spring application based on the JAR dependencies you added in the project. For example, if MySQL database is on your class path, but you have not configured any database connection, then Spring Boot auto configures an in-memory database.
  - For this purpose, you need to add @EnableAutoConfiguration annotation or @SpringBootApplication annotation to your main class file. Then, your Spring Boot application will be automatically configured.
    > import org.springframework.boot.SpringApplication;<br>
    > import org.springframework.boot.autoconfigure.EnableAutoConfiguration;<br>
    > @EnableAutoConfiguration<br>
    > public class DemoApplication {<br> &nbsp;&nbsp;&nbsp;&nbsp;public static void main(String[] args) {<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SpringApplication.run(DemoApplication.class, args);<br> &nbsp;&nbsp;&nbsp;&nbsp;}<br>
    > }
- Spring Boot Application
  - The entry point of the Spring Boot Application is the class contains @SpringBootApplication annotation. This class should have the main method to run the Spring Boot application. @SpringBootApplication annotation includes Auto- Configuration, Component Scan, and Spring Boot Configuration.
    > import org.springframework.boot.SpringApplication;<br>
    > import org.springframework.boot.autoconfigure.SpringBootApplication;<br>
    > @SpringBootApplication<br>
    > public class DemoApplication {<br> &nbsp;&nbsp;&nbsp;&nbsp;public static void main(String[] args) {<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SpringApplication.run(DemoApplication.class, args);<br> &nbsp;&nbsp;&nbsp;&nbsp;}<br>
    > }

### [Spring Data](https://www.baeldung.com/the-persistence-layer-with-spring-data-jpa)

- The DAO layer usually consists of a lot of boilerplate code that can and should be simplified. The advantages of such a simplification are many: a decrease in the number of artifacts that need to be defined and maintained, consistency of data access patterns and consistency of configuration. Spring Data takes this simplification one step forward and makes it possible to remove the DAO implementations entirely – the interface of the DAO is now the only artifact that needs to be explicitly defined. In order to start leveraging the Spring Data programming model with JPA, a DAO interface needs to extend the JPA specific Repository interface – JpaRepository. This will enable Spring Data to find this interface and automatically create an implementation for it.
  By extending the interface we get the most relevant CRUD methods for standard data access available in a standard DAO out of the box.
- Features:
  - Sophisticated support to build repositories based on Spring and JPA
  - Support for QueryDSL predicates and thus type-safe JPA queries
  - Transparent auditing of domain class
  - Pagination support, dynamic query execution, ability to integrate custom data access code
  - Validation of @Query annotated queries at bootstrap time
  - Support for XML based entity mapping
  - JavaConfig based repository configuration by introducing @EnableJpaRepositories.
- JpaRepository Methods:
  - See [the reference docs](https://docs.spring.io/spring-data/jpa/docs/current/api/org/springframework/data/jpa/repository/JpaRepository.html)
  - To define more specific access methods, Spring JPA supports quite a few options – you can:
    - Simply define a new method in the interface
    - Provide the actual JPQ query by using the @Query annotation
      > @Query("SELECT f FROM Foo f WHERE LOWER(f.name) = LOWER(:name)")<br>
      > Foo retrieveByName(@Param("name") String name);
    - Use the more advanced Specification and Querydsl support in Spring Data
    - Define custom queries via JPA Named Queries
      - Let’s look at an example: if the managed entity has a name field (and the Java Bean standard getName and setName methods), we’ll define the findByName method in the DAO interface; this will automatically generate the correct query:
        > @Repository<br>
        > public interface IFooDAO extends JpaRepository< Foo, Long >{<br> &nbsp;&nbsp;&nbsp;&nbsp;Foo findByName( String name );<br>
        > }

## Web

### [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)

- Hypertext Transfer Protocol (HTTP) is an application-layer protocol for transmitting hypermedia documents, such as HTML. It was designed for communication between web browsers and web servers, but it can also be used for other purposes. HTTP follows a classical client-server model, with a client opening a connection to make a request, then waiting until it receives a response. HTTP is a stateless protocol, meaning that the server does not keep any data (state) between two requests.

#### HTTP Verbs (request methods)

- GET
  - The HTTP GET method requests a representation of the specified resource. Requests using GET should only be used to request data (they shouldn't include data).
- POST
  - The HTTP POST method sends data to the server. The type of the body of the request is indicated by the Content-Type header. A POST request is typically sent via an HTML form and results in a change on the server.
- PUT
  - The HTTP PUT request method creates a new resource or replaces a representation of the target resource with the request payload. The difference between PUT and POST is that PUT is idempotent: calling it once or several times successively has the same effect (that is no side effect), whereas successive identical POST requests may have additional effects, akin to placing an order several times.
- DELETE
  - The HTTP DELETE request method deletes the specified resource.
- PATCH
  - The HTTP PATCH request method applies partial modifications to a resource. PATCH is somewhat analogous to the "update" concept found in CRUD (in general, HTTP is different than CRUD, and the two should not be confused). A PATCH request is considered a set of instructions on how to modify a resource. Contrast this with PUT; which is a complete representation of a resource.
- HEAD
  - The HTTP HEAD method requests the headers that would be returned if the HEAD request's URL was instead requested with the HTTP GET method. For example, if a URL might produce a large download, a HEAD request could read its Content-Length header to check the filesize without actually downloading the file.
- OPTIONS
  - The HTTP OPTIONS method requests permitted communication options for a given URL or server. A client can specify a URL with this method, or an asterisk (\*) to refer to the entire server.
- TRACE
  - The HTTP TRACE method performs a message loop-back test along the path to the target resource, providing a useful debugging mechanism.

#### [Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

- HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:
  - Informational responses (100–199)
    - 100 Continue
      - This interim response indicates that everything so far is OK and that the client should continue the request, or ignore the response if the request is already finished.
    - 101 Switching Protocol
      - This code is sent in response to an Upgrade request header from the client, and indicates the protocol the server is switching to.
    - 102 Processing (WebDAV)
      - This code indicates that the server has received and is processing the request, but no response is available yet.
    - 103 Early Hints
      - This status code is primarily intended to be used with the Link header, letting the user agent start preloading resources while the server prepares a response.
  - Successful responses (200–299)
    - 200 OK
      - The request has succeeded. The meaning of the success depends on the HTTP method:
        - GET: The resource has been fetched and is transmitted in the message body.
        - HEAD: The representation headers are included in the response without any message body.
        - PUT or POST: The resource describing the result of the action is transmitted in the message body.
        - TRACE: The message body contains the request message as received by the server.
    - 201 Created
      - The request has succeeded and a new resource has been created as a result. This is typically the response sent after POST requests, or some PUT requests.
    - 202 Accepted
      - The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing.
  - Redirects (300–399)
    - 300 Multiple Choice
      - The request has more than one possible response. The user-agent or user should choose one of them. (There is no standardized way of choosing one of the responses, but HTML links to the possibilities are recommended so the user can pick.)
    - 301 Moved Permanently
      - The URL of the requested resource has been changed permanently. The new URL is given in the response.
    - 302 Found
      - This response code means that the URI of requested resource has been changed temporarily. Further changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.
    - 303 See Other
      - The server sent this response to direct the client to get the requested resource at another URI with a GET request.
    - 307 Temporary Redirect
      - The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request. This has the same semantics as the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: If a POST was used in the first request, a POST must be used in the second request.
    - 308 Permanent Redirect
      - This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header. This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: If a POST was used in the first request, a POST must be used in the second request.
  - Client errors (400–499)
    - 400 Bad Request
      - The server could not understand the request due to invalid syntax.
    - 401 Unauthorized
      - Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
    - 403 Forbidden
      - The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401, the client's identity is known to the server.
    - 404 Not Found
      - The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurrence on the web.
    - 418 I'm a teapot
      - The server refuses the attempt to brew coffee with a teapot.
  - Server errors (500–599)
    - 500 Internal Server Error
      - The server has encountered a situation it doesn't know how to handle.
    - 501 Not Implemented
      - The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.
    - 502 Bad Gateway
      - This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.
    - 503 Service Unavailable
      - The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This response should be used for temporary conditions and the Retry-After: HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.

### REST

#### Guiding Principles
  - Uniform Interface
    - By applying the [principle of generality](https://www.d.umn.edu/~gshute/softeng/principles.html) to the components interface, we can simplify the overall system architecture and improve the visibility of interactions.
    - The following four constraints can achieve a uniform REST interface:
      - **Identification of resources** – The interface must uniquely identify each resource involved in the interaction between the client and the server.
      - **Manipulation of resources through representations** – The resources should have uniform representations in the server response. API consumers should use these representations to modify the resources state in the server.
      - **Self-descriptive messages** – Each resource representation should carry enough information to describe how to process the message. It should also provide information of the additional actions that the client can perform on the resource.
      - **Hypermedia as the engine of application state** – The client should have only the initial URI of the application. The client application should dynamically drive all other resources and interactions with the use of hyperlinks.
  - Client-Server
    - The client-server design pattern enforces the separation of concerns, which helps the client and the server components evolve independently.
    - By separating the user interface concerns (client) from the data storage concerns (server), we improve the portability of the user interface across multiple platforms and improve scalability by simplifying the server components.
  - Stateless
    - Statelessness mandates that each request from the client to the server must contain all of the information necessary to understand and complete the request.
  - Cacheable
    - The cacheable constraint requires that a response should implicitly or explicitly label itself as cacheable or non-cacheable.
  - Layered System
    - The layered system style allows an architecture to be composed of hierarchical layers by constraining component behavior.
    - For example, in a layered system, each component cannot see beyond the immediate layer they are interacting with.
  - Code on Demand (Optional)
  
    - REST also allows client functionality to extend by downloading and executing code in the form of applets or scripts.
    - The downloaded code simplifies clients by reducing the number of features required to be pre-implemented. Servers can provide part of features delivered to the client in the form of code, and the client only needs to execute the code.
  
#### Richardson Maturity Model
  - Level 0 - Swamp of POX
    - The starting point for the model is using HTTP as a transport system for remote interactions, but without using any of the mechanisms of the web. 
    - For example, not using resource names or properly using HTTP Verbs.
      - POST /app       the body might contain information asking for (GET) specific data rather than posting it
  - Level 1 - Resources
    - The first step towards the Glory of Rest in the RMM is to introduce resources. So now rather than making all our requests to a singular service endpoint, we now start talking to individual resources.
      - POST /app/users         the body likely still might be requesting information rather than posting it but at least when know what resource we're looking for
  - Level 2 - HTTP Verbs
    - We've used POST requests in level 0 and 1, but level 2 moves away from this and leverages HTTP verbs as closely as possible to how they are used in HTTP itself
      - GET /app/users        now the body doesn't have to describe what type of operation the request is making
  - Level 3 - Hypermedia Controls (HATEOAS)
    - HATEOAS stands for Hypermedia as the Engine of Application State and essentially provides navigation tools for an API, similar to how links work on the frontend
      - GET /app/users        the response might contain some additional field relevant to the user, like any entities associated with them. Instead of returning the entities directly in the response, HATEOAS will provide a link to obtain the entity directly via its own endpoint
