/**
 * ProductController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    // 'new': function (req, res) {
    //     res.view();
    // },


    show: function (req, res, next) {
        Product.findOne(req.param('id'), function foundProduct(err, product) {
            if (err) return next(err);
            if (!product) return next(err);
            res.view({
                product: product
            });
        });
    },

    index: function(req, res, next) {
        Product.find(function foundProduct(err, product){
            if(err) return next(err);
            res.view({
                product: product
            });
        });
    }
};

