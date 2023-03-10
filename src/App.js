import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
            <Route path="/planner" element={<PlannerCard />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
