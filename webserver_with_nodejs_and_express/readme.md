# A Simple Web Server Built With Node.js And Express

> > Please note that in this application, the server code resides in app.js.

> 7 Steps to creating a Simple Web Server with Node.js and Express which will serve up a HTML page, which will be accessible by users or visitors of the page.

```
1. Create an create an empty folder for the project, e.g, mkdir webserver_with_nodejs_and_express
2. Initialise the project, e.g, npm init -y
3. Add Express like npm install packageName, e.g, npm istall express
4. Create Express Server file with dot js notation on the terminal, e.g, touch index.js, open the file, and write down the server codes.
5. Create routes - In the simplest terms, a route represents an endpoint which users can access. A route is associated with an HTTP verb (e.g. GET, POST, and so on), and it takes a URL path. It also takes a function which is called when the endpoint is accessed.
6. Set up a listener for the server to work. You need to set a specific port for the application, e.g, 8080
7. You're ready, run: node index.js and navigate to the page: http://localhost:8080 which in this case is a home page denoted by /. You can now build up your project from this basis to make it more robust as shown a little bit more below.
```

> Serving Static Assets such as HTML, CSS, JavaScript, Images

```
1. Import the path module into your application. The path comes by default with Node.js - The path module allows us to generate absolute paths, which you need to serve static assets.
2. Create public folder and add assets
3. Serve the HTML File - Since you are not using any template engine (e.g., Pug, EJS, etc), you cannot use the render method.
```

> Note

```
A Route: In the simplest terms, a route represents an endpoint which users can access. A route is associated with an HTTP verb (e.g. GET, POST, etc), and it takes a URL path. It also takes a function which is called when the endpoint is accessed as shown below:
```

> A Route:

```
app.get('/', (req, res) => {
res.send({ message: 'Hello Route!' });
});
```

> > Or Serving the HTML File // Serving Static Assets such as HTML, CSS, JavaScript, Images

```
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});
```

> A Route is associted with:

```
1. an HTTP verb — in this case, it’s the GET verb.
2. It takes a URL path — in this case, it’s the homepage (/).
3. It takes a function which will be called when you access the endpoint.
Therefore, when a user makes a GET request to your homepage, localhost:8080, the arrow function is called and will display "Hello Route!"
```

#### License

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

#### A Simple Web Server Built With Node.js And Express
