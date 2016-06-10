/**
 * productController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    'new': function (req, res) {
        res.locals.flash = _.clone(req.session.flash)
        res.view();
        req.session.flash = {};
    },

    create: function (req, res, next) {
        Product.create(req.params.all(), function productCreated(err, product) {
            if (err){
                console.log(err);
                req.session.flash = {
                    err: err
                }
                return res.redirect('/product/new');
            }
            res.redirect('/product/show/' + product.id);
            req.session.flash = {};
        });
    },
    
    show: function(req, res, next){
        Product.findOne(req.param('id'), function foundProduct(err, product){
            if(err) return next(err);
            if(!product) return next();
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
    },
    edit: function(req, res, next){
        Product.findOne(req.param('id'), function foundProduct(err, product){
            if(err) return next(err);
            if(!product) return next('product doesn\'t exist.');
            res.view({
                product: product
            });
        });
    },
    update: function (req, res, next) {
        Product.update(req.param('id'), req.params.all(), function productUpdated(err) {
            if (err){
                return res.redirect('product/edit/' + req.param('id'));
            } 
            res.redirect('product/show/' + req.param('id'));
        });
    },
    destroy: function(req, res, next) {

        Product.findOne(req.param('id'), function foundProduct(err, product){
            if(err) return next(err);

            if(!product) return next('product doesn\'t exist.');

            Product.destroy(req.param('id'), function productDestroyed(err) {
                if (err) return next(err);

            });

            res.redirect('/product');

        });
    }
};

