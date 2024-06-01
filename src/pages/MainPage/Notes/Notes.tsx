import CreateNote from "../CreateNote/CreateNote";
import Note from "../Note/Note";
import useNotes from "./Notes.logic";

const Notes = () => {
  const {
    inputText,
    notes,
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
    <div>
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
    </div>
  );
};

export default Notes;
