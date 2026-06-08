import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const barangays = [
  "Aglosong",
  "Agnaga",
  "BacjawanNorte",
  "BacjawanSur",
  "Bagongon",
  "Batiti",
  "Botlog",
  "Calamigan",
  "Dungon",
  "Igbon",
  "Jamulawon",
  "Loong",
  "Macalbang",
  "Macatunao",
  "Malangabang",
  "Maliogliog",
  "Niño",
  "Nipa",
  "Plandico",
  "Poblacion",
  "Polopiña",
  "Salvacion",
  "Talotuan",
  "Tambaliza",
  "Tamis-ac",
];

const BarangayDashboard = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleClick = (barangay) => {
    navigate(`/barangay-projects/${barangay}`);
  };

  // FILTER LOGIC
  const filteredBarangays = barangays.filter((brgy) =>
    brgy.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ marginTop: "100px", padding: "20px" }}>

      <h2
  style={{
    textAlign: "center",
    marginBottom: "10px",
    fontSize: "34px",
    fontWeight: "700",
    color: "#1f2937",
  }}
>
  Concepcion Barangays
</h2>

<p
  style={{
    textAlign: "center",
    color: "#6b7280",
    marginBottom: "30px",
  }}
>
  Select a barangay to view projects and accomplishments
</p>

      {/* SEARCH BAR */}
    <div
  style={{
    display: "flex",
    justifyContent: "center",
    marginBottom: "25px",
  }}
>
  <input
    type="text"
    placeholder="🔍 Search barangay..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    style={{
      width: "350px",
      maxWidth: "90%",
      padding: "14px 18px",
      borderRadius: "12px",
      border: "1px solid #d1d5db",
      fontSize: "15px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      outline: "none",
    }}
  />
</div>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "15px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
      {filteredBarangays.map((brgy, index) => (
  <div
    key={index}
    onClick={() => handleClick(brgy)}
    style={{
      background: "#fff",
      borderRadius: "18px",
      padding: "22px",
      cursor: "pointer",
      textAlign: "center",
      border: "1px solid #e5e7eb",
      boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
      transition: "all 0.3s ease",
      position: "relative",
      overflow: "hidden",
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = "translateY(-6px)";
      e.currentTarget.style.boxShadow =
        "0 12px 25px rgba(23,131,203,0.25)";
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow =
        "0 4px 15px rgba(0,0,0,0.08)";
    }}
  >
    {/* Top Accent */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "6px",
        background: "linear-gradient(90deg, #1783cb, #00897b)",
      }}
    />

    {/* Icon */}
    <div
      style={{
        fontSize: "38px",
        marginBottom: "10px",
      }}
    >
      📍
    </div>

    {/* Barangay Name */}
    <div
      style={{
        fontSize: "18px",
        fontWeight: "700",
        color: "#1f2937",
        marginBottom: "8px",
      }}
    >
      {brgy}
    </div>

    {/* Subtitle */}
    <div
      style={{
        fontSize: "13px",
        color: "#6b7280",
      }}
    >
      View Projects & Accomplishments
    </div>
  </div>
))}
      </div>

    </div>
  );
};

export default BarangayDashboard;