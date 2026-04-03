import { useState } from "react";

// ✅ IMPORT IMAGES (make sure names match EXACTLY)
import img1 from "./assets/bolt.jpg";
import img2 from "./assets/nut.jpg";
import img3 from "./assets/panel.jpg";
import img4 from "./assets/part4.jpg";
import img5 from "./assets/part5.jpg";
import img6 from "./assets/part6.jpg";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div style={styles.container}>
      
      {/* TOP BAR */}
      <div style={styles.topbar}>
        RP Industries
      </div>

      {/* MAIN */}
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
      <hr />
      <p>
        We specialize in manufacturing precision components including bolts,
        nuts, panels, and custom mechanical parts.
      </p>
    </div>
  );
}

function Products() {
  return (
    <div>
      <h2>Products / Services</h2>

      <div style={styles.grid}>
        <img src={img1} alt="Bolt" style={styles.image} />
        <img src={img2} alt="Nut" style={styles.image} />
        <img src={img3} alt="Panel" style={styles.image} />
        <img src={img4} alt="Part 4" style={styles.image} />
        <img src={img5} alt="Part 5" style={styles.image} />
        <img src={img6} alt="Part 6" style={styles.image} />
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <p>
        Delivered high-quality components for automotive and industrial clients.
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>RP Industries</p>
      <p>Location: Pune, India</p>
      <p>Phone: +91-XXXXXXXXXX</p>
      <p>Email: contact@rpindustries.com</p>

      <img
        src={img1}
        alt="Workshop"
        style={{ marginTop: "20px", width: "300px" }}
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
    background: "#1e40af",
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

  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },
};

export default App;