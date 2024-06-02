import styled from "styled-components";

export const StyledNote = styled.div`
  background-color: #d4edda;
  border-left: 10px solid #28a745;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  padding: 20px;
  width: 300px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const NoteForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CreateNoteTitleInput = styled.input`
  font-size: 1.5em;
  padding: 5px;
  border: none;
  border-bottom: 2px solid #28a745;
  outline: none;
  border-radius: 4px;

  &:focus {
    border-color: #218838;
  }
`;

export const CreateNoteTextArea = styled.textarea`
  font-size: 1em;
  padding: 10px;
  border: 1px solid #28a745;
  border-radius: 4px;
  outline: none;
  resize: none;

  &:focus {
    border-color: #218838;
  }
`;

export const CreateNoteFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const CreateNoteButton = styled.button`
  background-color: #28a745;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  padding: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }

  &:focus {
    outline: none;
  }
`;


export const CharacterLimit = styled.small`
  color: #6c757d;
`;