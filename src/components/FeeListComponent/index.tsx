import { useEffect, useRef } from "react";
// import { mountFeeList } from "service2/feeList";

let mountFeeList: (e: any) => void = (e) => {
  console.log("hoho");
};
if (process.browser) {
  // @ts-ignore
  mountFeeList = (await import("service2/feeListFunc")).default;
}

const FeeListComponent = () => {
  console.log("running service2");
  const ref = useRef(null);

  useEffect(() => {
    if (process.browser) {
      console.log(mountFeeList);
      if (mountFeeList) mountFeeList(ref.current);
    }
  });

  return <div ref={ref}></div>;
};

export default FeeListComponent;
