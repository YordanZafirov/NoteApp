import { ICreateNote } from "./CreateNote.static";
import { StyledNote } from "./CreateNote.style";

const CreateNote: React.FC<ICreateNote> = ({
  inputText,
  title,
  characterLimit,
  editToggle,
  setInputText,
  setTitle,
  saveNote,
}) => {
  return (
    <StyledNote>
      <form onSubmit={saveNote}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
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
          <button type="submit">{editToggle ? "Update" : "Save"}</button>
        </div>
      </form>
    </StyledNote>
  );
};

export default CreateNote;
