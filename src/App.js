import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlannerPage from "./pages/User/Planner";
import Home from "./pages/User/Home";
import GlobalStyle from "./styles/GlobalStyle";
import SubjectPage from "./pages/User/Subject/index";
import Client from "./pages/User/Client";

import LoginPage from "./pages/Login/index";
import GroupsList from "./pages/Admin/GroupsList/index";

import AdmUser from "./pages/Admin/User/index";
import Customer from "./pages/Adm/Customer/index";

import HomeAdm from "./pages/Adm/Home";

import { ClientContextProvider } from "./context/ClientContext";
import { PlannerContextProvider } from "./context/PlannerContext";
import { SubjectContextProvider } from "./context/SubjectContext";
import { RemarkContextProvider } from "./context/RemarkContext";
import { GroupListContextProvider } from "./context/GroupListContext";
import { BusinessContextProvider } from "./context/BusinessContext";
import { ReleaseContextProvider } from "./context/ReleaseContext";
import { useUserContext } from "./hook/useUserContext";
import UsersAdm from "./pages/Adm/Users/index";


import Groups from "./pages/Adm/Groups";

import Business from "./pages/Adm/Business";

import ReleaseTrainPage from "./pages/Adm/ReleaseTrain";


function App() {
  const { user } = useUserContext();
  return (
    <>

      <SubjectContextProvider>
        <RemarkContextProvider>
          <PlannerContextProvider>
            <ClientContextProvider>
              <GroupListContextProvider>
                  <BusinessContextProvider>
                    <ReleaseContextProvider>
              
                <Router>
                  <GlobalStyle />
                  <div className="App">
                    <Routes>
                      <Route path="/" element={<LoginPage />} />

                      <Route
                        path="/home"
                        element={
                          !localStorage.getItem("token") ? (
                            <LoginPage />
                          ) : user.level > 1 ? (
                            <HomeAdm />
                          ) : (
                            <Home />
                          )
                        }
                      />
                      <Route
                        path="/usersAdm"
                        element={
                          localStorage.getItem("token") ? (
                            <AdmUser />
                          ) : (
                            <LoginPage />
                          )
                        }
                      />
                      <Route
                        path="/business"
                        element={
                          localStorage.getItem("token") ? (
                            <Business />
                          ) : (
                            <LoginPage />
                          )
                        }
                      />
                      <Route
                        path="/customer"
                        element={
                          localStorage.getItem("token") ? (
                            <Customer />
                          ) : (
                            <LoginPage />
                          )
                        }
                      />
                      <Route
                        path="/groups"
                        element={
                          localStorage.getItem("token") ? (
                            <Groups />
                          ) : (
                            <LoginPage />
                          )
                        }
                      />
                      <Route
                        path="/releasetrain"
                        element={
                          localStorage.getItem("token") ? (
                            <ReleaseTrainPage/>
                          ) : (
                            <LoginPage />
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
              
                    </ReleaseContextProvider>  
                </BusinessContextProvider>

                </GroupListContextProvider>
              </ClientContextProvider>
            </PlannerContextProvider>
          </RemarkContextProvider>
        </SubjectContextProvider>

    </>
  );
}

export default App;
