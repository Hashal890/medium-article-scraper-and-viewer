const mongoose = require("mongoose");

const mongooseConnect = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then((res) => console.log("Connected to mongodb database."))
    .catch((err) => console.log(err));
};

module.exports = mongooseConnect;
