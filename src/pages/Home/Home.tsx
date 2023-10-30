import { Container, SearchForm, SearchField, SearchButton } from './Home.styled'
import React from "react"
import { useNavigate } from 'react-router-dom'

const Home = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = React.useState('')
  const navigate = useNavigate()

  return (
    <Container>
      <SearchForm onSubmit={(e) => {
        e.preventDefault()
        navigate(`/users/${searchTerm}`)
      }}>
        <label htmlFor="pesquisar">Pesquisar usuário:</label>
        <SearchField
          id="pesquisar"
          type="text" 
          placeholder="Nome de usuário do GitHub" 
          value={searchTerm} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
          autoFocus
        />
        <SearchButton type="submit">
          Pesquisar
        </SearchButton>
      </SearchForm>
    </Container>
  )
}

export default Home
