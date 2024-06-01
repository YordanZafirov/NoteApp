import { CreateNoteInterface } from "./CreateNote.static";
import { StyledNote } from "./CreateNote.style";

const CreateNote: React.FC<CreateNoteInterface> = ({
  inputText,
  characterLimit,
  setInputText,
  saveNote,
}) => {
  return (
    <StyledNote>
      <form>
        <input type="text" placeholder="Title" />
        <textarea
          cols={12}
          rows={6}
          placeholder="Take a note..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          maxLength={150}
        />
        <div className="note-footer">
          <small>Character limit: {characterLimit}</small>
          <button type="submit" onClick={saveNote}>
            Save
          </button>
        </div>
      </form>
    </StyledNote>
  );
};

export default CreateNote;
