import { IPagination } from "./Pagination.static";
import {
  PaginationNav,
  PaginationList,
  PaginationItem,
  PaginationLink,
} from "./Pagination.style";

const Pagination: React.FC<IPagination> = ({
  paginate,
  pageNumbers,
  currentPage,
}) => {
  return (
    <PaginationNav>
      <PaginationList>
        {pageNumbers.map((number) => (
          <PaginationItem key={number}>
            <PaginationLink
              onClick={() => paginate(number)}
              to="#"
              className={currentPage === number ? "active" : ""}
            >
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}
      </PaginationList>
    </PaginationNav>
  );
};

export default Pagination;
