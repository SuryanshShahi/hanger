import { filters } from "@/app/utils/static";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { format } from "url";

const useProducts = () => {
  const router = useRouter();
  const pathname = usePathname();
};

export default useProducts;
