import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieDetailsContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

export const MovieContent = styled.div`
  display: flex;
`;

export const MovieImage = styled.img`
  width: 300px;
  border-radius: 10px;
  margin-right: 20px;
`;

export const BackButton = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  &:hover {
    background-color: #0056b3;
  }
`;

export const MovieDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MovieTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const MovieInfo = styled.div`
  margin-bottom: 20px;
`;

export const Section = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
`;

export const MovieScore = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const MovieOverview = styled.div`
  margin-bottom: 10px;

  h3 {
    margin-bottom: 5px;
  }
`;

export const MovieGenres = styled.div`
  margin-bottom: 10px;

  h3 {
    margin-bottom: 5px;
  }
`;

export const LinkButton = styled(Link)`
  display: inline-block;
  margin-right: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  &:hover {
    background-color: #0056b3;
  }
`;
