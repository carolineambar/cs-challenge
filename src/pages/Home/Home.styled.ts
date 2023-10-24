import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchWrapper = styled.header`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  
`;

export const SearchField = styled.input`
  width: 400px;
  height: 30px;
  padding-left: 10px;
  font-size: 17px;
  border-radius: 4px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  outline: none;

    &::placeholder {
      color: var(--light-grey);
    }
`;

export const SearchButton = styled(Link)`
  width: 110px;
  height: 30px;
  font-size: 19px;
  border-radius: 4px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  cursor: pointer;
`;
