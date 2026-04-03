import { useState } from "react";

// images (make sure names match)
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
        <NavBtn label="Home" active={page==="home"} onClick={()=>setPage("home")} />
        <NavBtn label="Products" active={page==="products"} onClick={()=>setPage("products")} />
        <NavBtn label="Projects" active={page==="projects"} onClick={()=>setPage("projects")} />
        <NavBtn label="Contact" active={page==="contact"} onClick={()=>setPage("contact")} />
      </div>

      {/* CONTENT */}
      <div style={styles.content}>
        {page === "home" && <Home setPage={setPage} />}
        {page === "products" && <Products />}
        {page === "projects" && <Projects />}
        {page === "contact" && <Contact />}
      </div>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/917276764963"
        target="_blank"
        style={styles.whatsapp}
      >
        Chat
      </a>

    </div>
  );
}

/* ===== COMPONENTS ===== */

function NavBtn({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={active ? styles.activeBtn : styles.navBtn}
    >
      {label}
    </button>
  );
}

/* ===== PAGES ===== */

function Home({ setPage }) {
  return (
    <div style={styles.hero}>
      <h1 style={styles.heroTitle}>RP Industries</h1>
      <p style={styles.heroTag}>
        Precision Engineering. Reliable Manufacturing.
      </p>

      <button style={styles.cta} onClick={() => setPage("contact")}>
        Get in Touch
      </button>
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
        Delivered high-quality components for industrial and automotive sectors.
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

      <iframe
        src="https://www.google.com/maps?q=Pune&output=embed"
        width="100%"
        height="250"
        style={{ border: 0, marginTop: "20px", borderRadius: "8px" }}
      ></iframe>
    </div>
  );
}

/* ===== STYLES ===== */

const styles = {
  container: {
    fontFamily: "Segoe UI, sans-serif",
    background: "#f8fafc",
  },

  topbar: {
    background: "#0f172a",
    color: "white",
    padding: "18px",
    fontSize: "22px",
    fontWeight: "600",
    textAlign: "center",
  },

  navbar: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    flexWrap: "wrap",
    padding: "12px",
    background: "#e2e8f0",
  },

  navBtn: {
    padding: "10px 16px",
    border: "none",
    background: "white",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "500",
    transition: "0.2s",
  },

  activeBtn: {
    padding: "10px 16px",
    border: "none",
    background: "#0f172a",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer",
  },

  content: {
    padding: "30px",
    maxWidth: "1000px",
    margin: "auto",
  },

  hero: {
    textAlign: "center",
    padding: "60px 20px",
  },

  heroTitle: {
    fontSize: "40px",
    marginBottom: "10px",
  },

  heroTag: {
    fontSize: "18px",
    color: "#475569",
    marginBottom: "20px",
  },

  cta: {
    padding: "12px 22px",
    background: "#0f172a",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },

  text: {
    color: "#475569",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },

  card: {
    background: "white",
    padding: "12px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
    transition: "0.2s",
  },

  image: {
    width: "100%",
    height: "140px",
    objectFit: "cover",
    borderRadius: "6px",
  },

  productName: {
    marginTop: "10px",
    fontWeight: "500",
  },

  whatsapp: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#25D366",
    color: "white",
    padding: "14px",
    borderRadius: "50%",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default App;