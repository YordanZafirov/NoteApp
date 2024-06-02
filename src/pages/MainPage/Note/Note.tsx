import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const location = useLocation();
  const isDetailView = location.pathname === `/note/${id}`;
  const navigate = useNavigate();
  return (
    <NoteContainer>
      <NoteContent>
        <NoteTitle>{title}</NoteTitle>
        <NoteText>{text}</NoteText>
      </NoteContent>
      <NoteFooter>
        {!isDetailView && (
          <Link to={`/note/${id}`}>
            <NoteButton>View</NoteButton>
          </Link>
        )}
        <NoteButton onClick={() => editHandler(id, text, title)}>
          Edit
        </NoteButton>
        <NoteButton
          onClick={() => {
            deleteHandler(id);
            navigate("/");
          }}
        >
          Delete
        </NoteButton>
      </NoteFooter>
    </NoteContainer>
  );
};

export default Note;
