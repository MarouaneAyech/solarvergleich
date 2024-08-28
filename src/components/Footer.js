import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f1f1f1', padding: '10px 0', textAlign: 'center', left: 0, bottom: 0, width: '100%' }}>
      <p>© 2024 Addval-Solutions All rights reserved.</p>
      <p>
        <a href="/terms">Terms of Service</a> |{' '}
        <a href="/privacy">Privacy Policy</a> |{' '}
        <a href="/contact">Contact</a>
      </p>
      <p>
        Follow us : 
        <a href="https://www.facebook.com/profile.php?id=61562052188900" target="_blank" rel="noopener noreferrer">Facebook</a> |{' '}
        <a href="http://addval-solutions.com/" target="_blank" rel="noopener noreferrer">Twitter</a> |{' '}
        <a href="https://www.linkedin.com/company/addvalsolutions/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
    </footer>
  );
};

export default Footer;
