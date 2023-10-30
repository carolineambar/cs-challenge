import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from 'react';
import { Container, OrderingContainer, StarButton, ReposList, LinkVoltar, StarButtonContainer } from "./Repos.styled";
import { url } from "../../constants";


type Repository = {
    id: number;
    name: string;
    stargazers_count: number;
};

const Repos = () => {
    const { id } = useParams()
    const [repos, setRepos] = useState<Repository[]>([]);
    const [ordenacao, setOrdenacao] = useState('desc');

    useEffect(() => {
        const getRepos = async () => {
            const resposta = await fetch(`${url}users/${id}/repos`);
            const dados: Repository[] = await resposta.json();
            const reposOrdenados = [...dados];

            if (ordenacao === 'asc') {
                reposOrdenados.sort((a, b) => a.stargazers_count - b.stargazers_count);
            } else {
                reposOrdenados.sort((a, b) => b.stargazers_count - a.stargazers_count);
            }

            setRepos(reposOrdenados);
        };

        getRepos();
    }, [id, ordenacao]);

    return (
        <Container>
            <h2>Repositórios:</h2>
            <OrderingContainer>
                <p>Ordenar por estrelas:</p>
                <StarButtonContainer>
                    <StarButton onClick={() => setOrdenacao('asc')}>
                        &#9650; &#9733;
                    </StarButton>
                    <StarButton onClick={() => setOrdenacao('desc')}>
                        &#9660; &#9733;
                    </StarButton>
                </StarButtonContainer>
            </OrderingContainer>
            <ReposList>
                {repos.map((repo) => (
                    <li key={repo.id}>
                        <span>{repo.name}</span> - &#9733; {repo.stargazers_count} 
                        <Link to={`/users/${id}/repos/${repo.name}`}>
                            Ver detalhes
                        </Link>
                    </li>
                ))}
            </ReposList>
            <LinkVoltar to={`/users/${id}`}>
                Voltar
            </LinkVoltar>
        </Container>
    )
}

export default Repos;
