import 'dotenv/config' 
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Testing Github actions and deployment

        <div>
          <p>Displaying ENV values: </p>
          <p>JUNK_KEY : {process.env.JUNK_KEY}</p>
          <p>FAKE_SECRET : {process.env.FAKE_SECRET}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
