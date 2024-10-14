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
            education. LMG-DEPI is a leading online learning platform dedicated
            to providing high-quality, flexible, and affordable educational
            experiences.
          </p>
        </div>
        <div>
          <h4>Get Help</h4>
          <ul>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Programs</h4>
          <ul className=" text-capitalize">
            <li>
              <Link to="/courses?catg=art">Art & Design</Link>
            </li>
            <li>
              <Link to="/courses?catg=business">Business</Link>
            </li>
            <li>
              <Link to="/courses?catg=it,software">IT & Software</Link>
            </li>
            <li>
              <Link to="/courses?catg=languages">Languages</Link>
            </li>
            <li>
              <Link to="/courses?catg=programming">Programming</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Contact Us</h4>
          <ul>
            <li>Address: Cairo - Egypt</li>
            <li>Tel: +(20) 109-454-5736-7890</li>
            <li>Mail: legendragab@gmail.com</li>
          </ul>
          <ul></ul>
        </div>
      </div>
    </footer>
  );
}
