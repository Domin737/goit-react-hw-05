import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieDetailsContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px;
  border-radius: 10px;
`;

export const MovieImage = styled.img`
  width: 200px;
  height: 300px;
  margin-right: 20px;
  border-radius: 10px;
`;

export const BackButton = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const MovieContent = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const MovieDescription = styled.div`
  max-width: 600px;
`;

export const LinkButton = styled(Link)`
  display: inline-block;
  margin-right: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const MovieTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;
