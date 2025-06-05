import React, { useContext } from "react";
import { Context } from "../contexts/Context"; // 경로 주의!

const BlogInfo = () => {
  const { isDarkMode } = useContext(Context);

  return (
    <section
      style={{
        margin: "2rem auto",
        padding: "1rem",
        borderRadius: "8px",
        maxWidth: "600px",
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        background: isDarkMode ? "#222" : "#f5f5f5", // 다크모드 대응
        color: isDarkMode ? "#fafafa" : "#222",
        transition: "background 0.2s, color 0.2s"
      }}
    >
      <h1>Hello, I'm yeseul</h1>
      <p>블록체인 개발 공부 및 기록을 남기는 공간입니다.</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><strong>✉️:</strong> heoyeseul1031@gmail.com</li>
        <li>
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/yeseul1031" target="_blank" rel="noopener noreferrer">
            yeseul1031
          </a>
        </li>
      </ul>
    </section>
  );
};

export default BlogInfo;
