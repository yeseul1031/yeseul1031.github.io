// src/components/NaverBlogPreview.tsx
import React, { useEffect, useState } from "react";
import Parser from "rss-parser";

type RssItem = {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet?: string;
};

const NaverBlogPreview = () => {
  const [items, setItems] = useState<RssItem[]>([]);

  useEffect(() => {
    const fetchRSS = async () => {
      const parser = new Parser();
      const feed = await parser.parseURL("https://blog.rss.naver.com/hysing.xml");
      setItems(
        feed.items
          .slice(0, 10)
          .map((item) => ({
            title: item.title || "Untitled",
            link: item.link || "#",
            pubDate: item.pubDate || "Unknown date",
            contentSnippet: item.contentSnippet || "",
          }))
      ); 
    };
    fetchRSS();
  }, []);

  return (
    <div>
      <h2>네이버 블로그 최근 글</h2>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
            <div>{item.contentSnippet}</div>
            <div style={{ fontSize: "0.8em", color: "#888" }}>{item.pubDate}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NaverBlogPreview;
