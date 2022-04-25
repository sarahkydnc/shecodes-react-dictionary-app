import OldMac from "./old-imac.jpg";
import Dictionary from "./Dictionary";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={OldMac} alt="" className="background shadow-lg" />
      <div className="container">
        <div className="main-app">
          <header className="intro-header text-center">
            <h1 className="fw-bold">
              Hi, I'm W0-RD. <br />
              Your handy word explainer.
            </h1>
            <h4>What word are you looking for today?</h4>
          </header>

          <main>
            <Dictionary />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
