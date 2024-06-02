import styled from "styled-components";

export const NoteContainer = styled.div`
  background-color: #fff3cd;
  border-left: 10px solid #ffc107;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  padding: 20px;
  padding-bottom: 60px;
  width: 300px;
  position: relative;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const NoteContent = styled.div`
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
`;

export const NoteTitle = styled.h1`
  font-size: 1.5em;
  margin: 0;
  padding: 3px 0;
  text-transform: capitalize;
  border-bottom: 1px solid #ffc107;
`;

export const NoteText = styled.p`
  font-size: 1em;
  margin: 10px 0 0;
  white-space: pre-wrap;
  overflow-wrap: break-word;
`;

export const NoteFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  width: 100%;
  position: absolute;
  bottom: 15px;
  right: 15px;
`;

export const NoteButton = styled.button`
  background-color: #ffc107;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  padding: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0a800;
  }

  &:focus {
    outline: none;
  }
`;
