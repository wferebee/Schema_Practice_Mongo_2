const EmployeeModel = require('../model/index.js');

module.exports = {
    list:  (req, res) => {
        EmployeeModel.find( (err, employee) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error while fetching employees',
                    error: err
                });
            }
            return res.json(employee);
        })
    },
    show: (req, res) => {
        let employeeName = req.params.firstname;

        EmployeeModel.find({
           first_name : employeeName
        }, function (err, employee) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting employee.',
                    error: err
                });
            }

            if (!employee) {
                return res.status(404).json({
                    message: 'No such employee'
                });
            }

            return res.json(employee);
        });
    },
    create: function (req, res) {
        let employee = new EmployeeModel({
           first_name: req.body.first_name,
           last_name: req.body.last_name,
            password: req.body.password,
            position: req.body.position,
            years_exp: req.body.years_exp,
            age: req.body.age,
            email: req.body.email,
            
        });

        employee.save(function (err, employee) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating employee',
                    error: err
                });
            }

            return res.status(201).json(employee);
        });
    }
}