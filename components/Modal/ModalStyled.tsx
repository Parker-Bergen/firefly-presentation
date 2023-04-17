'use client'
import styled from "styled-components";

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  overflow: auto;
  z-index: 20000;
  top: 0;
  left: 0;
  display: ${props=> props.hidden? "none": "flex"};
  justify-content: center;
  top: 0;
  left: 0;
`;

interface ModalContentProps{
    container: boolean;
}

const ModalContent = styled.div<ModalContentProps>`
  background: ${(props) => (props.container ? "#3d3d3d" : "none")};
  box-shadow: ${(props) =>
    props.container ? "0px 0px 20px rgba(0,0,0,0.4)" : "none"};
  border-radius: ${(props) => (props.container? "12px" : "0px")};
  text-align: ${(props) => (props.container ? "center" : "inherit")};
  width: auto;
  //max-width: 75%;
  width: 75%;
  height: 80%;
  padding: ${(props) => (props.container ? "20px" : "0px")};
  align-self: center;
  position: relative;
  text-align: ${(props) => (props.container ? "center" : "inherit")};
`;

export { ModalContainer, ModalContent };
