import Img from "@/app/shared/Img";
import ListItem from "@/app/shared/ListItem";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { SlBag } from "react-icons/sl";
import EnquiryModal from "@/app/features/products/sections/EnquiryModal";


const Navbar = () => {
  const router = useRouter();
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  useEffect(() => {
    const slideNav = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        if (window.scrollY >= 100) {
          navbar.classList.add("active");
        } else {
          navbar.classList.remove("active");
        }
      }
    };

    window.addEventListener("scroll", slideNav);
    return () => window.removeEventListener("scroll", slideNav);
  }, []);

  // Function to toggle modal open/close
  const toggleEnquiryModal = () => {
    setIsEnquiryModalOpen(!isEnquiryModalOpen);
  };

  return (
    <div className="sticky z-20 px-5" id="navbar">
      <div className="flex items-center z-10 justify-between py-8 container-sm">
        <Img
          alt=""
          src="/images/icons/logo.png"
          isLocal
          height={16.42}
          width={181.76}
          role="button"
          onClick={() => router.push("/")}
        />
        <ul className="lg:flex hidden gap-x-8">
          {[
            { name: "Home", path: "/" },
            { name: "Our Products", path: "/products" },
            { name: "Contact Us", onClick: toggleEnquiryModal }, // Added Contact Us as list item
          ].map((item, idx) => (
            <ListItem
              key={idx}
              name={item.name}
              onClick={item.onClick ? item.onClick : () => router.push(item.path)} // Handle click event
            />
          ))}
        </ul>
        {/* <div className="flex items-center gap-x-8">
          <div className="flex items-center gap-x-8">
            <div className="relative">
              <SlBag className="h-[34px] w-[22px]" />
              <div className="h-[15px] w-[15px] bg-primary flex items-center justify-center text-[10px] text-white rounded-full absolute -right-1 font-bold bottom-0">
                0
              </div>
            </div>
            <FiSearch className="h-[26px] w-[26px]" />
          </div>
        </div> */}
      </div>
      {/* Render EnquiryModal component if isEnquiryModalOpen is true */}
      {isEnquiryModalOpen && <EnquiryModal close={toggleEnquiryModal} />}
    </div>
  );
};

export default Navbar;
