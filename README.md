# eCommerceCart

This is created for a coding challenge. Nothing complicated here!

### Latest Update
Requirements given TODO:
* Remove Session Storage and add SQL support - Done
* Make Discounts Configurable - Done
* Seperate functions into its own class - Done
* Test case for discount - Basic done (No SQL support)

Added NODE_ENV development/Release support. This is done using dotenv.
Default is development build. This is debug mode. Made debug as default because we need to setup mysql server before running this. If you don't want to setup mysql, by default it will take fixed discount values instead of taking from DB.

### Prerequisites

We need node and npm installed before starting this.

Then we need to setup mysql server and create a database called 'ecommercecart' and in it, we need to create a table named 'products'.
products table must have fields 'item'(varchar(50)), 'price'(int), 'count'(int) and 'discount'(int).

If the database is setup and configured as above, then open '.env' file and change NODE_ENV to release.
```
NODE_ENV=release
```

### Installing

Download the whole package and run

```
npm install
node index.js
```
To run it in the browser..

```
http://localhost:4050/test/
```

## Running the tests

```
npm install mocha -g
mocha test/test.js
```

## Built With

* [Nodejs](https://nodejs.org/en/) - The web framework used
* [ejs](https://ejs.co/) - Javascript template used
* [mysql](https://www.npmjs.com/package/mysql) - MySQL used
