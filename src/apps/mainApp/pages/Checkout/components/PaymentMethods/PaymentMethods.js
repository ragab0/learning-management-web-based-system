import React from "react";
import "./PaymentMethods.css";

export default function PaymentMethods() {
  return (
    <section className="payment-container">
      <form className="form-wrapper">
        <div className="input-group">
          <div className="input-container">
            <label for="country" className="input-label">
              Country
            </label>
            <input
              type="text"
              id="country"
              className="input-field form-control"
              placeholder="Enter Country"
              aria-label="Enter Country"
            />
          </div>
          <div className="input-container">
            <label for="state" className="input-label">
              State/Union Territory
            </label>
            <input
              type="text"
              id="state"
              className="input-field form-control"
              placeholder="Enter State"
              aria-label="Enter State"
            />
          </div>
        </div>
        <div className="payment-method-section">
          <h2 className="input-label">Payment Method</h2>
          <div className="payment-option">
            <div className="payment-header">
              <div className="payment-icon-wrapper">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/597e590d23054a1d9d2d04b1c915e37a2032f2e63e44b2b14afbae306df3510e?placeholderIfAbsent=true&apiKey=7e15e2412aa04989a867055d6ae67fbc"
                  alt="Credit/Debit Card Icon"
                  className="payment-icon"
                />
                <span>Credit/Debit Card</span>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0aad4c34c1462f14106e57ef824d5a576d4938738a62892c08228b12af0533c7?placeholderIfAbsent=true&apiKey=7e15e2412aa04989a867055d6ae67fbc"
                alt="Card Logos"
                className="card-logo"
              />
            </div>
            <div className="card-details">
              <div className="card-input-container">
                <label for="cardName" className="card-input-label">
                  Name of Card
                </label>
                <input
                  type="text"
                  id="cardName"
                  className="card-input-field form-control"
                  placeholder="Name of card"
                  aria-label="Name of card"
                />
              </div>
              <div className="card-input-container">
                <label for="cardNumber" className="card-input-label">
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  className="card-input-field form-control"
                  placeholder="Card Number"
                  aria-label="Card Number"
                />
              </div>
              <div className="card-input-group">
                <div className="card-input-container">
                  <label for="expiryDate" className="card-input-label">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expiryDate"
                    className="card-input-field form-control"
                    placeholder="MM/YY"
                    aria-label="Expiry Date"
                  />
                </div>
                <div className="card-input-container">
                  <label for="cvv" className="card-input-label">
                    CVC/CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    className="card-input-field form-control"
                    placeholder="CVC/CVV"
                    aria-label="CVC/CVV"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
