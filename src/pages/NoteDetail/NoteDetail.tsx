import { useParams } from "react-router-dom";
import useNotes from "../MainPage/Notes/Notes.logic";
import Note from "../MainPage/Note/Note";
import CreateNote from "../../components/CreateNote/CreateNote";
import { NoteDetailStyle } from "./NoteDetails.style";

const NoteDetail = () => {
  const { id } = useParams();
  const {
    notes,
    editToggle,
    inputText,
    title,
    setInputText,
    setTitle,
    saveHandler,
    editHandler,
    deleteHandler,
    characterLimit,
  } = useNotes();
  const note = notes.find((note) => note.id === id);

  if (!note) return;

  return (
    <NoteDetailStyle>
      {!note && <h1>Note not found</h1>}
      {editToggle === note?.id ? (
        <CreateNote
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
          id={note.id}
          title={note.title}
          text={note.text}
          editHandler={() => editHandler(note.id, note.text, note.title)}
          deleteHandler={() => deleteHandler(note.id)}
        />
      )}
    </NoteDetailStyle>
  );
};

export default NoteDetail;
