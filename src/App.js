import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlannerPage from "./pages/User/Planner";
import Home from "./pages/User/Home";
import GlobalStyle from "./styles/GlobalStyle";
import SubjectPage from "./pages/User/Subject/index";
import Client from "./pages/User/Client";
import LoginPage from "./pages/User/Login/index";
import GroupsList from "./pages/Admin/GroupsList/index";
import LoginPageAdmin from "./components/Admin/Login/index";
import { ClientContextProvider } from "./context/ClientContext";
import { UserContextProvider } from "./context/UserContext";
import { PlannerContextProvider } from "./context/PlannerContext";
import { SubjectContextProvider } from "./context/SubjectContext";
import { RemarkContextProvider } from "./context/RemarkContext";
import {GroupListContextProvider} from "./context/GroupListContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <SubjectContextProvider>
          <RemarkContextProvider>
            <PlannerContextProvider>
              <ClientContextProvider>
                <GroupListContextProvider>
                <Router>
                  <GlobalStyle />
                  <div className="App">
                    <Routes>
                      <Route path="/" element={<LoginPageAdmin />} />
                      <Route path="/loginClient" element={<LoginPage />} />
                      <Route
                        path="/home"
                        element={
                          localStorage.getItem("token") !== false ? (
                            <Home />
                          ) : (
                            <LoginPage />
                          )
                        }
                      />
                      <Route
                        path="/client"
                        element={
                          localStorage.getItem("token") !== false ? (
                            <Client />
                          ) : (
                            <LoginPage />
                          )
                        }
                      />

                      <Route
                        path="/subject"
                        element={
                          localStorage.getItem("token") !== false ? (
                            <SubjectPage />
                          ) : (
                            <LoginPage />
                          )
                        }
                      />
                      <Route
                        path="/planner"
                        element={
                          localStorage.getItem("token") !== false ? (
                            <PlannerPage />
                          ) : (
                            <LoginPage />
                          )
                        }
                      />
                        <Route
                        path="/groups"
                        element={
                          localStorage.getItem("token") !== false ? (
                            <GroupsList />
                          ) : (
                            <LoginPage />
                          )
                        }
                      />
                    </Routes>
                  </div>
                </Router>
                </GroupListContextProvider>
              </ClientContextProvider>
            </PlannerContextProvider>
          </RemarkContextProvider>
        </SubjectContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
