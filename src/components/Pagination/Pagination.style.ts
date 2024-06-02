import { Link } from "react-router-dom";
import styled from "styled-components";

export const PaginationNav = styled.nav`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const PaginationList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

export const PaginationItem = styled.li`
  margin: 0 5px;
`;

export const PaginationLink = styled(Link)`
  display: block;
  padding: 8px 12px;
  color: #007bff;
  text-decoration: none;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #007bff;
    color: white;
  }

  &.active {
    background-color: #007bff;
    color: white;
    border-color: #007bff;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }
`;
