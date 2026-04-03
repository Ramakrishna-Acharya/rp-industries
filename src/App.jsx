import { useState } from "react";

// images
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

      {/* NAV */}
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

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        style={styles.whatsapp}
      >
        WhatsApp
      </a>

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
  const items = [
    { img: img1, name: "Industrial Bolts" },
    { img: img2, name: "Precision Nuts" },
    { img: img3, name: "Metal Panels" },
    { img: img4, name: "Custom Part A" },
    { img: img5, name: "Custom Part B" },
    { img: img6, name: "Custom Part C" },
  ];

  return (
    <div>
      <h2>Products / Services</h2>

      <div style={styles.grid}>
        {items.map((item, i) => (
          <div key={i} style={styles.card}>
            <img src={item.img} style={styles.image} />
            <p style={styles.productName}>{item.name}</p>
          </div>
        ))}
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

      {/* GOOGLE MAP */}
      <iframe
        src="https://www.google.com/maps?q=Pune&output=embed"
        width="100%"
        height="250"
        style={{ border: 0, marginTop: "20px", borderRadius: "8px" }}
        loading="lazy"
      ></iframe>
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
    transition: "0.2s",
  },

  content: {
    padding: "20px",
  },

  text: {
    color: "#475569",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "15px",
    marginTop: "20px",
  },

  card: {
    background: "white",
    padding: "10px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  },

  image: {
    width: "100%",
    height: "120px",
    objectFit: "cover",
    borderRadius: "6px",
  },

  productName: {
    marginTop: "8px",
    fontSize: "14px",
    fontWeight: "500",
  },

  whatsapp: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#25D366",
    color: "white",
    padding: "12px 16px",
    borderRadius: "50px",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default App;