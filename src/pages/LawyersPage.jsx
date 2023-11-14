import axios from "axios";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import LawyerRow from "../components/LawyerRow";
import Modal from "../components/ModalBox";
import "./LawyersPage.css";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGZlMTc4MjMyMzIwNmVmMjViOWJiOSIsImlhdCI6MTY5OTk3NDkzOCwiZXhwIjoxNzAwMjM0MTM4fQ.oN1aVlYy-OHaRDyVUbVxcH0QJ4CKtbS1X2QPxsXGU7M";

const LawyersPage = () => {
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [itemName, setItemName] = useState("");
  const [input, setInput] = useState("");

  const openModal = (name) => {
    setModalOpen(true);
    setItemName(name);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    console.log("Mounted");
    (async () => {
      let { data } = await axios.get("/api/v1/admin/Lawyer", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Data = ", data);
      setData(data.data);
    })();
    return () => {
      console.log("Unmounted");
    };
  }, []);

  return (
    <>
      {/* <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      /> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          // marginBottom: "1rem",
          padding: "2rem",
        }}
      >
        <h1 style={{ marginLeft: "1rem" }}>All Lawyers</h1>
        <div style={{ display: "flex", gap: "1rem" }}>
          <div style={styles.searchContainer}>
            <button style={styles.searchButton}>
              <CiSearch style={styles.icon} />
            </button>
            <input
              type="text"
              placeholder="Search Lawyer"
              style={styles.input}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <button
            style={{
              background: "#0f2c64",
              color: "white",
              borderRadius: "2rem",
              padding: "1rem 2rem",
            }}
          >
            Add New Lawyer
          </button>
        </div>
      </div>

      <div
        style={{ maxHeight: "500px", overflowY: "auto" }}
        id="container__lawyer"
      >
        <table className="txt-style">
          <thead>
            <tr>
              <th></th>
              <th scope="col">Lawyer Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone No.</th>
              <th scope="col">Total Consultations</th>
              <th scope="col"></th>
            </tr>
          </thead>

          <tbody>
            {data?.map((item) => {
              return (
                <LawyerRow
                  key={item._id}
                  item={item}
                  openModal={openModal}
                  modalOpen={modalOpen} // Pass the modalOpen state as a prop
                />
              );
            })}
          </tbody>
        </table>
      </div>

      {modalOpen && (
        <Modal open={modalOpen} onClose={closeModal} name={itemName} />
      )}
    </>
  );
};

const styles = {
  searchContainer: {
    display: "flex",
    // alignItems: "center",
    maxWidth: "321px",
  },
  searchButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    height: "42px",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
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

export default LawyersPage;
