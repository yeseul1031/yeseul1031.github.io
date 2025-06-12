import { useState, useEffect } from "react";

interface RssItem {
  title: string;
  link: string;
  pubDate: string;
  description?: string;
}

const PostList = () => {
  const [posts, setPosts] = useState<RssItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/naver-rss"); 
        if (!res.ok) throw new Error("네이버 블로그 글을 불러오지 못했습니다.");
        const data = await res.json();
        setPosts(data.items || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "알 수 없는 오류");
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (isLoading) return <div>불러오는 중...</div>;
  if (error) return <div>오류: {error}</div>;

  return (
    <div>
      <h2>네이버 블로그 공부기록</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post, idx) => (
          <li key={idx} style={{ margin: "1rem 0" }}>
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              <strong>{post.title}</strong>
            </a>
            <div style={{ fontSize: "0.9rem", color: "#888" }}>{post.pubDate}</div>
            {post.description && (
              <div style={{ marginTop: "0.5rem", color: "#444" }}>
                {post.description.replace(/<[^>]+>/g, "").slice(0, 100)}...
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PostList;
