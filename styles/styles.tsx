import styled from "styled-components";

const PageTitle = styled.div`
  text-align: center;
  font-size: 30px;
  margin: 20px 0px;
`;

const Bubble = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageDescription = styled.div`
  text-align: start;
  font-size: 20px;
  margin: 20px 0px;
`;

export { PageTitle, Bubble, PageDescription };
