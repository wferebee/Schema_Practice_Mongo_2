const mongoose = require("mongoose");

var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};


const EmployeeSchema = new mongoose.Schema({
    
    'first_name': {
        type: String,
        required: 'name is required',
        trim: true,
        minLength: 2,
        maxLength: 16
    },
    "last_name": {
       type: String,
        required: 'name is required',
        trim: true,
        minLength: 2,
        maxLength: 16
    },
    "password": {
       type: String,
        required: 'password is required',
        minLength: 8,
        maxLength: 16
    },


    'position': {
        type: String,
        required: 'position is required',
        lowercase: true,
        trim: true,
        minLength: 2,
        maxLength: 16
    },
    'years_exp': {
       type: Number,
        required: 'years_exp is required',
        trim: true,
        min: 0,
        max: 99

    },
    'age': {
       type: Number,
        required: 'age is required',
        trim: true,
        min: 0,
        max: 99

    },
    'email': {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        minLength: 7,
        maxLength: 30
    },
    timestamps: {
        type: Date,
    }
});

EmployeeSchema.virtual('fullName').get(function () {
    return this.name.first + ' ' + this.name.last;
});


var Employee = mongoose.model('employees', EmployeeSchema);

module.exports = Employee;