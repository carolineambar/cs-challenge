import { Container, SearchWrapper, SearchField, SearchButton } from './Home.styled'
import React from "react"

const Home = (): JSX.Element => {
    
    const [searchTerm, setSearchTerm] = React.useState('')

  return (
    <Container>
      
      <SearchWrapper>
        <p>Pesquisar usuário:</p>
        <SearchField 
          type="text" 
          placeholder="Nome de usuário do GitHub" 
          value={searchTerm} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
          autoFocus
        />
        <SearchButton to={`/users/${searchTerm}`}>
          Pesquisar
        </SearchButton>
      </SearchWrapper>
    </Container>
  )
}

export default Home
