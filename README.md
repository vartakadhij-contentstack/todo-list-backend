# todo-list-backend

This is a repositiory for the todo-list-backend (using local database).

It contains all the API end points for:
1. Get all tasks
2. Create a task
3. Get a task by id
4. Update the status of a task (from "Not Started" to "Complete")
5. Delete a task

Make sure that you set up a local database, using **MongoDB**, before running this application.

You can also install **MongoDB Compass** (GUI for MongoDB) to monitor your database.

Once you are done with that, create a new collection with any name.
In the config.env file, update the **DATABASE_URL** value with the url of your mongodb database.

# Run the application

To run the application, use ```npm run dev``` command. Make sure that you have Nodemon installed on your system.

If not, simply run ```node app.js``` command. 

# API End points

# 1. Get all tasks

For this, simply use the ```/todolist/tasks``` end point with a GET request.

# 2. Create a task

For this, use the ```/todolist/tasks``` end point with a POST request.
Make sure that you provide the 'taskName' in the request Body for a valid request.

# 3. Get a task by id

For this, use the ```/todolist/:taskId``` end point with a GET request.
Provide a valid taskId value (taskId of an existing task) in the Params for a valid request.

# 4. Update the status of a task (from "Not Started" to "Complete")

For this, use the ```/todolist/:taskId``` end point with a PATCH request.
Provide a valid taskId value (taskId of an existing task) in the Params for a valid request.

# 5. Delete a task

For this, use the ```/todolist/:taskId``` end point with a DELETE request.
Provide a valid taskId value (taskId of an existing task) in the Params for a valid request.

All the above requests should be made using the **Postman** application.
