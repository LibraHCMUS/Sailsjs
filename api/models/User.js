/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    // The user's full name
    // e.g. Nikola Tesla
    name: {
      type: 'string',
      required: true
    },

    // The user's email address
    // e.g. nikola@tesla.com
    email: {
      type: 'email',
      required: true,
      unique: true
    },

    // The encrypted password for the user
    // e.g. asdgh8a249321e9dhgaslcbqn2913051#T(@GHASDGA
    encryptedPassword: {
      type: 'string',
      required: true
    }
  }
};
