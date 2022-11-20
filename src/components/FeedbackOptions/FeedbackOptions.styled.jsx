import styled from '@emotion/styled';

export const OptionsList = styled.ul`
  display: flex;
  justify-content: space-between;
  text-align: center;
  color: rgb(29 107 125);
`;

export const Item = styled.li`
  box-shadow: 0px 0px 10px 5px rgba(146, 207, 235, 0.75);
`;

export const Option = styled.button`
  padding: 5px 20px;
  font-weight: 700;
  font-size: 18px;
  color: rgb(44 127 146);
  border-radius: 5px;
  border: none;
  background-color: rgba(150, 248, 230, 0.8);
  cursor: pointer;

  :hover {
    color: rgb(179, 237, 250);
    background-color: rgb(69, 243, 185);
  }
`;
