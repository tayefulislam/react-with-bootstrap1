// import logo from './logo.svg';
import { Button, Spinner } from 'react-bootstrap';
import './App.css';
import CardGroup2 from './components/CardGroup2/CardGroup2';
// import CardGroup from './components/CardGroup/CardGroup';

function App() {
  return (
    <div className="App">
      <h1>React using bootstrap</h1>

      <Button variant='danger'>My Button</Button><br />

      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>

      <CardGroup2></CardGroup2>



    </div>
  );
}

export default App;
