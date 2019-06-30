const mongooseValidator = require('mongoose-validator');

module.exports = mongooseValidator({
    validator: 'string',
    arguments: /^[A-Za-z]+$/,
    message: 'Only string are allowed'
});
