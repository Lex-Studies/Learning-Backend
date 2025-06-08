// Reference Articles
// https://expressjs.com/en/starter/basic-routing.html
// https://en.wikipedia.org/wiki/HTTP#Request_methods
// https://expressjs.com/en/guide/routing.html


import express from 'express';

const app = express();

const port = 3000;

// Routing refers to how an application’s endpoints (URIs) respond to client requests. 
// app.METHOD(PATH, HANDLER)
/*
Where:

-    app is an instance of express.
-    METHOD is an HTTP request method, in lowercase i.e. get, post, put, delete.
-    PATH is a path on the server.
-    HANDLER is the function executed when the route is matched. A callback function called when the application receives a request to the specified route (endpoint) and HTTP method..
*/

/*
**********************************
*                                *
*  Route paths based on strings  *
*                                *
**********************************
*/

// GET method Route

// This route path will match requests to the root route, /.
app.get('/', (req, res) => {
    res.send('Hello World!')
});

// This route path will match requests to /about.
app.get('/about', (req, res) => {
    res.send('About Page');
});

// This route path will match requests to /random.text.
app.get('/string.txt', (req, res) => {
    res.send('This is not a text file. It\'s just a route name. It\'s jsut string');
});


//⚠️ Caution
// The string patterns in Express 5 no longer work. Please refer to the migration guide for more information.
// Below code will not work
// app.get('/ab+cd', (req, res) => {
//   res.send('ab+cd')
// })

// Route paths based on regular expressions

//This route path will match anything with an “a” in it.
// app.get(/a/, (req, res) => {
//   res.send(`Url is: ${req.url}`); //req.url retuns the url
// });


/*
**********************************
*                                *
*       Route parameters         *
*                                *
**********************************
*/

// Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.
/*
    Route path: /users/:userId/books/:bookId
    Request URL: http://localhost:3000/users/34/books/8989
    req.params: { "userId": "34", "bookId": "8989" }
*/

// The name of route parameters must be made up of “word characters” ([A-Za-z0-9_]).
app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params);
    //   res.send(`User ID: ${req.params.userId}, Book ID:  ${req.params.bookId}`);
});

//⚠️ Caution
// In express 5, Regexp characters are not supported in route paths, for more information please refer to the migration guide.
// https://expressjs.com/en/guide/migrating-5.html#path-syntax

app.get(`/:userID`, (req, res) => {
    res.send(req.params);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});