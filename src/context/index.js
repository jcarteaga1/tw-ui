import React from "react";
import { AuthProvider } from "./AuthProvider";
import App from "../App";

export default function Providers() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
