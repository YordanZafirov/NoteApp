import { Link } from "react-router-dom";
import styled from "styled-components";

export const NotFoundPage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const NotFoundTitle = styled.h1`
  color: #f44336;
  font-size: 5rem;
`;

export const NotFoundMessage = styled.h2`
  color: #f44336;
  font-size: 2rem;
`;

export const NotFoundLink = styled(Link)`
  color: #f44336;
  font-size: 1.5rem;
  text-decoration: none;
  margin-top: 1rem;
  transition: 0.3s;
  border: 1px solid #f44336;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background-color: #fff;

  &:hover {
    color: #d32f2f;
    background-color: #ffebee;
  }
`;
