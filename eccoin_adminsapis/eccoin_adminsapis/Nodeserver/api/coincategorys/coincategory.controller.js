const { create,
    getCoinCategorys,
    getCategoryById,
    updateCategory,
    deleteCategory

} = require("./coincategory.service");

const res = require("express/lib/response");
const { json } = require("express/lib/response");

module.exports = {
    createcategory: (req, res) => {
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
    getCategoryById: (req, res) => {
        const id = req.params.id;
        getCategoryById(id, (err, results) => {
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
    getCoinCategorys: (req, res) => {
        getCoinCategorys((err, results) => {
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
    updateCategory: (req, res) => {
        const body = req.body;
        updateCategory(body, (err, results) => {
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
    deleteCategory: (req, res) => {
        const data = req.data;
        deleteCategory(data, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "No Data"
                });

            }
            else {
                return res.json({
                    success: 1,
                    message: "category deleted successfully"
                });
            }
        });
    }


};