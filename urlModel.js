const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    longUrl: String,
    shortUrl: String
});

module.exports = mongoose.model("Url", urlSchema);

