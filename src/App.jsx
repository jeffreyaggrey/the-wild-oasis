import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/Input';

const H1 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const StyledApp = styled.div`
  background-color: burlywood;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The Wild Oasis</H1>
        <Button onClick={() => alert('Check in')}>Click Me</Button>
        <Input type="text" placeholder="Enter your name" />
      </StyledApp>
    </>
  );
}

export default App;
