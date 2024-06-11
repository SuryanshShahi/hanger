import ReactPaginate from "react-paginate";
import { usePagination } from "./views/usePagination";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Pagination = (props: any) => {
  const { width } = usePagination();
  return (
    <div className="flex my-10 justify-center">
      <ReactPaginate
        className="flex gap-x-1 sm:gap-x-2 mx-5 text-[10px] sm:text-sm items-center pagination"
        breakLabel="..."
        nextLabel={
          <button className="h-10 w-10 bg-primary2 items-center justify-center flex">
            <SlArrowRight
              size={18}
              className={`text-white ${props.page === props.totalPages && "cursor-no-drop"}`}
            />
          </button>
        }
        initialPage={props.page - 1}
        onPageChange={props.active}
        pageRangeDisplayed={width < 600 ? 0 : 2}
        pageCount={props.totalPages}
        previousLabel={
          <button className="h-10 w-10 bg-primary2 items-center justify-center flex">
            <SlArrowLeft
              size={18}
              className={`text-white  ${props.page === 1 && "cursor-no-drop"}`}
            />
          </button>
        }
        containerClassName={"paginationBttns"}
        activeClassName={
          "bg-black items-center text-white flex cursor-pointer h-10 w-10"
        }
      />
    </div>
  );
};
export default Pagination;
