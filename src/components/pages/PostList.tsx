import { useState, useEffect } from "react";

interface RssItem {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet?: string;
}

const PostList = () => {
  const [naverPosts, setNaverPosts] = useState<RssItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNaverPosts = async () => {
      try {
        const response = await fetch("http://localhost:4000/naver-rss");
        if (!response.ok) throw new Error("네이버 블로그 글을 불러오지 못했습니다.");
        const data = await response.json();
        setNaverPosts(data.items.slice(0, 10)); // 최근 10개만 표시
      } catch (err) {
        setError(err instanceof Error ? err.message : "알 수 없는 오류");
      } finally {
        setIsLoading(false);
      }
    };
    fetchNaverPosts();
  }, []);

  if (isLoading) return <div>불러오는 중...</div>;
  if (error) return <div>오류: {error}</div>;

  return (
    <div className="naver-post-list">
      <h2 style={{ margin: "2rem 0 1rem" }}>📚 네이버 블로그 최근 글</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {naverPosts.map((post, idx) => (
          <li key={idx} className="naver-post-item" style={{
            marginBottom: "1.5rem",
            padding: "1rem",
            background: "#f9f9f9",
            borderRadius: "8px"
          }}>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#222" }}
            >
              <div style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                {post.title} <span style={{ fontSize: "0.9rem", color: "#03c75a" }}>🔗</span>
              </div>
              <div style={{ fontSize: "0.9rem", color: "#888" }}>{post.pubDate}</div>
              {post.contentSnippet && (
                <div style={{ marginTop: "0.5rem", color: "#444" }}>{post.contentSnippet}</div>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
