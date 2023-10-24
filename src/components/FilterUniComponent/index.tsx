// import { mountFilterUni } from "service1/filterUni";
import { useEffect, useRef } from "react";

let mountFilterUni: (e: any) => void = (e) => {
  console.log(e);
};
if (process.browser) {
  // @ts-ignore
  mountFilterUni = (await import("service1/filterUniFunc")).default;
}

const FilterUniComponent = () => {
  console.log("running filterUni");
  const ref = useRef(null);

  useEffect(() => {
    if (process.browser) {
      console.log(mountFilterUni);
      if (mountFilterUni) mountFilterUni(ref.current);
    }
  });

  return <div ref={ref}></div>;
};

export default FilterUniComponent;
