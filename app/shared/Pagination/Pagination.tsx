import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import ReactPaginate from "react-paginate";
import { usePagination } from "./views/usePagination";

const Pagination = (props: any) => {
  const { width } = usePagination();
  const isFirstPage = props.page === 1;
  const isLastPage = props.page === props.totalPages;

  return (
    <div className="flex my-10 justify-center">
      <ReactPaginate
        className="flex gap-x-1 sm:gap-x-2 mx-5 text-[10px] sm:text-sm items-center"
        breakLabel="..."
        nextLabel={
          <button
            className={`md:h-10 md:w-10 h-8 w-8 flex items-center justify-center bg-primary2 rounded ${
              isLastPage ? "cursor-no-drop opacity-50" : "hover:bg-primary2-light"
            }`}
            aria-label="Next page"
            disabled={isLastPage}
          >
            <SlArrowRight className={`text-white md:text-lg text-sm`} />
          </button>
        }
        initialPage={props.page - 1}
        onPageChange={props.active}
        pageRangeDisplayed={width < 600 ? 1 : 2}
        pageCount={props.totalPages}
        previousLabel={
          <button
            className={`md:h-10 md:w-10 h-8 w-8 flex items-center justify-center bg-primary2 rounded ${
              isFirstPage ? "cursor-no-drop opacity-50" : "hover:bg-primary2-light"
            }`}
            aria-label="Previous page"
            disabled={isFirstPage}
          >
            <SlArrowLeft className={`text-white md:text-lg text-sm`} />
          </button>
        }
        containerClassName="paginationBttns"
        activeClassName="bg-primary text-white flex items-center justify-center md:h-10 md:w-10 h-8 w-8 rounded"
        pageClassName="flex items-center justify-center md:h-10 md:w-10 h-8 w-8 cursor-pointer rounded border border-gray-300"
        breakClassName="flex items-center justify-center md:h-10 md:w-10 h-8 w-8 cursor-pointer rounded border border-gray-300"
        disabledClassName="cursor-no-drop opacity-50"
      />
    </div>
  );
};

export default Pagination;
