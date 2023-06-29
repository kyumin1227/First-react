import styled, { keyframes } from "styled-components";

const Father = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const animation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform:rotate(360deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
  &:active {
    opacity: 0;
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${animation} 1s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 100px;
    }
  }
`;

function App() {
  return (
    <Father>
      <Box>
        <Emoji>😭</Emoji>
      </Box>
      <Emoji>🙈</Emoji>
    </Father>
  );
}

export default App;
