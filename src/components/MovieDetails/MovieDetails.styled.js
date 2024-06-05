import styled from 'styled-components';

export const MovieDetailsContainer = styled.div`
  padding: 20px;
  background-color: #f0f0f0;

  h1 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 20px;
  }

  a {
    display: inline-block;
    margin-right: 10px;
    text-decoration: none;
    color: #000;

    &:hover {
      text-decoration: underline;
    }
  }
`;
