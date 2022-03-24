import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Cycle = styled.div`
  height: 25px;
  width: 25px;
  background-color: ${props => props.theme.filled ? '#B7160C' : 'transparent'};
  border: 1px solid grey;
  border-radius: 50%;
  margin: 20px;
  margin-top: 50px;
`;