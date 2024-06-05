import { filters } from "@/app/utils/static";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { format } from "url";

const useProducts = () => {
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    router.replace(
      format({
        pathname: pathname,
        query: {
          id: filters[0]?.kind?.[0]?.toLowerCase(),
          type: "models",
        },
      })
    );
  }, []);
};

export default useProducts;
