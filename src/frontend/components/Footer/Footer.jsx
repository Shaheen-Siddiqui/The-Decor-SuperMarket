import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="fotr-texts">
        <h3>Terms</h3>
        <h3>Contect Us</h3>
        <h3> Your Account</h3>
      </div>
      <div className="fotr-icons">
        <FontAwesomeIcon icon={faGithub} size="2xl" />
        <FontAwesomeIcon icon={faTwitter} size="2xl"/>
        <FontAwesomeIcon icon={faLinkedin} size="2xl" />
      </div>
    </footer>
  );
};
