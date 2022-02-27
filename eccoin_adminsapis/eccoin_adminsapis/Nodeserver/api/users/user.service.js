const pool = require("../../config/database");

module.exports = {
    create: (data, callback) => {
        pool.query(
            `insert into users (userName,firstName, lastName, gender, dateofBirth, mobileNumber,  email, password, roleid, sourceOfLanding) 
values (?,?,?,?,?,?,?,?,?,?)`,
            [
                data.username,
                data.firstname,
                data.lastname,
                data.gender,
                data.dateofbirth,
                data.mobilenumber,
                data.email,
                data.password,
                data.roleid,
                data.sourceoflanding,
            ],
            (error, results, fields) => {
                if (error)
                    return callback(error);
                return callback(null, results);
            }

        );

    },
    getUsers: callback => {
        pool.query(
            `select userid,username, firstname,lastname,gender,dateofbirth,mobilenumber,email,roleid,sourceoflanding,isVerified from users where isActive=0`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    getUserById: (userid, callback) => {
        pool.query(
            `select  userid,username, firstname,lastname,gender,dateofbirth,mobilenumber,email,roleid,sourceoflanding,isVerified from users where userid = ?`,
            [userid],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results[0]);
            }
        );
    },
    updateUser: (data, callback) => {
        pool.query(
            `update users set username = ? ,firstname = ? ,lastname = ? ,gender = ? ,dateofbirth = ? ,mobilenumber = ? ,email = ? ,password = ? ,roleid =?  where userid = ?`,
            [
                data.username,
                data.firstname,
                data.lastname,
                data.gender,
                data.dateofbirth,
                data.mobilenumber,
                data.email,
                data.password,
                data.roleid,
                data.userid
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    deleteUser: (data, callback) => {
        pool.query(
            `delete from users where userid = ?`,
            [data.userid],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results[0]);
            }

        );
    },
    getUserByEmail: (email, callback) => {
        pool.query(
            `select * from registration where email = ?`,
            [email],
            (error, results, fields) => {
                if (error) {
                    console.log(error);
                    return callback(error);
                }
                return callback(null, results[0]);
            }
        );
    }

};