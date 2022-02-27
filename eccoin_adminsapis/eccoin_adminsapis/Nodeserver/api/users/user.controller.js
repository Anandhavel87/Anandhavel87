const { create,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    getUserByEmail
} = require("./user.service");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { restart } = require("nodemon");
const res = require("express/lib/response");
const { json } = require("express/lib/response");

module.exports = {
    createuser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Db Connection failed"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });

        });
    },
    getUserById: (req, res) => {
        const id = req.params.id;
        getUserById(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "No Records"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getUsers: (req, res) => {
        getUsers((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (results) {
                return res.json({
                    success: 1,
                    data: results
                });
            }
        });
    },
    updateUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        updateUser(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return json({
                    success: 0,
                    message: "Failed to update"
                })
            }
            return res.json({
                success: 1,
                message: "updated successfully"
            })
        });

    },
    deleteUser: (req, res) => {
        const data = req.data;
        deleteUser(data, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "No Data"
                });
                return res.json({
                    success: 1,
                    message: "user deleted successfully"
                });
            }
        });
    },
    login: (req, res) => {
        const body = req.body;
        getUserByEmail(body.email, (err, results) => {
            if (err) {
                console.log(err);
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Invalid email or password"
                });
            }
            const result = compareSync(body.password, results.password);
            if (result) {
                result.password = undefined;
                const jsontoken = sign({ result: results }, process.env.SECRET_KEY, {
                    expiresIn: "1h"
                });
                return res.json({
                    success: 1,
                    message: "Login Successfully",
                    token: jsontoken
                });
            }
            else {
                return res.json({
                    success: 0,
                    data: "Invalid email or password"
                });
            }
        });

    }

};