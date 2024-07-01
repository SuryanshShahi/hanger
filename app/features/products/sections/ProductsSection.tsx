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
console.log({params});

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
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-x-2">
              <FiFilter /> <div className="uppercase">Filter & Sort</div>
            </div>
            <div className="flex gap-x-8 [&>*]:cursor-pointer">
              {["Models", "Products"]?.map((item, idx) => (
                <ListItem
                  key={idx}
                  name={item}
                  onClick={() =>
                    router.push(
                      format({
                        pathname: pathname,
                        query: {
                          ...params,
                          type: item?.toLowerCase(),
                        },
                      }),
                      {
                        scroll: false,
                      }
                    )
                  }
                  isSelected={currentType === item?.toLowerCase()}
                />
              ))}
            </div>
          </div>
          <div className="grid pb-10 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-16">
            {products?.slice((page - 1) * 20, page * 20)?.map((item, idx) => (
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
                  <div className="text-[26px] capitalize font-bold">
                    {item?.name}
                  </div>
                  <div className="text-xl font-bold">
                    {item?.hook} {item?.styletype?.[0]}
                  </div>
                  <div className="text-xl font-bold">L: 25 CM x H: 40CM</div>
                </div>
              </div>
            ))}
          </div>
          <Pagination
            page={page}
            totalPages={Math.ceil(products?.length / 20)}
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
