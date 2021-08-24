import Link from "next/link";
import styles from "../styles/Header.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPhone,
  faShoppingCart,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const OneLink = ({ children, className, href }) => {
  return (
    <Link href={href}>
      <a className={className}>{children}</a>
    </Link>
  );
};

const Header = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <OneLink
          href="/"
          className="h2 text-success border-bottom pb-3 border-light logo"
        >
          Tienda Chayito
        </OneLink>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <OneLink href="/" className="nav-link px-2 link-secondary">
              Home
            </OneLink>
          </li>
          <li>
            {" "}
            <OneLink href="/shop" className="nav-link px-2 link-secondary">
              Shop
            </OneLink>
          </li>
          <li>
            <OneLink href="/about" className="nav-link px-2 link-secondary">
              About
            </OneLink>
          </li>
          <li>
            <OneLink href="/contact" className="nav-link px-2 link-secondary">
              Contact
            </OneLink>
          </li>
        </ul>
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input
            type="search"
            className="form-control"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>
        <div className="text-end">
          <OneLink
            className="nav-icon position-relative text-decoration-none"
            href="#"
          >
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="me-2"
              style={{ width: "40px" }}
            />

            <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
              7
            </span>
          </OneLink>
          <OneLink
            className="nav-icon position-relative text-decoration-none"
            href="#"
          >
            <FontAwesomeIcon
              icon={faUser}
              className="me-2"
              style={{ width: "40px" }}
            />

            <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
              +99
            </span>
          </OneLink>
        </div>
      </header>
    </div>
  );
};

export default Header;
