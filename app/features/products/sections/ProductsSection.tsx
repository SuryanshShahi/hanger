import Img from "@/app/shared/Img";
import ListItem from "@/app/shared/ListItem";
import Button from "@/app/shared/button/Button";
import { products } from "@/app/utils/static";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BsPlusLg } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import { format } from "url";

const ProductsSection = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentItem = searchParams.get("id");
  const currentType = searchParams.get("type");
  return (
    <div className="col-span-9 space-y-8">
      <div className="space-y-6">
        <h1 className="uppercase text-5xl font-bold">Wooden</h1>
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
                        id: currentItem,
                        type: item?.toLowerCase(),
                      },
                    })
                  )
                }
                isSelected={currentType === item?.toLowerCase()}
              />
            ))}
          </div>
        </div>
        <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-x-6 gap-y-16">
          {products?.map((item, idx) => (
            <div key={idx} className="space-y-4 group cursor-pointer">
              <div className="rounded-[43px] relative flex justify-center items-center">
                <div className="absolute rounded-[43px] flex justify-center items-center group-hover:h-full h-0 w-0 duration-500 group-hover:w-full bg-primary2/60">
                  <BsPlusLg
                    size={57}
                    className="text-white opacity-0 group-hover:opacity-100 duration-500"
                  />
                </div>
                <Img
                  src={item?.image}
                  alt={item?.image}
                  height={330}
                  width={330}
                  isLocal
                />
              </div>
              <div className="text-xl font-bold">{item?.name}</div>
              <div className="flex gap-x-1">
                {item?.colors?.map((color, idx1) => (
                  <div
                    className="h-3 w-3 rounded-full"
                    key={idx1}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <div className="text-[26px] font-bold">{item?.price}</div>
            </div>
          ))}
        </div>
        <Button size="lg" className="!px-20 bg-[#323334] hover:bg-[#323334]/90">
          Load More Products
        </Button>
      </div>
    </div>
  );
};

export default ProductsSection;
