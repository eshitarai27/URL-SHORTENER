const express = require("express");
const Url = require("./urlModel");
const shortid = require("shortid");

const router = express.Router();

router.post("/shorten", async (req, res) => {
    const { longUrl } = req.body;
    const shortUrl = shortid.generate();
    await Url.create({ longUrl, shortUrl });
    res.json({ shortUrl });
});

router.get("/:shortUrl", async (req, res) => {
    const url = await Url.findOne({ shortUrl: req.params.shortUrl });
    if (url) {
        res.redirect(url.longUrl);
    } else {
        res.status(404).send("URL not found");
    }
});

module.exports = router;
