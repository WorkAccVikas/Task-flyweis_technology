import { FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { FaHistory } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="topContainer">
      <div style={{ display: "flex" }}>
        <FaUser
          style={{
            color: "#fff",
            width: "4rem",
            height: "3.5rem",
            background: "#0f2c64",
            borderRadius: "50%",
          }}
        />
        <div style={{ marginLeft: ".5rem" }} className="text-black">
          <div>Mr Admin</div>
          <div>Lorem ipsum</div>
        </div>
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <div style={styles.searchContainer}>
          <button style={styles.searchButton}>
            <CiSearch style={styles.icon} />
          </button>
          <input
            type="text"
            placeholder="Search in admin Panel"
            style={styles.input}
          />
        </div>
        <div className="text-black">
          <div className="text-center">
            <CiSettings style={{ width: "20px", height: "20px" }} />
          </div>
          <div className="text-center text-gray">Settings</div>
        </div>
        <div className="text-black">
          <div className="text-center">
            <FaHistory style={{ width: "20px", height: "20px" }} />
          </div>
          <div className="text-center text-gray">History</div>
        </div>
        <div className="text-black">
          <div className="text-center">
            <FaFilter style={{ width: "20px", height: "20px" }} />
          </div>
          <div className="text-center text-gray">Filter</div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  searchContainer: {
    display: "flex",
    // alignItems: "center",
  },
  searchButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    height: "42px",
  },
  icon: {
    width: "24px",
    height: "42px",
    background: "#0f2c64",
    color: "#fff",
    padding: "5px",
  },
  input: {
    flex: 1,
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    height: "42px",
  },
};

export default TopBar;
