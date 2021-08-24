import Link from "next/link";
import styles from "../styles/Navbar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block"
      id="templatemo_nav_top"
    >
      <div className="container text-light">
        <div className="w-100 d-flex justify-content-between">
          <div>
            <a
              className="navbar-sm-brand text-light text-decoration-none"
              href="mailto:info@tiendachayito.com"
            >
              info@tiendachayito.com
            </a>
            <FontAwesomeIcon icon={faPhone} style={{ width: "40px" }} />
            <a
              className="navbar-sm-brand text-light text-decoration-none"
              href="tel:(506)2445-0340"
            >
              (506)2445-0340
            </a>
          </div>
          <div>
            <a className="text-light" href="" target="_blank" rel="sponsored">
              <FontAwesomeIcon
                icon={faFacebook}
                className="me-2"
                style={{ width: "40px" }}
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="me-2"
                style={{ width: "40px" }}
              />
            </a>
            <a className="text-light" href="" target="_blank">
              <FontAwesomeIcon
                icon={faInstagram}
                className="me-2"
                style={{ width: "40px" }}
              />
            </a>
            <a className="text-light" href="" target="_blank"></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
