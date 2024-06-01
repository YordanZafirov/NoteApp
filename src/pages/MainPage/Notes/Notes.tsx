import CreateNote from "../CreateNote/CreateNote";
import useNotes from "./Notes.logic";

const Notes = () => {
  const { inputText, setInputText, saveHandler, characterLimit } = useNotes();
  return (
    <div className="notes">
      <CreateNote
        inputText={inputText}
        setInputText={setInputText}
        saveNote={saveHandler}
        characterLimit={characterLimit}
      />
    </div>
  );
};

export default Notes;
