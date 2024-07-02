import ListItem from "@/app/shared/ListItem";
import Pagination from "@/app/shared/Pagination/Pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import { format } from "url";
import EnquiryModal from "./EnquiryModal";

const ProductsSection = (data: { data: any[] }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentType = searchParams.get("type");
  const [page, setPage] = useState(1);
  const products = data?.data;
  const params = Object.fromEntries(searchParams.entries());
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="col-span-9 space-y-8">
        <div className="space-y-6">
          <h1 className="uppercase text-5xl font-bold">{params?.material}</h1>
          <p className="text-xl">
            Its easy to transform your bedroom interior with our great selection
            of accessories.
          </p>
        </div>
        <div className="space-y-6 flex flex-col items-center">
          <div className="grid pb-10 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-16">
            {products?.slice((page - 1) * 21, page * 21)?.map((item, idx) => (
              <div key={idx} className="space-y-4 group cursor-pointer">
                <div className="rounded-[43px] relative flex justify-center items-center">
                  <div
                    onClick={() => setIsActive(true)}
                    className="absolute rounded-[43px] flex justify-center items-center group-hover:h-full h-0 w-0 duration-500 group-hover:w-full bg-primary2/60"
                  >
                    <BsPlusLg
                      size={57}
                      className="text-white opacity-0 group-hover:opacity-100 duration-500"
                    />
                  </div>
                  <img
                    className="rounded-[43px] sm:w-[330px] sm:h-[330px] h-full w-full"
                    src={item?.images?.[0]}
                  />
                </div>

                <div className="gap-y-4">
                  <div className="text-[24px] capitalize font-bold">
                    {item?.name}
                  </div>
                  <div className="text-xl font-sans">
                    {item?.hook} {item?.styletype?.[0]}
                  </div>
                  {(item?.length || item?.height) && (
                    <div className="text-xl font-sans">
                    {item?.length && `L: ${item.length} CM`}
                    {item?.length && item?.height && " x "}
                    {item?.height && `H: ${item.height} CM`}
                  </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <Pagination
            page={page}
            totalPages={Math.ceil(products?.length / 21)}
            active={({ selected }: any) => {
              router.push(
                format({
                  pathname,
                  query: { ...params, page: `${selected + 1}` },
                }),
                {
                  scroll: false,
                }
              );

              window.scroll(0, 0);
              setPage(selected + 1);
            }}
          />
        </div>
      </div>
      {isActive && <EnquiryModal close={() => setIsActive(false)} />}
    </>
  );
};

export default ProductsSection;
