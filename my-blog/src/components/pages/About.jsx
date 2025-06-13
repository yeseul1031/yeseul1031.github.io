const About = () => (<div style={{ maxWidth: 700, margin: "3rem auto", padding: "2rem", background: "#fff", borderRadius: 12, boxShadow: "0 2px 12px #eee" }}>
   
    <h1 style={{ marginBottom: 8 }}>안녕하세요👋</h1>
    <p style={{ fontSize: 18, marginBottom: 24 }}>
      블록체인 공부중인 개발자 지망생입니다.<br />
      <strong>GitHub Pages</strong>로 블로그를 운영하며, 개발 기록과 프로젝트 경험을 공유합니다.
    </p>
    <h2 style={{ marginTop: 32, marginBottom: 12 }}>💻 기술 스택</h2>
    <ul style={{ display: "flex", gap: 16, listStyle: "none", padding: 0, marginBottom: 24 }}>
      <li>React</li>
      <li>TypeScript</li>
      <li>Vite</li>
      <li>ethers.js</li>
      <li>Node.js</li>
      <li>Git/GitHub</li>
    </ul>
    <h2 style={{ marginTop: 32, marginBottom: 12 }}>📌 대표 프로젝트</h2>
    <ul>
      <li>
        <strong>블록체인 지갑</strong> — <a href="https://github.com/본인계정/지갑프로젝트" target="_blank" rel="noopener noreferrer">GitHub</a>
      </li>
      <li>
        <strong>네이버 블로그 통합</strong> — <a href="https://github.com/본인계정/naver-blog-integration" target="_blank" rel="noopener noreferrer">GitHub</a>
      </li>
    </ul>
    <h2 style={{ marginTop: 32, marginBottom: 12 }}>🌐 연락처 & 소셜</h2>
    <ul style={{ listStyle: "none", padding: 0 }}>
      <li>이메일: <a href="mailto:your@email.com">your@email.com</a></li>
      <li>GitHub: <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">github.com/yourgithub</a></li>
      <li>LinkedIn: <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourlinkedin</a></li>
    </ul>
    <p style={{ marginTop: 32, color: "#888" }}>
      이 블로그는 GitHub Pages와 React로 만들었습니다.<br />
      개발 기록, 학습 노트, 프로젝트를 꾸준히 공유합니다.
    </p>
  </div>);
export default About;
