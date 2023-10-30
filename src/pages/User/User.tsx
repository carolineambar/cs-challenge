import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react';
import { Results, UserInfoContainer, Avatar,  UserInfo, NotFoundText, LinkWrapper, LinkRepo, Text, LinkVoltar, UserNotFound } from './User.styled'
import { url } from "../../constants";

type User = {
    followers: number,
    following: number,
    avatar_url: string,
    email: string,
    bio: string,
}

const User = () => {
    const { id } = useParams()
    const [userData, setUserData] = useState<User>()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getUsers = async () => {
            const resposta = await fetch(`${url}users/${id}`);
            if(resposta.ok) {
                const dados = await resposta.json();
                setUserData(dados);
            }
            setIsLoading(false)
        }
    
        getUsers();
    }, [id]);

    return (
        <Results>
            <UserInfoContainer>
            {isLoading && (<p>Carregando...</p>)}
                {!isLoading && !userData && (
                    <UserNotFound>
                        <Text>O usuário não foi encontrado.</Text>
                        <LinkVoltar to='/'>
                            Voltar
                        </LinkVoltar>
                    </UserNotFound>
                )}
                {userData && (
                    <>
                        <Avatar src={userData.avatar_url} />
                        <UserInfo>
                            <p>Usuário: {id}</p>
                            <p>Seguidores: {userData.followers}</p>
                            <p>Seguindo: {userData.following}</p>
                            <p>E-mail: {userData.email || <NotFoundText>Não encontrado</NotFoundText>}</p>
                            <p>Bio: {userData.bio || <NotFoundText>Não encontrado </NotFoundText>}</p>
                            <LinkWrapper>
                                <LinkRepo to={`/users/${id}/repos`}>  
                                    <Text>Ver Repositórios</Text>
                                </LinkRepo>

                                <LinkVoltar to="/">
                                    Voltar
                                </LinkVoltar>
                            </LinkWrapper>
                        </UserInfo>
                    </>
                )}
            </UserInfoContainer>
        </Results>
    );
}


export default User;
