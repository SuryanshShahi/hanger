import ListItem from "@/app/shared/ListItem";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FiFilter } from "react-icons/fi";
import { format } from "url";

const Filters = ({ filters }: { filters: any }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());
  const filter = [
    {
      id: "material",
      type: "Material Type",
      kind: filters?.materialType,
    },
    {
      id: "specialty",
      type: "Shop By Specialty",
      kind: filters?.specialtyType,
    },
    {
      id: "style",
      type: "Shop By Style",
      kind: filters?.styleTypes,
    },
    {
      id: "hook",
      type: "Shop By Hook Type",
      kind: filters?.hookTypes,
    },
  ];
  console.log(params);

  return (
    <div className="col-span-3 space-y-10 lg:block hidden">
      <div className="flex items-center gap-x-2">
        <FiFilter /> <div className="uppercase">Filters</div>
      </div>
      {filter?.map((item, idx) => (
        <div key={idx} className="space-y-4">
          <div className="text-xl font-bold">{item?.type}</div>
          <ul className="space-y-2 [&>*]:cursor-pointer">
            {item?.kind?.map((item1: any, idx1: number) => (
              <ListItem
                key={idx1}
                name={item1}
                onClick={() =>
                  router.push(
                    format({
                      pathname: pathname,
                      query: {
                        ...params,
                        [item?.id]: item1,
                      },
                    }),
                    {
                      scroll: false,
                    }
                  )
                }
                isSelected={Object.values(params)?.includes(item1)}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Filters;
