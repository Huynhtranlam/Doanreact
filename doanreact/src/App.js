import logo from './logo.svg';
import './App.css';
import CenteredDiv from './component/CenteredDiv.js';

function App() {
  return (
    <div className="App">
      <CenteredDiv />
      <Container /> /
    </div>
  );
}



function Container() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}

export default App;
