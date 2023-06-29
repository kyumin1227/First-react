import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
// props를 이용한 속성 값 지정
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

// Box값을 상속 (기존 값 + 추가한 값)
const Circle = styled(Box)`
  border-radius: 50px;
`;

const Btn = styled.button`
  background-color: tomato;
  color: white;
  border: 0;
  border-radius: 15px;
`



function App() {
  return (
    <Father>
      <Btn>Log in</Btn>
      <Btn as="a" href="/">Log in</Btn>
    </Father>
  );
}

export default App;
