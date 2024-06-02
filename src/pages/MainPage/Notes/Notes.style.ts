import styled from "styled-components";

export const GridNotes = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 20px;
width: 100%;

@media (min-width: 768px) {
  gap: 40px;

}
`;

export const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  width: 100%;
`;
