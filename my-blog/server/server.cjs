const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { parseString } = require("xml2js");

const app = express();
app.use(cors());

app.get("/naver-rss", async (req, res) => {
  try {
  
    const response = await axios.get("https://rss.blog.naver.com/hysing.xml");
    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    parseString(response.data, { explicitArray: false }, (err, result) => {
      if (err) {
        console.error("XML 파싱 실패:", err);
        return res.status(500).json({ error: "XML 파싱 실패" });
      }

      if (!result.rss || !result.rss.channel || !result.rss.channel.item) {
        return res.status(500).json({ error: "올바르지 않은 RSS 구조" });
      }

      const items = result.rss.channel.item;
      const posts = Array.isArray(items) ? items.slice(0, 10) : [items];
      res.json({ items: posts });
    });

  } catch (e) {
    console.error("⚠️ 서버 에러:", e.message);
    res.status(500).json({
      error: "RSS 요청 실패",
      details: e.message
    });
  }
});

app.listen(4000, () => {
  console.log("Proxy server running on http://localhost:4000");
});
