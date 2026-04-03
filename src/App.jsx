import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div style={styles.container}>
      
      {/* TOP BAR */}
      <div style={styles.topbar}>
        RP Industries
      </div>

      {/* MAIN LAYOUT */}
      <div style={styles.main}>
        
        {/* SIDEBAR */}
        <div style={styles.sidebar}>
          <button onClick={() => setPage("home")} style={styles.btn}>Home</button>
          <button onClick={() => setPage("products")} style={styles.btn}>Products / Services</button>
          <button onClick={() => setPage("projects")} style={styles.btn}>Projects</button>
          <button onClick={() => setPage("contact")} style={styles.btn}>Contact Us</button>
        </div>

        {/* CONTENT */}
        <div style={styles.content}>
          {page === "home" && <Home />}
          {page === "products" && <Products />}
          {page === "projects" && <Projects />}
          {page === "contact" && <Contact />}
        </div>

      </div>
    </div>
  );
}

/* ================= PAGES ================= */

function Home() {
  return (
    <div>
      <h2>Welcome to RP Industries</h2>
      <p>
        We specialize in manufacturing precision components including bolts,
        nuts, panels, and custom mechanical parts for industrial applications.
      </p>
    </div>
  );
}

function Products() {
  return (
    <div>
      <h2>Products / Services</h2>

      <div style={styles.grid}>
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />    
        <img src={img4} />
        <img src={img5} />
        <img src={img6} />
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <p>
        Successfully delivered precision components for automotive and industrial
        applications with high quality standards.
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>RP Industries</p>
      <p>Location: (Add address here)</p>
      <p>Phone: (Add phone number)</p>
      <p>Email: (Add email)</p>

      <img
        src="https://via.placeholder.com/300x200"
        alt="Workshop"
        style={{ marginTop: "20px" }}
      />
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
  },

  topbar: {
    background: "#2563eb",
    color: "white",
    padding: "16px",
    fontSize: "22px",
    fontWeight: "bold",
  },

  main: {
    display: "flex",
  },

  sidebar: {
    width: "220px",
    background: "#f1f5f9",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    minHeight: "100vh",
  },

  btn: {
    padding: "10px",
    border: "none",
    background: "#e2e8f0",
    cursor: "pointer",
    textAlign: "left",
  },

  content: {
    flex: 1,
    padding: "20px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "15px",
    marginTop: "20px",
  },
};

export default App;