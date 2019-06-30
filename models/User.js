const mongoose = require('mongoose');
const emailValidator = require('../validators/emailValidator');
const stringValidator = require('../validators/stringValidator');
const phoneNumberValidator = require('../validators/phoneNumberValidator');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        validate: stringValidator
    },
    last_name: {
        type: String,
        validate: stringValidator
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: emailValidator
    },
    phone: {
        type: Number,
        validate: phoneNumberValidator
    },
    password:{}
});
module.exports = UserSchema;
