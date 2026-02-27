import React from "react";
import ReactDOM from "react-dom/client";
import ContactForm from "./components/ContactForm/ContactForm";

ReactDOM.createRoot(
  document.getElementById("contact-root")
).render(
  <React.StrictMode>
    <ContactForm />
  </React.StrictMode>
);