import { INote } from "./Note.static";
import {
  NoteButton,
  NoteContainer,
  NoteContent,
  NoteFooter,
  NoteText,
  NoteTitle,
} from "./Note.style";

const Note: React.FC<INote> = ({
  id,
  title,
  text,
  editHandler,
  deleteHandler,
}) => {
  return (
    <NoteContainer>
      <NoteContent>
        <NoteTitle>{title}</NoteTitle>
        <NoteText>{text}</NoteText>
      </NoteContent>
      <NoteFooter className="note-footer">
        <NoteButton onClick={() => editHandler(id, title, text)}>
          Edit
        </NoteButton>
        <NoteButton onClick={() => deleteHandler(id)}>Delete</NoteButton>
      </NoteFooter>
    </NoteContainer>
  );
};

export default Note;
