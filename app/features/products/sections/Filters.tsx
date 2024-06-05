import ListItem from "@/app/shared/ListItem";
import { filters } from "@/app/utils/static";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { format } from "url";

const Filters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentItem = searchParams.get("id");
  const currentType = searchParams.get("type");
  return (
    <div className="col-span-3 space-y-10 md:block hidden">
      {filters?.map((item, idx) => (
        <div key={idx} className="space-y-4">
          <div className="text-xl font-bold">{item?.type}</div>
          <ul className="space-y-2 [&>*]:cursor-pointer">
            {item?.kind?.map((item1, idx1) => (
              <ListItem
                key={idx1}
                name={item1}
                onClick={() =>
                  router.push(
                    format({
                      pathname: pathname,
                      query: {
                        id: item1?.toLowerCase(),
                        type: currentType,
                      },
                    })
                  )
                }
                isSelected={currentItem === item1?.toLowerCase()}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Filters;
