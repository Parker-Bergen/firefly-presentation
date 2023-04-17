import styled from "styled-components";
import {motion} from "framer-motion";


interface FlameProps {
    active: boolean
}

const Flame = styled.div<FlameProps>`
  width: 150px;
  height: 150px;
  background: linear-gradient(-45deg, red, orange);
  border-radius: 150px 150px 0px 150px;
  transform: rotate(45deg);
  animation: 0.1s flame infinite;
  filter: blur(10px);
  position: relative;
  box-shadow: 17px 20px 90px #700;
  border: 45px solid black;
  border-left-width: 25px;
  border-top-width: 25px;
  display: ${props=> props.active? null: "none"};

  &:after,
  &:before {
    content: "";
    width: 100px;
    height: 100px;
    display: block;
    position: absolute;
    background: linear-gradient(-45deg, red, orange);
    animation: 0.2s flame infinite;
    transform: scale(0.8) rotate(20deg);
    border-radius: 100px 100px 0px 100px;
    top: 20px;
  }
  &:before {
    top: 0;
    animation-duration: 0.09s;
    transform: scale(0.9) rotate(-15deg) translate(10px, 0px);
  }

  @keyframes flame{
    0% {height:150px; width:150px;}
    50% {height:140px; width:140px;}
    100% {height:150px; width:150px;}
  }
`;

interface RocketWrapperProps {
    height: number
} 
const RocketWrapper = styled(motion.div)<RocketWrapperProps>`
  position: absolute;
  top: -${props=> (props.height/2)+50}px;
`;  

const ResetButton= styled(motion.div)`
  border-radius: 20px;
  border: 2px solid white;
  text-align: center;
  padding: 10px;
  cursor: pointer;
`;

interface RocketContainerProps {
    width: number
} 
const RocketContainer = styled.div<RocketContainerProps>`
  position: relative;
  width: ${props=> props.width}px;
  margin-left: 20px;
`;


export {Flame, RocketWrapper, ResetButton, RocketContainer};