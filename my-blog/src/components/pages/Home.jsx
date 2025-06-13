const Home = () => (<main style={{ textAlign: "center", marginTop: "3rem", padding: "0 1rem" }}>
    <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>👋 Welcome to My Dev Blog</h1>
    <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
      블록체인 개발자가 되기 위해 공부 중입니다.<br />
      이 블로그는 제가 배우고 실습한 내용을 정리하고, 성장 과정을 기록하기 위해 만들었습니다.<br />
      프론트엔드부터 스마트 컨트랙트 개발, Web3까지 차근차근 채워가볼 예정입니다.
    </p>

     {/* 깃허브 잔디 그래프 */}
    <div style={{ margin: "3rem auto", display: "flex", justifyContent: "center" }}>
      <img src="https://ghchart.rshah.org/4096/yeseul1031" alt="GitHub Contribution Graph" style={{
        width: "100%",
        maxWidth: "900px",
        height: "auto",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
    }}/>
    </div>
  </main>);
export default Home;
