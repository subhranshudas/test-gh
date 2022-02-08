// import 'dotenv/config'
import './App.css';

function App() {

  console.log("test--> ", process.env);

  return (
    <div className="App">
      <header className="App-header">
        Testing Github actions and deployment

        <div>
          <p>Displaying ENV values: </p>
          <p>JUNK_KEY : {process.env.JUNK_KEY}</p>
          <p>FAKE_SECRET : {process.env.FAKE_SECRET}</p>
          <hr />

          <p>REACT JUNK_KEY : {process.env.REACT_APP_JUNK_KEY}</p>
          <p>REACT FAKE_SECRET : {process.env.REACT_APP_FAKE_SECRET}</p>

          <hr />

          <p>SAMPLE_CHECK_SECRET: {process.env.SAMPLE_CHECK_SECRET}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
