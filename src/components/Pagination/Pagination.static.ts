export interface IPagination {
    paginate: (pageNumber: number) => void;
    pageNumbers: number[];
    currentPage: number;
}