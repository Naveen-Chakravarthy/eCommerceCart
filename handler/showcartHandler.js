let util = require('../js/util.js');
module.exports = {

    ShowCart: function (data, callback) {
        if (data.method == "GET") {
            data.res.render('pages/showcart');
            callback(200);
        }
        else {
            module.exports.ConfigureDiscounts(data, callback);

        }
    },

    ConfigureDiscounts: function (data, callback) {
        let GetQuery = 'SELECT item, discount, `count` FROM products WHERE discount > 0;';
        data.connection.ExecuteQuery(GetQuery, function (error, result, _fields) {

            let discounts = {};
            /////////////////////////////////////
            let results = []
            if (data.debug) {
                //if (error) throw error;
                results = util.GetDebugDefaultDiscount();
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
                    var cart = data.req.body.data;
                    //console.log(name);
                }
                data.res.render('pages/showcart', { 'cart': JSON.stringify(cart), 'discounts': JSON.stringify(discounts) });
                callback(200);
            }
        });

    }

};