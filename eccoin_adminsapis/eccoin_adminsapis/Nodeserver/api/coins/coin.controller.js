const { create,
    getcoinsByCategory,
    getCoins,
    updateCoin

} = require("./coin.service");

const res = require("express/lib/response");
const { json } = require("express/lib/response");

module.exports = {
    createcoin: (req, res) => {
        const body = req.body;

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
    getcoinsByCategory: (req, res) => {
        const id = req.params.id;
        getcoinsByCategory(id, (err, results) => {
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
    getCoins: (req, res) => {
        getCoins((err, results) => {
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
    updateCoin: (req, res) => {
        const body = req.body;
        updateCoin(body, (err, results) => {
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



};