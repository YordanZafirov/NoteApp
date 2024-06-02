import CreateNote from "../CreateNote/CreateNote";
import Note from "../Note/Note";
import useNotes from "./Notes.logic";
import { CenteredContainer, GridNotes } from "./Notes.style";

const Notes = () => {
  const {
    inputText,
    sortedNotes: notes,
    editToggle,
    setInputText,
    title,
    setTitle,
    saveHandler,
    editHandler,
    deleteHandler,
    characterLimit,
  } = useNotes();
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

      <GridNotes>
        {notes.map((note) =>
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
    </CenteredContainer>
  );
};

export default Notes;
