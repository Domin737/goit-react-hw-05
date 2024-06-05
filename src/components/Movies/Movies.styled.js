import styled from 'styled-components';

export const MoviesContainer = styled.div`
  padding: 20px;
  background-color: #f0f0f0;

  h1 {
    margin-bottom: 20px;
  }
`;

export const MovieItem = styled.li`
  list-style: none;
  margin-bottom: 10px;

  a {
    text-decoration: none;
    color: #007bff;
    font-size: 1.1rem;
    transition: color 0.3s;

    &:hover {
      color: #0056b3;
    }
  }
`;
