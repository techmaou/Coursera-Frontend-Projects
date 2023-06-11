import logo from './logo.svg';
import './App.css';

function Heading() {
  let title = "This is an h1 heading";
  return <h1>{title}</h1>;
}

function App() {
  return  <Heading/>;
}

export default App;
