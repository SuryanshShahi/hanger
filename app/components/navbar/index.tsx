import EnquiryModal from "@/app/features/products/sections/EnquiryModal";
import Img from "@/app/shared/Img";
import ListItem from "@/app/shared/ListItem";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const router = useRouter();

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
  const pathname = usePathname();
  const [isActive, setIsActive] = useState("");
  const routes = [
    { name: "Home", path: "/", key: "home" },
    { name: "Our Products", path: "/products", key: "products" },
    {
      name: "Contact Us",
      onClick: () => setIsActive("ENQUIRY_MODAL"),
      key: "contact",
    },
  ];
  console.log({
    asdasadad: pathname
      ?.toLowerCase()
      .includes(routes?.[0]?.key?.toLowerCase()),
  });

  return (
    <>
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
            {routes.map((item, idx) => (
              <ListItem
                key={idx}
                name={item?.name}
                isSelected={pathname
                  ?.toLowerCase()
                  .includes(item?.key?.toLowerCase())}
                activeColor="text-primary2"
                onClick={
                  item.onClick ? item.onClick : () => router.push(item.path)
                }
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
          <GiHamburgerMenu
            className="sm:hidden"
            size={24}
            onClick={() => setIsActive(isActive === "SIDEBAR" ? "" : "SIDEBAR")}
          />
        </div>
        {isActive === "ENQUIRY_MODAL" && (
          <EnquiryModal close={() => setIsActive("")} className="max-[640px]:mx-5"/>
        )}
      </div>
      {isActive === "SIDEBAR" && (
        <div
          className="bg-white h-screen w-full space-y-6 py-2 px-4 fixed top-0"
          id="sideBar"
        >
          <div className="flex justify-between items-center">
            <Img
              alt=""
              src="/images/icons/logo.png"
              isLocal
              height={16.42}
              width={181.76}
              role="button"
              onClick={() => router.push("/")}
            />
            <div
              className="cursor-pointer text-4xl p-3"
              onClick={() => setIsActive("")}
            >
              &times;
            </div>
          </div>
          <div className={`space-y-5 font-extrabold mr-5`}>
            {routes?.map((item, idx) => (
              <div
                key={idx}
                className={`cursor-pointer animate-accordion ${
                  pathname?.toLowerCase().includes(item?.key?.toLowerCase()) &&
                  "text-primary2"
                }`}
                onClick={() => {
                  if (item.onClick) {
                    item.onClick();
                  } else {
                    router.push(item.path);
                    setIsActive("");
                  }
                }}
              >
                {item?.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
