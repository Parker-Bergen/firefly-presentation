'use client'

import styled from "styled-components";

type PageSectionProps = {
    height: string
}

const PageSectionWrapper = styled.section<PageSectionProps>`
    height: ${props => props.height};
`;

export {PageSectionWrapper};