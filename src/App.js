import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlannerPage from "./pages/User/Planner";
import Home from "./pages/User/Home";
import GlobalStyle from "./styles/GlobalStyle";
import SubjectPage from "./pages/User/Subject/index";
import Client from "./pages/User/Client";
import LoginPage from "./pages/User/Login/index";
import LoginPageAdmin from "./components/Admin/Login/index";
import { ClientContextProvider } from "./context/ClientContext";
import { UserContextProvider } from "./context/UserContext";
import { PlannerContextProvider } from "./context/PlannerContext";
import { SubjectContextProvider } from "./context/SubjectContext";
import { RemarkContextProvider } from "./context/RemarkContext";
import UsersAdm from "./pages/Adm/Users/index";
import Groups from "./pages/Adm/Groups";
import Customer from "./pages/Adm/Customer";
import Business from "./pages/Adm/Business";
import ReleaseTrain from "./pages/Adm/ReleaseTrain";

function App() {
  return (
    <>
      <UserContextProvider>
        <SubjectContextProvider>
          <RemarkContextProvider>
            <PlannerContextProvider>
              <ClientContextProvider>
                <Router>
                  <GlobalStyle />
                  <div className="App">
                    <Routes>
                      <Route path="/" element={<LoginPageAdmin />} />
                      
                      <Route
                        path="/home"
                        element={
                          localStorage.getItem("token") ? (
                            <Home />
                          ) : (
                            <LoginPage />
                          )
                        }
                      />
                      <Route 
                      path="/usersAdm"
                      element={
                        localStorage.getItem("token") ? (
                          <UsersAdm />
                        ) : (
                          <LoginPage/>
                        )
                      }
                      />
                      <Route 
                      path="/business"
                      element={
                        localStorage.getItem("token") ? (
                          <Business />
                        ) : (
                          <LoginPage/>
                        )
                      }
                      />
                      <Route 
                      path="/customer"
                      element={
                        localStorage.getItem("token") ? (
                          <Customer />
                        ) : (
                          <LoginPage/>
                        )
                      }
                      />
                      <Route 
                      path="/groups"
                      element={
                        localStorage.getItem("token") ? (
                          <Groups />
                        ) : (
                          <LoginPage/>
                        )
                      }
                      />
                      <Route 
                      path="/releasetrain"
                      element={
                        localStorage.getItem("token") ? (
                          <ReleaseTrain />
                        ) : (
                          <LoginPage/>
                        )
                      }
                      />
                      <Route
                        path="/client"
                        element={
                          localStorage.getItem("token") ? (
                            <Client />
                          ) : (
                            <LoginPage />
                          )
                        }
                      />

                      <Route
                        path="/subject"
                        element={
                          localStorage.getItem("token") ? (
                            <SubjectPage />
                          ) : (
                            <LoginPage />
                          )
                        }
                      />
                      <Route
                        path="/planner"
                        element={
                          localStorage.getItem("token") ? (
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
            </PlannerContextProvider>
          </RemarkContextProvider>
        </SubjectContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
