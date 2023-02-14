import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SidBar from "./components/SidBar";
import PlannerCard from "./components/PlannerCard";
import Home from "./pages/Home";
import GlobalStyle from "./styles/GlobalStyle";
import SubjectPage from "./pages/Subject";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/subject" element={<SubjectPage />} />
            <Route path="/sidbar" element={<SidBar />} />
            <Route path="/PlannerCard" element={<PlannerCard />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

// lib react-select, como passar os itens selecionados para outro campo
