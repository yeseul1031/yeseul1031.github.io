const express = require("express");
const cors = require("cors");
const Parser = require("rss-parser");
const app = express();
const parser = new Parser();

app.use(cors());

app.get("/naver-rss", async (req, res) => {
  try {
    const feed = await parser.parseURL("https://blog.rss.naver.com/hysing.xml");
    res.json(feed);
  } catch (e) {
    res.status(500).json({ error: "RSS fetch failed" });
  }
});

app.listen(4000, () => {
  console.log("Proxy server running on http://localhost:4000");
});
