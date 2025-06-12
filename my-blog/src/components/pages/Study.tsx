
import { useState, useEffect } from "react";

interface RssItem {
  title: string;
  link: string;
  pubDate: string;
  description?: string;
}

const Study = () => {
  const [posts, setPosts] = useState<RssItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        
        const rssUrl = 'https://rss.blog.naver.com/hysing.xml';
        const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
        
        console.log('요청 URL:', apiUrl);
        const res = await fetch(apiUrl);
        const data = await res.json();
        
        console.log('RSS2JSON 응답:', data);
        
        if (data.status !== 'ok') {
          throw new Error(`RSS2JSON 오류: ${data.message}`);
        }
        
        // 모든 글 표시 (필터링 제거)
        setPosts(data.items || []);
        
      } catch (err) {
        console.error('RSS 로드 실패:', err);
        setError(err instanceof Error ? err.message : "RSS 로드 실패");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchPosts();
  }, []);

  if (isLoading) return <div>📚 블로그 글 불러오는 중...</div>;
  if (error) return <div>❌ 오류: {error}</div>;

  return (
    <div>
      <h2>📝 네이버 블로그 최신 글</h2>
      <p>총 {posts.length}개의 글이 있습니다.</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post, idx) => (
          <li key={idx} style={{ margin: "1rem 0", border: "1px solid #ddd", padding: "1rem" }}>
            <a href={post.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <h3 style={{ color: "#0066cc", margin: "0 0 0.5rem 0" }}>{post.title}</h3>
            </a>
            <div style={{ fontSize: "0.9rem", color: "#666" }}>
              📅 {new Date(post.pubDate).toLocaleDateString('ko-KR')}
            </div>
            {post.description && (
              <p style={{ marginTop: "0.5rem", color: "#444", fontSize: "0.9rem" }}>
                {post.description.replace(/<[^>]+>/g, "").slice(0, 150)}...
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Study;
