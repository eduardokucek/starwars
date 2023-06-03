import "./App.css";

import Films from "./components/Films/films";
import Characters from "./components/Characters/characters";

function App() {
  return (
    <>
      <header className="header_page">Star Wars Universe</header>
      <div className="container">
        <Films />
        <Characters />
      </div>
    </>
  );
}

export default App;
