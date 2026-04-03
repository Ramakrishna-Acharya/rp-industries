import { useState } from "react";

// images (keep your fixed names)
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
      <div style={styles.topbar}>RP Industries</div>

      {/* NAV (mobile + desktop) */}
      <div style={styles.navbar}>
        <button onClick={() => setPage("home")} style={styles.navBtn}>Home</button>
        <button onClick={() => setPage("products")} style={styles.navBtn}>Products</button>
        <button onClick={() => setPage("projects")} style={styles.navBtn}>Projects</button>
        <button onClick={() => setPage("contact")} style={styles.navBtn}>Contact</button>
      </div>

      {/* CONTENT */}
      <div style={styles.content}>
        {page === "home" && <Home />}
        {page === "products" && <Products />}
        {page === "projects" && <Projects />}
        {page === "contact" && <Contact />}
      </div>

    </div>
  );
}

/* ===== PAGES ===== */

function Home() {
  return (
    <div>
      <h2>Welcome to RP Industries</h2>
      <p style={styles.text}>
        Precision manufacturing of bolts, nuts, panels and custom components.
      </p>
    </div>
  );
}

function Products() {
  return (
    <div>
      <h2>Products / Services</h2>

      <div style={styles.grid}>
        <img src={img1} style={styles.image} />
        <img src={img2} style={styles.image} />
        <img src={img3} style={styles.image} />
        <img src={img4} style={styles.image} />
        <img src={img5} style={styles.image} />
        <img src={img6} style={styles.image} />
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <p style={styles.text}>
        Delivered high-quality industrial and automotive components with precision.
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>RP Industries</p>
      <p>Pune, India</p>
      <p>+91-XXXXXXXXXX</p>
      <p>contact@rpindustries.com</p>

      <img src={img1} style={styles.workshop} />
    </div>
  );
}

/* ===== STYLES ===== */

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    background: "#f8fafc",
  },

  topbar: {
    background: "#1e3a8a",
    color: "white",
    padding: "16px",
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
  },

  navbar: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
    padding: "10px",
    background: "#e2e8f0",
  },

  navBtn: {
    padding: "10px 16px",
    border: "none",
    background: "white",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "500",
  },

  content: {
    padding: "20px",
  },

  text: {
    color: "#475569",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: "15px",
    marginTop: "20px",
  },

  image: {
    width: "100%",
    height: "120px",
    objectFit: "cover",
    borderRadius: "8px",
  },

  workshop: {
    width: "100%",
    maxWidth: "400px",
    marginTop: "20px",
    borderRadius: "8px",
  },
};

export default App;