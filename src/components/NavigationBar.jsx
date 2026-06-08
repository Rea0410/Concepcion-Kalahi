import React from "react";
import allLogo from "../assets/all.png";
import {
  CContainer,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

const NavigationBar = () => {
  return (
    <CNavbar
      expand="lg"
      style={{
        background: "linear-gradient(90deg, #1783cb, #00897b)",
       padding: "15px 60px",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
      }}
    >
      <CContainer
        fluid
        style={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          width: "100%",
        }}
      >
        {/* LEFT - LOGO */}
        <CNavbarBrand style={{ display: "flex", alignItems: "center" }}>
          <img
  src={allLogo}
  alt="KALAHI"
  style={{
    width: "250px",
    height: "auto",
    objectFit: "contain",
  }}
/>
        </CNavbarBrand>

        {/* CENTER - TITLE */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
            lineHeight: "1.1",
          }}
        >
          <div style={{ color: "#fff", fontSize: "40px", fontWeight: "700" }}>
            KALAHI-CIDSS CONCEPCION
          </div>
          <div style={{ color: "rgba(255,255,255,0.85)", fontSize: "20px" }}>
            Accomplishment Dashboard 2004–2025
          </div>
        </div>

        {/* RIGHT - DROPDOWN */}
        <CNavbarNav
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          <CDropdown>
            <CDropdownToggle
              style={{
                color: "#fff",
                background: "transparent",
                border: "none",
                fontSize: "16px",
                fontWeight: "500",
                cursor: "pointer",
              }}
            >
              Menu
            </CDropdownToggle>

            <CDropdownMenu>
              <CDropdownItem href="/projects">
                Projects
              </CDropdownItem>

              <CDropdownItem href="/awards">
                Awards
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CNavbarNav>
      </CContainer>
    </CNavbar>
  );
};

export default NavigationBar;