import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={footerStyle}>
      <p>© {currentYear} GAIOKA SPORTS. All rights reserved.</p>
    </footer>
  );
};

const footerStyle = {
  textAlign: "center",
  padding: "10px",
  backgroundColor: "#FDFBD4",
  position: "fixed",
  bottom: "0",
  width: "100%",
};

export default Footer;
