import  { useEffect } from "react";

const useScrollHidden = (shouldHide: boolean) => {
  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    if (shouldHide) {
      // document.body.classList.add("overflow-hidden");
      html.classList.add("overflow-hidden");
    } else {
      // document.body.classList.remove("overflow-hidden");
      html.classList.remove("overflow-hidden");
    }
  }, [shouldHide]);
};

export default useScrollHidden;
