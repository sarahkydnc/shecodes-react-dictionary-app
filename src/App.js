import Dictionary from "./Dictionary";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">
          <h1 className="intro-header fw-bold">
            Hi, I'm W0-RD. <br />
            Your handy word explainer.
          </h1>
          <h4>What word are you looking for today?</h4>
        </header>

        <main>
          <Dictionary />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
