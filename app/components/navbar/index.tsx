import Img from "@/app/shared/Img";
import ListItem from "@/app/shared/ListItem";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { SlBag } from "react-icons/sl";

const Navbar = () => {
  useEffect(() => {
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

    window.addEventListener("scroll", slideNav);
    return () => window.removeEventListener("scroll", slideNav);
  }, []);
  const router = useRouter();
  return (
    <div className="sticky z-20 px-5" id="navbar">
      <div
        className="flex items-center z-10 container-lg justify-between py-10"
        id="navbar"
      >
        <Img
          alt=""
          src="/images/icons/logo.webp"
          isLocal
          height={35}
          width={130}
          role="button"
          onClick={() => router.push("/")}
        />
        <ul className="lg:flex hidden gap-x-8">
          {["Home", "Pages", "Portfolio", "Blog", "Shop", "Contact"]?.map(
            (item, idx) => <ListItem key={idx} name={item} />
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
