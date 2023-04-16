'use client'
import Image from "next/image";
import styled from "styled-components";


const TitlePageContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items:center;
    height: 100%;
`;

const Primary = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    margin-right: 40px;
    font-size: 50px;
`;

const Secondary = styled.div`
    text-align: start;
    margin-left: 40px;
    font-size: 30px;
`;

const Separator = styled.div`
    background-color: white;
    width: 2px;
    height: 25%;
`;

const Logo = styled(Image)`
    margin-right: 15px;
    display: flex;
    justify-content: end;
    align-items: center;
`;



export {TitlePageContainer, Primary, Secondary, Separator, Logo};