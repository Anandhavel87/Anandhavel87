const pool = require("../../config/database");

module.exports = {
    create: (data, callback) => {
        pool.query(
            `insert into coindetails (coincategoryid,coinrate) 
values (?,?)`,
            [
                data.coincategoryid,
                data.coinrate,

            ],
            (error, results, fields) => {
                if (error)
                    return callback(error);
                return callback(null, results);
            }

        );

    },
    getCoins: callback => {
        pool.query(
            `select coincategoryid, coinrate from coindetails`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    getcoinsByCategory: (categoryid, callback) => {
        pool.query(
            `select coincategoryid, coinrate from coindetails where coincategoryid = ?`,
            [categoryid],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results[0]);
            }
        );
    },
    updateCoin: (data, callback) => {
        pool.query(
            `update coindetails set coinrate = ?   where coincategoryid = ?`,
            [
                data.coinrate,
                data.coincategoryid,
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },



};