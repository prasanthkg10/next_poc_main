"use client";
import "../styles/globals.css";
import "../styles/boxicons.min.css";
import "../styles/sidebar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from "@material-tailwind/react";


export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}