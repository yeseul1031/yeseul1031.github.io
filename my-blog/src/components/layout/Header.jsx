import { Link } from 'react-router-dom';
const Header = () => (<header style={{ padding: "1rem", background: "#3b4db7", color: "#fff" }}>
    <h1>My Blog</h1>
    <nav>
      <Link to="/" style={{ color: "#fff", margin: "0 1rem" }}>홈</Link>
      <Link to="/study" style={{ color: "#fff", margin: "0 1rem" }}>공부기록</Link>
      <Link to="/about" style={{ color: "#fff", margin: "0 1rem" }}>소개</Link>
      <Link to="/wallet" style={{ color: "#fff", margin: "0 1rem" }}>지갑</Link>
    </nav>
  </header>);
export default Header;
