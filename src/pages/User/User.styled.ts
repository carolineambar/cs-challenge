import styled from "styled-components";
import { Link } from "react-router-dom";
export const Results = styled.ul`
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 25px;
    background-color: var(--white);
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    color: var(--black);
`;

export const UserInfoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Avatar = styled.img`
    height: 300px;
    width: 300px;
    border-radius: 10px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.5);
    margin-left: 130px;
`;

export const UserInfo = styled.div`
    margin: 100px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const NotFoundText = styled.span`
    color: var(--light-grey);
`;

export const LinkWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const LinkRepo = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--blue);
    color: var(--white);
    font-weight: bold;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    height: 60px;
    width: 220px;
`;

export const Text = styled.p`
    text-align: center;
    margin: 0;
`;

export const LinkVoltar = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--light-grey);
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    height: 60px;
    width: 120px;    
`;

export const UserNotFound = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
`;
