const mongooseValidator = require('mongoose-validator');

module.exports = mongooseValidator({
    validator: 'Phone number',
    arguments: /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/,
    message: 'Phone number is incorrect'
});
