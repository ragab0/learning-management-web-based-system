import React from "react";
import "./PaymentMethods.css";

export default function PaymentMethods() {
  return (
    <section class="payment-container">
      <form class="form-wrapper">
        <div class="input-group">
          <div class="input-container">
            <label for="country" class="input-label">
              Country
            </label>
            <input
              type="text"
              id="country"
              class="input-field form-control"
              placeholder="Enter Country"
              aria-label="Enter Country"
            />
          </div>
          <div class="input-container">
            <label for="state" class="input-label">
              State/Union Territory
            </label>
            <input
              type="text"
              id="state"
              class="input-field form-control"
              placeholder="Enter State"
              aria-label="Enter State"
            />
          </div>
        </div>
        <div class="payment-method-section">
          <h2 class="input-label">Payment Method</h2>
          <div class="payment-option">
            <div class="payment-header">
              <div class="payment-icon-wrapper">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/597e590d23054a1d9d2d04b1c915e37a2032f2e63e44b2b14afbae306df3510e?placeholderIfAbsent=true&apiKey=7e15e2412aa04989a867055d6ae67fbc"
                  alt="Credit/Debit Card Icon"
                  class="payment-icon"
                />
                <span>Credit/Debit Card</span>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0aad4c34c1462f14106e57ef824d5a576d4938738a62892c08228b12af0533c7?placeholderIfAbsent=true&apiKey=7e15e2412aa04989a867055d6ae67fbc"
                alt="Card Logos"
                class="card-logo"
              />
            </div>
            <div class="card-details">
              <div class="card-input-container">
                <label for="cardName" class="card-input-label">
                  Name of Card
                </label>
                <input
                  type="text"
                  id="cardName"
                  class="card-input-field form-control"
                  placeholder="Name of card"
                  aria-label="Name of card"
                />
              </div>
              <div class="card-input-container">
                <label for="cardNumber" class="card-input-label">
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  class="card-input-field form-control"
                  placeholder="Card Number"
                  aria-label="Card Number"
                />
              </div>
              <div class="card-input-group">
                <div class="card-input-container">
                  <label for="expiryDate" class="card-input-label">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expiryDate"
                    class="card-input-field form-control"
                    placeholder="MM/YY"
                    aria-label="Expiry Date"
                  />
                </div>
                <div class="card-input-container">
                  <label for="cvv" class="card-input-label">
                    CVC/CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    class="card-input-field form-control"
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
