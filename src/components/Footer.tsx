import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import "../css-files/footer.css"

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-icons">
          <Link href="https://www.facebook.com/profile.php?id=100022188053240&mibextid=ZbWKwL" className="footer-icon" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </Link>
          <Link href="https://www.instagram.com/iqranaz2968?igsh=MWsxMmJ0ZGZ6MHZhbg==" className="footer-icon" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </Link>
          <Link href="https://www.linkedin.com/in/iqra-naz-43899b2b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="footer-icon" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </Link>
        </div>
        <p className="footer-text">&copy; All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
