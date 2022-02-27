require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./api/users/user.router");
const coincategoryRouter = require("./api/coincategorys/coincategory.router");
const coinRouter = require("./api/coins/coin.router")
app.use(express.json());
app.use(cors());
app.use("/api/users", userRouter);
app.use("/api/coincategorys", coincategoryRouter);
app.use("/api/coins", coinRouter);




app.listen(process.env.APP_PORT, () => {
    console.log("server up and running on Port: " + process.env.APP_PORT);
});
