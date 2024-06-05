import styled from 'styled-components';

export const SearchBar = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #007bff;
  border-radius: 4px 0 0 4px;
  outline: none;
  width: 300px;

  &:focus {
    border-color: #0056b3;
  }
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: 2px solid #007bff;
  border-radius: 0 4px 4px 0;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }
`;
