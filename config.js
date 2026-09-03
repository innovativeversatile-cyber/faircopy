/* Pays through VibeCart's Stripe (same keys as the marketplace).
   Optional overrides: paymentLinks.day or paymentLinks.EUR.day = "https://..." */
window.FAIRCOPY_CONFIG = {
  siteName: "Fair Copy",
  checkoutBase: "https://vibe-cart.com/api/public/payments/faircopy/checkout",
  freePages: 4,
  paidPages: 40,
  passHours: {
    day: 24,
    month: 24 * 30,
    year: 24 * 365
  },
  /* Round local amounts — not live exchange. Keeps the page offline. */
  amounts: {
    USD: { day: 3, month: 7, year: 19 },
    EUR: { day: 3, month: 7, year: 18 },
    GBP: { day: 2.5, month: 6, year: 15 },
    KES: { day: 400, month: 900, year: 2500 },
    ZAR: { day: 55, month: 130, year: 350 },
    NGN: { day: 4500, month: 11000, year: 29000 },
    GHS: { day: 40, month: 95, year: 260 },
    UGX: { day: 11000, month: 26000, year: 70000 },
    TZS: { day: 7500, month: 18000, year: 48000 },
    PLN: { day: 12, month: 28, year: 75 },
    INR: { day: 250, month: 600, year: 1600 },
    BRL: { day: 17, month: 40, year: 99 },
    CAD: { day: 4, month: 9, year: 25 },
    AUD: { day: 5, month: 11, year: 29 }
  },
  paymentLinks: {
    day: "",
    month: "",
    year: ""
  }
};
