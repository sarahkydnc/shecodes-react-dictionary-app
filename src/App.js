import bb8 from "./bb8.png";
import Dictionary from "./Dictionary";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header mt-5">
          <img
            src={bb8}
            alt="Star Wars - BB-8"
            className="test-image img-fluid"
          />
          <h1 className="test-header text-center fw-bold">
            Hello Dictionary App!
          </h1>
        </header>

        <main>
          <Dictionary />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
