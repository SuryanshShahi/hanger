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
          <button className="md:h-10 md:w-10 h-6 w-6 bg-primary2 items-center justify-center flex">
            <SlArrowRight
              className={`text-white md:text-lg text-xs ${props.page === props.totalPages && "cursor-no-drop"}`}
            />
          </button>
        }
        initialPage={props.page - 1}
        onPageChange={props.active}
        pageRangeDisplayed={width < 600 ? 0 : 2}
        pageCount={props.totalPages}
        previousLabel={
          <button className="md:h-10 md:w-10 h-6 w-6 bg-primary2 items-center justify-center flex">
            <SlArrowLeft
              className={`text-white md:text-lg text-xs ${props.page === 1 && "cursor-no-drop"}`}
            />
          </button>
        }
        containerClassName={"paginationBttns"}
        activeClassName={
          "bg-black items-center text-white flex cursor-pointer md:h-10 md:w-10 h-6 w-6"
        }
      />
    </div>
  );
};
export default Pagination;
