import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SidBar from "./components/SidBar";
import PlannerCard from "./components/PlannerCard";
import Home from "./pages/Home";
import GlobalStyle from "./styles/GlobalStyle";
import SubjectPage from "./pages/Subject";
import Client from "./pages/Client";
import RemarkPage from "./pages/Remark";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/client" element={<Client />} />
            <Route path="/subject" element={<SubjectPage />} />
            <Route path="/remark" element={<RemarkPage />} />
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
