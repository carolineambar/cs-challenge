import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, RepoWrapper, LinkWrapper, LinkGithub, LinkVoltar } from "./RepoDetails.styled";
import { url } from '../../constants';

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
      {
        repoDetails.name && (
          <RepoWrapper>
            <p>Nome: {repoDetails.name}</p>
            <p>Descrição: {repoDetails.description || 'Sem descrição'}</p>
            <p>Linguagem: {repoDetails.language || 'Não especificado'}</p>
            <p>&#9733;: {repoDetails.stargazers_count}</p>
          </RepoWrapper>
        )
      }
      <LinkWrapper>
      <LinkGithub href={repoDetails.html_url} target="_blank">
        Abrir no Github
      </LinkGithub>
      <LinkVoltar to={`/users/${id}/repos`}>
            Voltar
      </LinkVoltar>
      </LinkWrapper>
    </Container>
  );
};

export default RepoDetails;
