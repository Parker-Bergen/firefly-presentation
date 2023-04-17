'use client'

import styled from "styled-components"

type IconContainerProps = {
    center?: boolean,
}

const IconContainer = styled.div<IconContainerProps>`
    position: relative;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

const Bubble = styled.div`
    border-radius: 50%;
    overflow: hidden;
    width: fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items:center;
`;

type IconBubbleProps = {
    top: number,
    left: number
}

const IconBubbleWrapper = styled(Bubble)<IconBubbleProps>`
    position: absolute;
    background: linear-gradient(0.15turn, #d4df4c, #bababa);
    top: ${props => props.top-50}px;
    left: ${props => props.left-60}px;
    color: black;
    font-size: 40px;
    padding: 20px;
    overflow: visible;
    cursor: pointer;
`;

const BubbleText = styled.div`
    position: absolute;
    padding: 10px;
    border-radius: 15px;
    background-color: #bababa;
    font-size: 20px;
    width: max-content;
`;

export {IconContainer, IconBubbleWrapper, Bubble, BubbleText};