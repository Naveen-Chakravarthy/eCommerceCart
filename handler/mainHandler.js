

module.exports = {

    ShowMain: function (data, callback) {
        data.res.render('pages/index');
        callback(200);
    }
};