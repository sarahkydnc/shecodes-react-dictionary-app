import bb8 from "./bb8.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={bb8}
          alt="Star Wars - BB-8"
          className="test-image img-fluid"
        />
        <h1 className="test-header">Hello Dictionary App!</h1>
      </header>
    </div>
  );
}

export default App;
