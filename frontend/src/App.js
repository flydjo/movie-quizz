import './css/App.css';
import WelcomeScreen from "./pages/WelcomeScreen";
import Quizz from "./pages/Quizz";
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<WelcomeScreen />} />
        <Route path="/quizz" element={<Quizz />} />
      </Routes>
    </div>
  );
}

export default App;
