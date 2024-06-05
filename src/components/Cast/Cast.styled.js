import styled from 'styled-components';

export const CastContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

export const CastItem = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  display: flex;
  align-items: center;

  h3 {
    margin: 0;
    font-size: 1.2rem;
    color: #333;
  }

  p {
    margin: 5px 0 0;
    color: #666;
  }

  img {
    width: 50px;
    height: 75px;
    object-fit: cover;
    margin-right: 15px;
    border-radius: 5px;
  }
`;

export const NoCastMessage = styled.p`
  font-size: 1.1rem;
  color: #666;
`;
