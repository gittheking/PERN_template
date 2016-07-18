#2. Exercise 2

## Let's do this.
Your server.js currently contains more stuff than it should. Let's move anything related to the tasks into its own router. 

1. Create a folder called `routes` to hold all of our routes. 
1. Inside `routes`, touch a file called `tasks.js`
1. Again, require express and create a `Router()`
1. Move all of the task routes into this file (_remember to use module.exports!_).
1. From server.js, `app.use` this new file, referencing it as `/tasks` 

Your application should now run exactly as it did in step #1. If it doesn't, **stop here and fix it**.

As of now, we've only tested our routes to see if they function properly. Now, let's make it do something. _Your server should NOT be serving any HTML, only json_

##Get some data
Since we're only building an API and NOT serving/receiving HTML, we'll only need `body-parser` to read the json sent to us.

1. `npm install body-parser --save`
1. Inside `server.js`, require `body-parser`.
1. Add the following block to activate it:

```javascript
// parse incoming json
app.use( bodyParser.json()); 

```

## Use This Data
Inside `tasks.js`, initialize a new array called `taskData`. This will be our (semi-)persistent storage while we're developing. _**Note**: this data will be destroyed each time the server is restarted— we'll fix that in exercise 4._

###Create
1. Update your routes such that a `POST` to `/tasks` takes some data and pushes it into `taskData`
    1. Use Postman's POST:body feature to create a data body to post to the server.


###Read
1. `GET`: `/tasks` should show the entire array of tasks.
1. `GET`: `/tasks/:id` should show a single task at that position. 
    1. Trying to access a task's ID that doesn't exist should return a 404 and nothing else. 

###Update
1. `PUT` should ONLY be allowed on a single taskID. This should update the task at that position, or throw a 404 if the number is invalid. 


###Delete
1. `DELETE` should delete a single task when issued on `/tasks/:id`. If a task isn't found to delete, fail silently
