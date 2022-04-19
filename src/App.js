import bb8 from "./bb8.png";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={bb8}
            alt="Star Wars - BB-8"
            className="test-image img-fluid"
          />
          <h1 className="test-header">Hello Dictionary App!</h1>
        </header>

        <Footer />
      </div>
    </div>
  );
}

export default App;
