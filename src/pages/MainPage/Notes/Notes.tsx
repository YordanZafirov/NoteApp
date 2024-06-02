import CreateNote from "../../../components/CreateNote/CreateNote";
import Note from "../Note/Note";
import useNotes from "./Notes.logic";
import { CenteredContainer, GridNotes } from "./Notes.style";
import usePagination from "../../../components/Pagination/Pagination.logic";
import Pagination from "../../../components/Pagination/Pagination";

const Notes = () => {
  const {
    inputText,
    editToggle,
    setInputText,
    title,
    setTitle,
    error,
    saveHandler,
    editHandler,
    deleteHandler,
    characterLimit,
    notes,
  } = useNotes();

  const { currentPosts, currentPage, paginate, pageNumbers } =
    usePagination(notes);

  return (
    <CenteredContainer>
      {editToggle === null ? (
        <CreateNote
          inputText={inputText}
          title={title}
          setInputText={setInputText}
          setTitle={setTitle}
          saveNote={saveHandler}
          editToggle={editToggle}
          characterLimit={characterLimit}
        />
      ) : null}

      {!currentPosts.length && <h2>No notes yet. Create one!</h2>}
      {error && <h2>{error}</h2>}
      <GridNotes>
        {currentPosts.map((note) =>
          editToggle === note.id ? (
            <CreateNote
              key={note.id}
              inputText={inputText}
              title={title}
              setInputText={setInputText}
              setTitle={setTitle}
              saveNote={saveHandler}
              editToggle={editToggle}
              characterLimit={characterLimit}
            />
          ) : (
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              text={note.text}
              editHandler={editHandler}
              deleteHandler={() => deleteHandler(note.id)}
            />
          )
        )}
      </GridNotes>

      <Pagination
        paginate={paginate}
        pageNumbers={pageNumbers}
        currentPage={currentPage}
      />
    </CenteredContainer>
  );
};

export default Notes;
