import { ICreateNote } from "./CreateNote.static";
import {
  CharacterLimit,
  TitleCharacterLimit,
  CreateNoteButton,
  CreateNoteFooter,
  CreateNoteTextArea,
  CreateNoteTitleInput,
  NoteForm,
  StyledNote,
} from "./CreateNote.style";

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
      <NoteForm onSubmit={saveNote}>
        <CreateNoteTitleInput
          type="text"
          placeholder="Title"
          maxLength={30}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TitleCharacterLimit>
          {30 - title.length} characters left
        </TitleCharacterLimit>
        <CreateNoteTextArea
          cols={12}
          rows={6}
          placeholder="Take a note..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          maxLength={150}
        />
        <CreateNoteFooter>
          <CharacterLimit>Character limit: {characterLimit}</CharacterLimit>
          <CreateNoteButton type="submit">
            {editToggle ? "Update" : "Save"}
          </CreateNoteButton>
        </CreateNoteFooter>
      </NoteForm>
    </StyledNote>
  );
};

export default CreateNote;
