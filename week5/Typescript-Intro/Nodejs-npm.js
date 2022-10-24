/**
 * What is Node.js?
 * 
 * Node.js is an open source - cross-platform, Javascript runtime environment
 *  -runs on a JS Engine (V8 ) and executes JS code outside of the web browser
 * how ? - Node.js allows you to run JS on the server
 * 
 * Javascript engines are typically developed by web browser vendors
 *  - all major web browser has its own JS engine
 * 
 * - V8 js engine is Chromes JS engine
 * - Safari , Edge, etc have their own JS engines
 * 
 *  our JS engine is a core component of Node.js
 *  - Node.js runs on variousnplatforms (Windows, Linux, Unix, Mac OS X, etc)
 *  -Node.js has an event driven architeture thats capable of sing;e thread, non-blocking,
 *  asynchronous programming 
 * 
 * 
 * What can Node.js do ?
 *   - Node.js can generate dynamic page content
 *  - create, read, open, write to, delete, and close files on the server
 * - collect data (form data aka user input)
 * - add, delete, and modify data in the database
 * 
 * 
 * Popular companies that use Node.js
 * -GoDaddy
 * -Groupon
 * -IBM
 * -LinkedIn
 * Netflix
 * Paypal
 * Walmart
 * Amazon Web Services etc
 * 
 * 
 * 
 * What is npm? (Node Package Manager)
 * 
 * -npm is a package manage for the JS programming language
 * - also the default panckage manager for the JS runtime env Node.js
 * 
 * npm consists of 3 components
 *  -> website:
 *  -discovers packages / manages avvess to public or private packages
 * 
 * -> the CommandLine Interface (CLI) :
 *  - which runs from the terminal and allows us to interact with npm
 *  note: npm's commandline client is also called npm
 * 
 * -> the Registry"
 *  - an online database of public and paid-for private JS packages comprised 
 * of software and metadata
 * 
 * 
 * The Package.json file -
 *   All npm packages contain a file, usually in the project root, called 'package.json'
 *  This file is used to gove info to the npm that allows it to identify the project as 
 * well as handle the projects dependecies. thos file contains metadata relevant to the project, 
 * such as the project description, the verion, license info etc
 * 
 * Node.js generates a package.json file by running the 'npm init' command in the command line in terminal
 * 
 * the package.json file is written in key/value pairs
 * 
 * {"name":"",
 * "version":0.0,
 * "description":"",
 * "main"(entry point):"",
 * etc
 *
 * 
 * }
 * 
 * 
 * Why did we even have to go through all of that ???
 * 
 * Welll... we willl be transitioning from our Vanilla UI that uses different html pages
 * that we have to nagivate to (ie window.location.replace()).. to using Single Page Applications
 * (SPA's) - In order to do so the framework that we are using is Angular
 * 
 * Angular is written in Typescript!!
 * - we will writing out code in Typescript (ie in .ts files)
 * -however the web browser only understands Javascript 
 * 
 *      - we will need to convert out TS code into JS (also known as Transpiling)
 *           Node.js and our npm will perform this compilation for us.
 * 
 *  * 
 * *  */