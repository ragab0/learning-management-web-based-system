import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Logo from "../../../../components/Logo/Logo";

export default function Footer() {
  return (
    <footer>
      <div className="container footer-content">
        <div>
          <Logo />
          <p>
            Empowering learners through accessible and engaging online
            education. Byway is a leading online learning platform dedicated to
            providing high-quality, flexible, and affordable educational
            experiences.
          </p>
        </div>
        <div>
          <h4>Get Help</h4>
          <ul>
            <li>
              <Link to={"#"}>Contact Us</Link>
            </li>
            <li>
              <Link to={"#"}>Latest Articles</Link>
            </li>
            <li>
              <Link to={"#"}>FAQ</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Programs</h4>
          <ul>
            <li>
              <Link to={"#"}>Art & Design</Link>
            </li>
            <li>
              <Link to={"#"}>Business</Link>
            </li>
            <li>
              <Link to={"#"}>IT & Software</Link>
            </li>
            <li>
              <Link to={"#"}>Languages</Link>
            </li>
            <li>
              <Link to={"#"}>Programming</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Contact Us</h4>
          <ul>
            <li>Address: 123 Main Street, Anytown, CA 12345</li>
            <li>Tel: +(123) 456-7890</li>
            <li>Mail: bywayedu@webkul.in</li>
          </ul>
          <ul></ul>
        </div>
      </div>
    </footer>
  );
}
