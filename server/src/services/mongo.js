const mongoose = require("mongoose");
const { secretConfig } = require("../secretConfig");

mongoose.connection.once("open", () => {
    console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
    console.error(err);
});

async function mongoConnect() {
    mongoose.connect(secretConfig.MONGO_URL);
}

module.exports = {
    mongoConnect,
};