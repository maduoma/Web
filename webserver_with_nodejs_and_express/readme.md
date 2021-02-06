# 7 Steps to creating a Simple Web Server built with Node.js and Express which will serve up and HTML page, which will be accessible by other people.

1. Step 1: Create an create an empty folder for the project, say "webserver_with_nodejs_and_express"
2. Step 2: Initialise the project
3. Step 3: Add Express like npm install packageName e.g npm istall express
4. Step 4: Create Express Server on the terminal e.g touch index.js, open the file, and write the following lines
5. Step 5: Create routes - In the simplest terms, a route represents an endpoint which people can access. A route is associated with an HTTP verb (e.g. GET, POST, and so on), and it takes a URL path. It also takes a function which is called when the endpoint is accessed.
6. Set up a listener for the server to work. You need to set a specific port for the application

# Serving Static Assets such as HTML, CSS, JavaScript, Images

1. Step 1: Import the path module into your application. The path comes by default with Node.js - The path module allows us to generate absolute paths, which you need to serve static assets.
2. Step 2: Create public folder and add assets
3. Step 3: Serve the HTML File - Since you are not using any template engine (e.g., Pug, EJS, and so on), you cannot use the render method.

# console.log(path.join(\_\_dirname, 'public'));

# Note

## Routes: In the simplest terms, a route represents an endpoint which users can access. A route is associated with an HTTP verb (e.g. GET, POST, etc), and it takes a URL path. It also takes a function which is called when the endpoint is accessed like:

---

app.get('/', (req, res) => {
res.send({ message: 'Hello Route!' });
});

A Routes is associted with:

1. an HTTP verb — in this case, it’s the GET verb.
2. It takes a URL path — in this case, it’s the homepage (/).
3. It takes a function which will be called when you access the endpoint.
   Therefore, when a user makes a GET request to your homepage, localhost:3333, the arrow function is called and will display "Hello Route!"

## Returning result of an operation

> Java

```java
int getScore(int value) {
    // logic here
    return 2 * value;
}
```

### License

```
   Copyright (C) 2021 DODEMY TECHNOLOGY LIMITED

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
```

### A Simple Web Server built with Node.js and Express
