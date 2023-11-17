// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2023 Famous City hotel</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: ' #FFFFFF',
  color: '#fff',
  textAlign: 'center',
  position: 'fixed',
  bottom: 0,
  width: '100%',
};

export default Footer;
