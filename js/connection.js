var mysql = require('mysql');


var Connection = class Connection {
    constructor(host, userName, pwd, db) {
        this.connection =  mysql.createPool({
            connectionLimit : 100,
            waitForConnections : true,
            queueLimit :0,
            host: host,
            user: userName,
            password: pwd,
            database: db,
            wait_timeout : 28800,
            connect_timeout :10
          });

          this.connection.on('error', function (err) {
            console.log(err);
          });

          this.connection.on('disconnected', function (err) {
            console.log(err);
            this.connection.connect(function (err) {
                if (err) {
        
                  console.log(err);
                  //callback(0);
        
                }
            
          });
        });
    }

    EndConnection(){
        this.connection.end();
        return;
    }
 

    ExecuteQuery(query, ReturnFunction) {
        this.connection.query(query, function (error, results, fields) {
            ReturnFunction(error, results, fields);
        });

    }

  
      

}

module.exports.Connection = Connection;