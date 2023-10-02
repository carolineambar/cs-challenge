import React from 'react'
import { Container, SearchButton, SearchInput, SearchWrapper } from './Home.styled'

const Home = (): JSX.Element => {

  const [searchTerm, setSearchTerm] = React.useState('')

  return (
    <Container>
      <SearchWrapper>
        <SearchInput type="text" placeholder="Pesquisar" value={searchTerm} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}/>
        <SearchButton to={`/users/${searchTerm}`}>
          Pesquisar
        </SearchButton>
      </SearchWrapper>
    </Container>
  )
}

export default Home
