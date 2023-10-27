import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchForm = styled.form`
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
  border: 1px solid var(--light-grey);
  outline: none;

    &::placeholder {
      color: var(--light-grey);
    }
`;

export const SearchButton = styled.button`
  padding: 1rem;
  font-size: 19px;
  border-radius: 4px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  cursor: pointer;
`;
