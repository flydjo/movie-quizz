import './css/App.css';
import WelcomeScreen from "./pages/WelcomeScreen";
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<WelcomeScreen />} />
      </Routes>
    </div>
  );
}

export default App;
