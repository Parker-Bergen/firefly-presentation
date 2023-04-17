'use client'
import styled from "styled-components";
import { Bubble } from "../../styles/styles";


type IconGridProps = {
    cols: number
}

const IconGrid = styled.div<IconGridProps>`
    display: grid;
    grid-template-columns: repeat(${props=> props.cols}, 1fr);
    grid-gap: 10px;
    padding: 20px;
`;

const IconBubbleWrapper = styled(Bubble)`
    position: absolute;
    top: -40px;
    left: calc(50% - 40px);
    background: linear-gradient(0.15turn, #d4df4c, #bababa);
    color: black;
    font-size: 40px;
    padding: 20px;
    overflow: visible;
    cursor: pointer;
    justify-self: center;
`;

const TextBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items:start;
    flex-direction: column;
    border-radius: 20px;
    border: 1px solid white;
    padding: 50px 10px 10px 10px;
    height: 100%;
`;

const IconGridItem = styled.div`
    position: relative;
`;


export {IconGrid, IconBubbleWrapper, TextBlock, IconGridItem};