import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Hotjar from "@hotjar/browser";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Hotjar.init(3707330, 6);
  }, []);

  return <Component {...pageProps} />;
}
