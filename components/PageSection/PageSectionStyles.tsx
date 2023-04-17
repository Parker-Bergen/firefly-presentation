'use client'

import styled from "styled-components";

type PageSectionProps = {
    height: string
}

const PageSectionWrapper = styled.section<PageSectionProps>`
    height: ${props => props.height};
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    overflow: hidden;
`;

export {PageSectionWrapper};