import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../contexts/Context";

function Header() {
  const navigate = useNavigate();
  const { toggleTheme, isDarkMode } = useContext(Context);

  return (
    <div className="header">
      <div className="left">
        <div
          style={{ cursor: "pointer", marginRight: "1.5rem", fontWeight: "bold" }}
          onClick={() => {
            navigate(`/blog/`);
          }}
        >
          Seulog
        </div>
        <div onClick={toggleTheme} style={{ cursor: "pointer" }}>
          {!isDarkMode ? "🌙 " : "☀️"}
        </div>
      </div>
      <div className="right" style={{ display: "flex", gap: "2rem" }}>
        <div style={{ cursor: "pointer" }} onClick={() => navigate(`/blog/`)}>
          홈
        </div>
        <div style={{ cursor: "pointer" }} onClick={() => navigate(`/blog/study`)}>
          공부기록
        </div>
        <div style={{ cursor: "pointer" }} onClick={() => navigate(`/blog/about`)}>
          소개
        </div>
      </div>
    </div>
  );
}

export default Header;
