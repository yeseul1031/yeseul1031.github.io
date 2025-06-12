const Home = () => (
    <main style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>welcome to my blog 👋</h2>
      <p>이 블로그는 개발 공부 기록을 위해 만들었습니다.</p>
      {/* 깃허브 잔디 그래프 */}
      <div style={{ margin: "2rem auto", display: "flex", justifyContent: "center" }}>
        <img
          src="https://ghchart.rshah.org/yeseul1031"
          alt="GitHub Contribution Graph"
          style={{ width: "100%", maxWidth: "700px", background: "#fff", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
        />
      </div>
    </main>
  );
  
  export default Home;
  