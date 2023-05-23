//Rotes
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Styles
import GlobalStyle from "./styles/GlobalStyle";
import SubjectPage from "./pages/User/Subject/index";

//Context
import { ClientContextProvider } from "./context/ClientContext";
import { CustomerContextProvider } from "./context/CustomerContext";
import { PlannerContextProvider } from "./context/PlannerContext";
import { SubjectContextProvider } from "./context/SubjectContext";
import { RemarkContextProvider } from "./context/RemarkContext";
import { GroupListContextProvider } from "./context/GroupListContext";
import { BusinessContextProvider } from "./context/BusinessContext";
import { ReleaseContextProvider } from "./context/ReleaseContext";
import { useUserContext } from "./hook/useUserContext";

//Page
import Home from "./pages/User/Home";
import HomeAdm from "./pages/Adm/Home";
import Groups from "./pages/Adm/Groups";
import Client from "./pages/User/Client";
import Business from "./pages/Adm/Business";
import LoginPage from "./pages/Login/index";
import PlannerPage from "./pages/User/Planner";
import RemarkPage from "./pages/User/Remark";
import AdmUser from "./pages/Admin/User/index";
import Customer from "./pages/Adm/Customer/index";
import ReleaseTrainPage from "./pages/Adm/ReleaseTrain";
import GroupsList from "./pages/Admin/GroupsList/index";
import RemarkReport from "./pages/Adm/RemarkReport/index"


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
                    <CustomerContextProvider>
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
                              path="/remarkreport"
                              element={
                                localStorage.getItem("token") ? (
                                  <RemarkReport />
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
                                  <ReleaseTrainPage />
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
                              path="/remark"
                              element={
                                localStorage.getItem("token") ? (
                                  <RemarkPage />
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
                    </CustomerContextProvider>
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
