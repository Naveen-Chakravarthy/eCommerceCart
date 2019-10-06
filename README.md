# eCommerceCart

This is created for a coding challenge. Nothing complicated here!

### Latest Update
Requirements given TODO:
* Remove Session Storage and add SQL support - Done
* Make Discounts Configurable - Done
* Seperate functions into its own class - Done
* Test case for discount - Basic done (No SQL support)

Added NODE_ENV development/Release support. This is done using dotenv.
Default is Release build. Have to setup mysql server before running this.
If you don't want to setup mysql, create a file named '.env' and put the following lines in it.
```
NODE_ENV=development
```
This will run in debug mode. It will take default discount values instead of DB, and parse. So it will also not update to DB.

### Prerequisites

We need node and npm installed before starting this.

Then we need to setup mysql server and create a database called 'ecommercecart' and in it, we need to create a table named 'products'.
products table must have fields 'item'(varchar(50)), 'price'(int), 'count'(int) and 'discount'(int).

If the database is not setup and configured as above, then open '.env' file and change NODE_ENV to development.
```
NODE_ENV=development
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
mocha test/test.js OR npm test
```

## Built With

* [Nodejs](https://nodejs.org/en/) - The web framework used
* [ejs](https://ejs.co/) - Javascript template used
* [mysql](https://www.npmjs.com/package/mysql) - MySQL used
