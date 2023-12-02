import { Link, Outlet } from "react-router-dom";
import "./App.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function App() {
  return (
    <div className="app">
      <div className="navigationbar">
        <nav>
          <Link to={"/contact"}>
            <h2>Contact me here!</h2>
          </Link>
        </nav>
        <div className="socialMedia">
          <a
            className="github"
            href={"https://github.com/Rizzanen"}
            target="_blank"
          >
            <GitHubIcon style={{ fontSize: 40 }} />
          </a>
          <a
            className="linkedin"
            href={"https://www.linkedin.com/in/aapo-rissanen-0b25802a1/"}
            target="_blank"
          >
            <LinkedInIcon style={{ fontSize: 46 }} />
          </a>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default App;
