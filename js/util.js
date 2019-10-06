module.exports = {

    GetDebugTableData: function () {

        let results = [];
        results[0] = []
        results[0].item = 'A';
        results[0].discount = 15;
        results[0].price = 30;
        results[0].count = 3;
        results[1] = []
        results[1].item = 'B';
        results[1].discount = 5;
        results[1].count = 2;
        results[1].price = 10;
        results[2] = []
        results[2].item = 'C';
        results[2].discount = 0;
        results[2].count = 0;
        results[2].price = 15;
        results[3] = []
        results[3].item = 'D';
        results[3].discount = 0;
        results[3].count = 0;
        results[3].price = 50;
        return results;
    },

    GetDebugDefaultDiscount: function () {
        let results = [];
        results[0] = []
        results[0].item = 'A';
        results[0].discount = 15;
        results[0].count = 3;
        results[1] = []
        results[1].item = 'B';
        results[1].discount = 5;
        results[1].count = 2;
        return results;
    }

};