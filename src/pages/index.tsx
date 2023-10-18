import Head from "next/head";
import styles from "../styles/Home.module.css";
import FilterUniComponent from "../components/FilterUniComponent";
import FeeListComponent from "../components/FeeListComponent";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

// ------------- IMPORT MODULE -----------------
// import ReactChild from "../components/ReactChild";
// // @ts-ignore
// const Header = (await import("fe1/header")).default;
// console.log(Header.toString());
// import dynamic from "next/dynamic";
// const Header = dynamic(
//   () => {
//     // @ts-ignore
//     return import("fe1/header");
//   },
//   { ssr: false }
// );

// let stringFormat: any;
// if (process.browser) {
//   // @ts-ignore
//   stringFormat = (await import("fe1/stringFormat")).default;
// }
// // @ts-ignore
// const stringFormat = (await import("fe1/stringFormat")).default;
// const stringFormat = dynamic(
//   () => {
//     // @ts-ignore
//     return import("fe1/stringFormat");
//   },
//   { ssr: false }
// );

// // ------------- REACT REMOTE -------------------
// // @ts-ignore
// const ReactRemoteComponent = dynamic(() => import("childReact/Nav"), {
//   ssr: false,
// });

export default function Home() {
  return (
    <>
      <Head>
        <title>University Fee Management</title>
        <meta
          name="description"
          content="Generated by create next app, implemented using microfrontend architecture combining nextjs and reactjs, with mongoDB as its BE."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next.svg" />
      </Head>
      <main className={styles.main}>
        <div className="bg-white p-4 rounded">
          <h1>University Fee Management</h1>
          <p>Choose the university and retrieve its fees</p>
          <p>IF env: {process.env.SERVICE1_URL}</p>
          <FilterUniComponent />
          <br />
          <FeeListComponent />
        </div>
      </main>
    </>
  );
}
