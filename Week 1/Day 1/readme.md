# Day 1: Project Setup + Routing Fundamentals

## Importing Express.js
- Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. 
```javascript
import express from 'express';

const app = express();
```
- `express()` creates express instace.

<br>

---

## REST API 
- GET: method is used to read (or retrieve) a representation of a resource. In the safe path, GET returns a representation in XML or JSON and an HTTP response code of 200 (OK). In an error case, it most often returns a 404 (NOT FOUND) or 400 (BAD REQUEST). 
- POST:  commonly used to create new resources. It is often used to create subordinate resources related to a parent resource. Upon successful creation, the server returns HTTP status 201 (Created) along with a Location header pointing to the newly created resource.
- PUT: method used to update or create a resource on the server. When using PUT, the entire resource is sent in the request body, and it replaces the current resource at the specified URL. If the resource doesn’t exist, it can create a new one.
- PATCH : method used to partially update a resource on the server. Unlike PUT, PATCH only requires the fields that need to be updated to be sent in the request body. It modifies specific parts of the resource rather than replacing the entire resource.
- DELETE:It is used to delete a resource identified by a URI. On successful deletion, return HTTP status 200 (OK) along with a response body.

## PUT vs PATCH

|PUT|PATCH|
|----|----|
|Replaces the entire resource|Updates only specified fields|
|Must send full data|Only sends changes|
|Idempotent|Not always idempotent|
|Example: Updating a user’s entire profile|Example: Changing just a user’s email|

<br>

---

## Creating a basic server

```Javascript
import express from 'express';

const app = express();

const port = 3000;

app.get('/', (req, res)=>{
    res.send("Hello World");
});

// app.listen(portNumber, callback);
// Initialize the sever
app.listen(port, ()=>{
    console.log(`Sever is live on ${port}`);
});
```
<br>

---

## Routing
### Routing Methods

```Javascript
app.METHOD(PATH, HANDLER)
```

- app is an instance of express.
- METHOD is an HTTP request method, in lowercase.
- PATH is a path on the server.
- HANDLER is the function executed when the route is matched.

The following examples illustrate defining simple routes.

Respond with Hello World! on the homepage:
```Javascript
app.get('/', (req, res) => {
  res.send('Hello World!');
});
```

Respond to POST request on the root route (/), the application’s home page:

```Javascript
app.post('/', (req, res) => {
  res.send('Got a POST request');
});
```

Respond to a PUT request to the /user route:

```Javascript
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user');
});
```

Respond to a DELETE request to the /user route:

```Javascript
app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user');
});
```

<br>

### Route paths

>⚠️Caution
<br>
>In express 5, the characters ?, +, *, [], and () are handled differently than in version 4, please review the [migration guide](https://expressjs.com/en/guide/migrating-5.html#path-syntax) for more information.
<br>
> The string patterns in Express 5 no longer work. Please refer to the [migration guide](https://expressjs.com/en/guide/migrating-5.html#path-syntax) for more information.

>‼️Warning
<br>
> Query strings are not part of the route path.

#### 1. Route paths based on strings
This route path will match requests to the root route, /.

```Javascript
app.get('/', (req, res) => {
  res.send('root');
});
```

This route path will match requests to /about.

```Javascript
app.get('/about', (req, res) => {
  res.send('about');
});
```

This route path will match requests to /random.text.

```Javascript
app.get('/random.text', (req, res) => {
  res.send('random.text');
});
```
#### 2. Route paths based on regular expressions
This route path will match anything with an “a” in it.
```Javascript
app.get(/a/, (req, res) => {
  res.send('/a/');
});
```

This route path will match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on.

```Javascript
app.get(/.*fly$/, (req, res) => {
  res.send('/.*fly$/');
});
```
### Route parameters
<br>

>⚠️Caution
<br>
>In express 5, Regexp characters are not supported in route paths, for more information please refer to the [migration guide](https://expressjs.com/en/guide/migrating-5.html#path-syntax).

- Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object
<br>

```
Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }
```
```javascript
app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params);
});
```