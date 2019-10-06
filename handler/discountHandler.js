let util = require('../js/util.js');
module.exports = {

    HandleDiscount: function(data, callback){

        if(data.method == "GET")
        {
            module.exports.ShowDiscount(data, callback);
        }
        else
        {
            let cart = data.req.body.data;
            for (var item in cart) {
              let updateQuery = `UPDATE products SET price=${cart[item].price}, count=${cart[item].count}, discount=${cart[item].discount} WHERE item="${cart[item].name}"`;
              //console.log(updateQuery);
              data.connection.ExecuteQuery(updateQuery, function (_error, _result, _fields) {
              });
            }
            data.res.sendStatus(200);
        }
    },

    ShowDiscount: function (data, callback) {
        let GetQuery = 'SELECT item, discount, price, `count` FROM products';
        data.connection.ExecuteQuery(GetQuery, function (error, result, _fields) {

            let discounts = {};
            let results = []
            /////////////////////////////////////

            if (data.debug) {
                //if (error) throw error;
                results = util.GetDebugTableData();
            }
            else {
                if (error) throw error;
                results = result;
            }
            ///////////////////////////////////////////
            if (results.length > 0) {
                for (let index = 0; index < results.length; index++) {
                    //console.log(results[index].item); 


                    discounts[results[index].item] = {};
                    discounts[results[index].item].discount = results[index].discount;
                    discounts[results[index].item].count = results[index].count;
                    discounts[results[index].item].price = results[index].price;
                    //console.log(name);
                }
                data.res.render('pages/discountindex', { 'discounts': JSON.stringify(discounts) });
                callback(200);
            }
        });

    }
};