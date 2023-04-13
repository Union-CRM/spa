import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlannerPage from "./pages/Planner";
import Home from "./pages/Home";
import GlobalStyle from "./styles/GlobalStyle";
import SubjectPage from "./pages/Subject/index";
import Client from "./pages/Client";
import RemarkPage from "./pages/Remark";
import LoginPage from "./pages/Login/index";
import LoginPageAdmin from "./components/Admin/Login/index";
import { ClientContextProvider } from "./context/ClientContext"
import { UserContextProvider } from "./context/UserContext"
import { PlannerContextProvider } from "./context/PlannerContext";



export default App;
