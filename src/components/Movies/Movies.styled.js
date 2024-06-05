import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  font-size: 16px;
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #1e90ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #1c86ee;
  }
`;

export const MoviesList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const MovieItem = styled.li`
  margin-bottom: 10px;
`;

export const MovieLink = styled.a`
  text-decoration: none;
  color: #1e90ff;
  font-size: 18px;
  &:hover {
    text-decoration: underline;
  }
`;
