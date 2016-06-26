/**
 * productController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    index: function(req, res, next) {
        Product.find(function foundProduct(err, product){
            if(err) return next(err);
            res.view({
                product: product,
                layout: '_layoutAdmin'
            });
        });
    },


    /**product*/
    product: function(req, res, next) {
        Product.find(function foundProduct(err, product){
            if(err) return next(err);
            res.view({
                product: product,
                layout: '_layoutAdmin'
            });
        });
    },

    'new_p': function (req, res) {
        res.locals.flash = _.clone(req.session.flash)
        res.view({
                layout: '_layoutAdmin'
            });
        req.session.flash = {};
    },

    create_p: function (req, res, next) {
        Product.create(req.params.all(), function productCreated(err, product) {
            if (err){
                console.log(err);
                req.session.flash = {
                    err: err
                }
                return res.redirect('/admin/new_p');
            }
            res.redirect('/admin/show_p/' + product.id);
            req.session.flash = {};
        });
    },
    
    show_p: function(req, res, next){
        Product.findOne(req.param('id'), function foundProduct(err, product){
            if(err) return next(err);
            if(!product) return next();
            res.view({
                product: product
            });
        });
    },
    edit_p: function(req, res, next){
        Product.findOne(req.param('id'), function foundProduct(err, product){
            if(err) return next(err);
            if(!product) return next('product doesn\'t exist.');
            res.view({
                product: product,
                layout: '_layoutAdmin'
            });
        });
    },
    update_p: function (req, res, next) {
        Product.update(req.param('id'), req.params.all(), function productUpdated(err) {
            if (err){
                return res.redirect('admin/edit_p/' + req.param('id'));
            } 
            res.redirect('admin/show_p/' + req.param('id'));
        });
    },
    destroy_p: function(req, res, next) {

        Product.findOne(req.param('id'), function foundProduct(err, product){
            if(err) return next(err);

            if(!product) return next('product doesn\'t exist.');

            Product.destroy(req.param('id'), function productDestroyed(err) {
                if (err) return next(err);

            });

            res.redirect('admin/product');

        });
    },

    /**user*/
    user: function(req, res, next) {
        User.find(function foundUser(err, user){
            if(err) return next(err);
            res.view({
                user: user,
                layout: '_layoutAdmin'
            });
        });
    },

    'new_u': function (req, res) {
        res.locals.flash = _.clone(req.session.flash)
        res.view({
                layout: '_layoutAdmin'
            });
        req.session.flash = {};
    },

    create_u: function (req, res, next) {
        User.create(req.params.all(), function userCreated(err, user) {
            if (err){
                console.log(err);
                req.session.flash = {
                    err: err
                }
                return res.redirect('/admin/new_u');
            }
            res.redirect('/admin/show_u/' + user.id);
            req.session.flash = {};
        });
    },
    
    show_u: function(req, res, next){
        User.findOne(req.param('id'), function foundUser(err, user){
            if(err) return next(err);
            if(!user) return next();
            res.view({
                user: user,
                layout: '_layoutAdmin'
            });
        });
    },
    edit_u: function(req, res, next){
        User.findOne(req.param('id'), function foundUser(err, user){
            if(err) return next(err);
            if(!user) return next('User doesn\'t exist.');
            res.view({
                user: user,
                layout: '_layoutAdmin'
            });
        });
    },
    update_u: function (req, res, next) {
        User.update(req.param('id'), req.params.all(), function userUpdated(err) {
            if (err){
                return res.redirect('admin/edit_u/' + req.param('id'));
            } 
            res.redirect('admin/show_u/' + req.param('id'));
        });
    },
    destroy_u: function(req, res, next) {

        User.findOne(req.param('id'), function foundUser(err, user){
            if(err) return next(err);

            if(!user) return next('User doesn\'t exist.');

            User.destroy(req.param('id'), function userDestroyed(err) {
                if (err) return next(err);

            });

            res.redirect('/admin/user');

        });
    }
};

