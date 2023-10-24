import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { hotjar } from "react-hotjar";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    hotjar.initialize(3707330, 6);
  }, []);

  return <Component {...pageProps} />;
}
