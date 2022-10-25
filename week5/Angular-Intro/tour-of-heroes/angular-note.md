# Angular Notes -

    The purpose of this Demo - is to show you how to:
        - Set up pyr local Angular Development env
        - Use the Angular CLI to develop an application


## What is Angular?

Angular is a TS based open source framework used to develop dynamic webpages

Angular is a Single Page Application (SPA) framework. An SPA is a web application thta fits on one single page. All of our code (JS,HTML,CSS) is retrieved with a single page load. Navigation between pages is performed wthout the refrshing the browser.

Angular is commonly referred to as Angular2 (or any of the updated verisons 4,5,6), to distance the moder framework from the orignal AngularJS

AngularJS is a JS based open source frontend web framework. It doesnt support the features of a server-side prgramming language, nor dynamic loading of a webpage.

Angualur2+ is a complete rewrite of Angular JS. AngularJSwas comletely based on controllers and scopes while Angular2+ uses component hierarchy as its maon architecture

Angular uses Typescript which has feature like
    -static typing
    -OOP based on classes
    -Support for reactive programming using RxJS
        (Reactive programming is an asynchronous programming paradigm concerned with data streams and the propagation of change. RxJS - Reactive Extensions for JS is a library for reactive programming using observables that makes t easier to compose asynchronous pr callback-based code). 


## Angular Building Blocks

    The main building blocks of Angular are modules, components, templates, metadata, data-binding, directives, services, and dependency injection.

    -Components: are the basic building blocks in the Angular application
        -they contain the data and the UI logic that defines the view and behavior of the application
        -  @Component : this is a special decorator that defines a component
        - each component will have a selector, template(html), stylesheet(css) and other properties

    -@NgModule : every angular application will have at least 1 module (root module (App Module)) 
        -NgModule takes the metadata from declarations, imports, providers, bootstrap (all defined in the module) and uses the data to launch the application

    -Directives : What is the difference between decorator and a directive 

         Directives change the appearance/behavior or layout of the DOM 
         Syntax: `*directivename="directives value or some logic"`

         There are 2 Directives :

        ~ Structural Directives: change the DOM layout by adding / removing elements

             There are 3 types of  Strutural Directives:
              - `*ngIf`, `*ngFor`, `*ngSwitch`

        ~ Attribute Directives :change the appearance or behavior of a partivular element,
        component, or another directive
            `*ngClass`, `*ngStyle`

Note: You can also build youre own directive as an attribute directive

    -Decorators :
        -These are similar in syntax and purpose to annotaions in Java. But they are not the same
        -Decorators will denote any given class, field, or module in Agular with config metatdata that the Angular framework will understand
        @Component, @NgModule, @Service

### The finished project
    -get a list of heroes
    -display the heros in the list
    -edit a heros detail
    -navigate between different view of the 'heroic' data

