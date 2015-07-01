# Learning ExpressJS with MongoDB and AngularJS.

Made while reading the tutorial at http://cwbuecheler.com/web/tutorials/2014/restful-web-app-node-express-mongodb/ with slight modifications, instead of usign `jQuery` I used `AngularJS` simply because I'm used to it more.

I've also included Bootstrap also because it's quicker for me to build on top of it.

# Setting up
* Clone the repo.
* `bower install && npm install`.
* Create a `_data` directory for the MongoDB database to live `mkdir _data && cd $_`
* Run MongoDB daemon `mongod --dbpath .`
* `npm start` to serve, web app then can be accessed at `http://localhost:3000/`
