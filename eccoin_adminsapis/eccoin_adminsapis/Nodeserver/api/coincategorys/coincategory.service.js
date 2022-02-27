const pool = require("../../config/database");

module.exports = {
    create: (data, callback) => {
        pool.query(
            `insert into coincategory (categoryname,categoryabb) 
values (?,?)`,
            [
                data.categoryname,
                data.categoryabb,

            ],
            (error, results, fields) => {
                if (error)
                    return callback(error);
                return callback(null, results);
            }

        );

    },
    getCoinCategorys: callback => {
        pool.query(
            `select categoryid, categoryname,categoryabb from coincategory`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    getCategoryById: (categoryid, callback) => {
        pool.query(
            `select categoryid, categoryname,categoryabb from coincategory where categoryid = ?`,
            [categoryid],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results[0]);
            }
        );
    },
    updateCategory: (data, callback) => {
        pool.query(
            `update coincategory set categoryname = ? ,categoryabb = ?  where categoryid = ?`,
            [
                data.categoryname,
                data.categoryabb,
                data.categoryid
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    deleteCategory: (data, callback) => {
        pool.query(
            `update coincategory set isactive=1 where categoryid = ?`,
            [data.categoryid],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results[0]);
            }

        );
    },


};