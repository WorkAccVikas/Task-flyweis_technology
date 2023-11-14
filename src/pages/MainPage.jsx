import SidBar from "../components/SidBar";
import TopBar from "../components/TopBar";
import LawyersPage from "./LawyersPage";
import "./MainPage.css";

const MainPage = () => {
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <SidBar />
        </div>
        <div className="content">
          <TopBar />
          <LawyersPage />
        </div>
      </div>
    </>
  );
};

export default MainPage;
