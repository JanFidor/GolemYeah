import './App.css';
import WelcomeView from './components/welcomeView';
import UniToolView from "./components/uniToolView";
import UniToolOutput from "./components/uniToolOutput";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <Routes>
        <Route path="/" element={<WelcomeView/>}/>
        <Route path="/uni-tool" element={<UniToolView/>}/>
        <Route path="/results" element={<UniToolOutput/>}/>
    </Routes>
  );
}

export default App;
