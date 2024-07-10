import Pagination from "@/app/shared/Pagination/Pagination";
import Chip from "@/app/shared/cards/Chip";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { format } from "url";
import EnquiryModal from "./EnquiryModal";
import { FiFilter } from "react-icons/fi";
import Filters from "./Filters";
import Img from "@/app/shared/Img";
import useScrollHidden from "@/app/utils/useScrollHidden";

const ProductsSection = ({ data, filters }: { data: any[]; filters: any }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [page, setPage] = useState(1);
  const products = data;
  const params = Object.fromEntries(searchParams.entries());
  const [isActive, setIsActive] = useState("");
  console.log({ data });
  useScrollHidden(isActive === "SIDEBAR");
  return (
    <>
      <div className="lg:col-span-9 space-y-8">
        <div className="flex lg:hidden items-center gap-x-2">
          <FiFilter />
          <div className="uppercase" onClick={() => setIsActive("SIDEBAR")}>
            Filters
          </div>
          {Object.values({ ...params, page: null })?.filter((e) => e !== null)
            ?.length > 0 && (
            <Chip
              className="ml-auto !pr-4"
              title="Clear Filters"
              onClick={() => {
                router.push(
                  format({
                    pathname: pathname,
                    query: "",
                  }),
                  {
                    scroll: false,
                  }
                );
              }}
            />
          )}
        </div>
        <div className="flex items-center gap-x-4 lg:!-mt-0">
          {Object.values({ ...params, page: null })?.map(
            (item, idx) =>
              item && (
                <Chip
                  key={idx}
                  title={item}
                  onClick={() => {
                    const newParams = { ...params };
                    delete newParams?.[Object.keys(params)?.[idx]];
                    router.push(
                      format({
                        pathname: pathname,
                        query: newParams,
                      }),
                      {
                        scroll: false,
                      }
                    );
                  }}
                />
              )
          )}
        </div>
        <div className="space-y-6 flex flex-col items-center">
          <div className="grid pb-10 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-16">
            {products?.slice((page - 1) * 21, page * 21)?.map((item, idx) => (
              <div key={idx} className="space-y-4 group cursor-pointer">
                <div className="rounded-[43px] relative flex justify-center items-center">
                  <div
                    onClick={() => setIsActive("ADD_TO_CATALOG")}
                    className="absolute rounded-[43px] flex justify-center items-center group-hover:h-full h-0 w-0 duration-500 group-hover:w-full bg-primary2/60"
                  >
                    <BsPlusLg
                      size={57}
                      className="text-white opacity-0 group-hover:opacity-100 duration-500"
                    />
                  </div>
                  <img
                    className="rounded-[40px] min-h-[240px] min-w-[290px] h-full w-full object-cover"
                    src={item?.images?.[0]}
                  />
                </div>

                <div className="gap-y-4">
                  <div className="text-[24px] capitalize font-bold">
                    {item?.name}
                  </div>
                  <div className="text-xl font-sans">
                    {item?.material} {item?.styletype?.[0]}
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
      {isActive === "ADD_TO_CATALOG" && (
        <EnquiryModal close={() => setIsActive("")} />
      )}
      {isActive === "SIDEBAR" && (
        <div
          className="bg-white lg:hidden h-full w-full space-y-6 py-2 px-4 fixed left-0 top-0"
          id="sideBar"
        >
          <div className="flex justify-between items-center">
            <Img
              alt=""
              src="/images/icons/logo.png"
              isLocal
              height={20}
              width={202.21}
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
          <Filters
            filters={filters}
            className="overflow-scroll h-[calc(100vh-180px)]"
          />
        </div>
      )}
    </>
  );
};

export default ProductsSection;
