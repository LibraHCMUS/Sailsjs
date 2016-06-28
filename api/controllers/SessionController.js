/**
 * productController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    'new': function(req, res) {
    	var oldDateObj = new Date();
    	var newDateObj = new Date(oldDateObj.getTime() + 60000);
    	req.session.cookie.exprires = newDateObj;
    	req.session.authenticated = true;
        res.view('session/new');
    }
};

