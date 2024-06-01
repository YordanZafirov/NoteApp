import styled from "styled-components";

export const StyledNote = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 2rem;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    max-width: 1200px;
    width: 90%;
    margin: 1rem auto;
    background-color: #fff;

    input,
    textarea {
      padding: 0.5rem;
      border: 1px solid #e0e0e0;
      border-radius: 5px;
    }

    input {
      font-size: 1.5rem;
    }

    textarea {
      resize: none;
      font-size: 1rem;
    }
  }

  .note-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
