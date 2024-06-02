import { useEffect, useState } from "react";
import { INotes } from "../../pages/MainPage/Notes/Notes.static";

const usePagination = (notes: INotes[]) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [notesPerPage] = useState(4);

  const sortedNotes = [...notes].reverse();

  const indexOfLastPost = currentPage * notesPerPage;
  const indexOfFirstPost = indexOfLastPost - notesPerPage;
  const currentPosts = sortedNotes.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(notes.length / notesPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    setCurrentPage(1);
  }, [notes]);

  return { currentPosts, currentPage, pageNumbers, sortedNotes, paginate };
};

export default usePagination;
