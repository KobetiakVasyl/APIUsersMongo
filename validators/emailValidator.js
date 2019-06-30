const mongooseValidator = require('mongoose-validator');

module.exports = mongooseValidator({
    validator: 'email',
    arguments: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
    message: 'Field email is incorrect'
});
