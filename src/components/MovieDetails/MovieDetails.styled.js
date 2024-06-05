import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const MovieImage = styled.img`
  width: 200px;
  height: 300px;
  margin-right: 20px;
`;

export const BackButton = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  padding: 10px 20px;
  background-color: #61dafb;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #21a1f1;
  }
`;

export const MovieContent = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const MovieDescription = styled.div`
  max-width: 600px;
`;
