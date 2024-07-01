import EnquiryModal from "@/app/features/products/sections/EnquiryModal";
import Img from "@/app/shared/Img";
import ListItem from "@/app/shared/ListItem";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
  const [openModal, setOpenModal] = useState("");
  return (
    <div className="sticky z-20 sm:px-10 px-5" id="navbar">
      <div
        className="flex items-center z-10 container-lg justify-between py-7"
        id="navbar"
      >
        <Img
          alt=""
          src="/images/icons/logo.png"
          isLocal
          height={20.22}
          width={227.2}
          role="button"
          onClick={() => router.push("/")}
        />
        <ul className="lg:flex hidden gap-x-8">
          {[
            { name: "Home", path: "/" },
            { name: "Our Products", path: "/products" },
            { name: "Contact Us", action: "CONTACT_MODAL" },
          ]?.map((item, idx) => (
            <ListItem
              key={idx}
              name={item?.name}
              onClick={() =>
                item?.action
                  ? setOpenModal(item?.action)
                  : router.push(item?.path)
              }
            />
          ))}
        </ul>
        {/* <div className="flex items-center gap-x-8">
          <div className="relative">
            <SlBag className="h-[34px] w-[22px]" />
            <div className="h-[15px] w-[15px] bg-primary flex items-center justify-center text-[10px] text-white rounded-full absolute -right-1 font-bold bottom-0">
              0
            </div>
          </div>
          <FiSearch className="h-[26px] w-[26px]" />
        </div> */}
      </div>
      {openModal === "CONTACT_MODAL" && (
        <EnquiryModal close={() => setOpenModal("")} />
      )}
    </div>
  );
};

export default Navbar;
