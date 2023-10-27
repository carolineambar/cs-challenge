import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, RepoWrapper, LinkWrapper, LinkGithub, LinkVoltar } from "./RepoDetails.styled";

const url = 'https://api.github.com/';

const RepoDetails = () => {
  const { id, repoId } = useParams();
  const [repoDetails, setRepoDetails] = useState({
    name: '',
    description: '',
    stargazers_count: 0,
    html_url: '',
    language: ''
  });

  useEffect(() => {
    const fetchRepoDetails = async () => {
        const response = await fetch(`${url}repos/${id}/${repoId}`);
        const data = await response.json();
        setRepoDetails(data);
    };

    fetchRepoDetails();
  }, [id, repoId]);

  return (
    <Container>
      <p>Detalhes do Repositório</p>
      <RepoWrapper>
        <p>Nome: {repoDetails.name}</p>
        {repoDetails.description ? (
              <p>Descrição: {repoDetails.description}</p>
              ) : (
                <p>Descrição: Sem descrição</p>
                )}
        {repoDetails.language ? (
              <p>Linguagem: {repoDetails.language}</p>
              ) : (
                <p>Linguagem: Não especificado</p>
                )}
        <p>&#9733;: {repoDetails.stargazers_count}</p>
      </RepoWrapper>
      <LinkWrapper>
        <LinkGithub>
          <a href={repoDetails.html_url}> Abrir no Github</a>
        </LinkGithub>
        <LinkVoltar>
          <Link to={`/users/${id}/repos`}>
            Voltar
          </Link>
        </LinkVoltar>
      </LinkWrapper>
    </Container>
  );
};

export default RepoDetails;
