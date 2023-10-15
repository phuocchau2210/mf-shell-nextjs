import React from "react";

// import dynamic from "next/dynamic";
// const ImportedComponent = dynamic(
//   () => {
//     // @ts-ignore
//     return import("reactChild/reactApp");
//   },
//   { ssr: false }
// );

//@ts-ignore
const ImportedComponent = (await import("reactChild/reactApp")).default;

export default function ReactChild() {
  return <ImportedComponent></ImportedComponent>;
}
