import "./App.css";
import { Navy } from "./components/Navy";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navy />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
