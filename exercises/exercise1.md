#Exercise 1. Build a Basic Node.js/ Express.js Server with Multiple Routes. 

Hint: In this directory, touch a file called `server.js`, and `npm init`. Follow with `npm install express --save`.


##Your server should fulfill the following criteria:
1. **ALL** JavaScript files **must** `'use strict'` mode
1. Use the following packages:
    1. `morgan` for debugging ('dev' mode is sufficient)
    1. `path` for convenience later.
1. Your server's port number should NOT be fixed; a user should be able to set the port number when they start up the server, or the environment will provide this for them (_we should default to 3009 if nothing is provided_). 
1. Your server should `console.log` some diagnostic information when it's started.
1. It should support the following routes:
    1. `/`: to show a homepage.
    1. `/tasks`: to create a task or list tasks (depending on the HTTP verb used [see [wiki link](https://en.wikipedia.org/wiki/Representational_state_transfer)]).
    1. `/tasks/:id`: to view/edit/delete ONE task.
    1. `/tasks/:id/edit`: to view the 'edit task' form.

1. All of the above routes (for now) should serve some string to the user indicating that the correct route was successfully accessed, HTTP verb used, and served. 
1. Use [Postman](http://www.getpostman.com/) to verify that all of your routes are functioning properly.
1. Your application should support 4 HTTP verbs: `POST`,`GET`,`PUT`,`DELETE` to represent the 4 CRUD actions, respectively. 

BONUS:
1. Add a favicon! (_you will be fired if it's a pokemon_)
