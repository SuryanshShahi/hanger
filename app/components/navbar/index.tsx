import Img from "@/app/shared/Img";
import React from "react";
import { SlBag } from "react-icons/sl";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const slideNav = () => {
    var x: any = document.getElementById("navbar");
    if (window.scrollY >= 100) {
      if (x.classList === "active") {
        x.classList.remove("active");
      } else {
        x.classList.add("active");
      }
    } else {
      x.classList.remove("active");
    }
  };
  typeof window !== "undefined" && window.addEventListener("scroll", slideNav);

  return (
    <div className="top-0 sticky z-20 px-5" id="navbar">
      <div className="flex items-center container-lg justify-between py-10 top-0 sticky">
        <Img
          alt=""
          src="/images/icons/logo.webp"
          isLocal
          height={35}
          width={130}
        />
        <ul className="lg:flex hidden gap-x-8">
          {["Home", "Pages", "Portfolio", "Blog", "Shop", "Contact"]?.map(
            (item, idx) => (
              <li key={idx} className="text-lg">
                {item}
              </li>
            )
          )}
        </ul>
        <div className="flex items-center gap-x-8">
          <div className="relative">
            <SlBag className="h-[34px] w-[22px]" />
            <div className="h-[15px] w-[15px] bg-primary flex items-center justify-center text-[10px] text-white rounded-full absolute -right-1 font-bold bottom-0">
              0
            </div>
          </div>
          <FiSearch className="h-[26px] w-[26px]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
