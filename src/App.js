import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlannerPage from "./pages/Planner";
import Home from "./pages/Home";
import GlobalStyle from "./styles/GlobalStyle";
import SubjectPage from "./pages/Subject/index";
import Client from "./pages/Client";
import RemarkPage from "./pages/Remark";
import LoginPage from "./pages/Login/index";
import { ClientContextProvider } from "./context/ClientContext"
function App() {
  return (
    <>
     <ClientContextProvider>
      <Router>
      
        <GlobalStyle />
        <div className="App">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/home"
              element={
                localStorage.getItem("token") != false ? (
                  <Home />
                ) : (
                  <LoginPage />
                )
              }
            />
            <Route
              path="/client"
              element={
                localStorage.getItem("token") != false ? (
                  <Client />
                ) : (
                  <LoginPage />
                )
              }
            />
            <Route
              path="/subject"
              element={
                localStorage.getItem("token") != false ? (
                  <SubjectPage />
                ) : (
                  <LoginPage />
                )
              }
            />
            <Route
              path="/remark"
              element={
                localStorage.getItem("token") != false ? (
                  <RemarkPage />
                ) : (
                  <LoginPage />
                )
              }
            />
            <Route
              path="/planner"
              element={
                localStorage.getItem("token") != false ? (
                  <PlannerPage />
                ) : (
                  <LoginPage />
                )
              }
            />
          </Routes>
        </div>
      </Router>
      </ClientContextProvider>
    </>
  );
}

export default App;
