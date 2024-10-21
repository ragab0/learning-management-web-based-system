import React from "react";
import "./Cart.css";
import Details from "./Details/Details";
import { motion } from "framer-motion";

export default function LayoutCart({
  children,
  title = "Shopping Cart",
  isCheckoutPage = false,
}) {
  return (
    <div className="layout-cart">
      <div className="container">
        <h1>{title}</h1>
        <div className="content-aside-layout">
          <div className="layout-cart-content">{children}</div>
          <motion.aside
            className="aside"
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <Details isCheckoutPage={isCheckoutPage} />
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
