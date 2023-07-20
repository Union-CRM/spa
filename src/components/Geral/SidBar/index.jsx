import React, { useState, useEffect } from "react";
import IconSystem from "../../../assets/IconSystem";
import { ReactComponent as Groups } from "../../../assets/svg/Groups.svg";
import Body from "../../../assets/FontSystem/Body";
import { useUserContext } from "../../../hook/useUserContext";
import { ReactComponent as Client } from "../../../assets/svg/Client.svg";
import { ReactComponent as Subject } from "../../../assets/svg/Subjects.svg";
import { ReactComponent as Planner } from "../../../assets/svg/Planner.svg";
import { ReactComponent as Remark } from "../../../assets/svg/Remark.svg";
import { ReactComponent as Home } from "../../../assets/svg/Home.svg";
import { ReactComponent as Logout } from "../../../assets/svg/Logout.svg";
import { ReactComponent as Costumer } from "../../../assets/svg/Costumer.svg";
import { ReactComponent as Release } from "../../../assets/svg/Release.svg";
import { ReactComponent as Business } from "../../../assets/svg/Business.svg";
import { ReactComponent as Users } from "../../../assets/svg/User.svg";
import { useCustomerContext } from "../../../hook/useCustomerContext";
import { useLocation } from "react-router-dom";
import { ReactComponent as Report } from "../../../assets/svg/ReportRemark.svg";
import {
  Container,
  OpenClose,
  User,
  Img,
  DivPhotoI,
  Name,
  Id,
  Email,
  Ul,
  Slink,
  Li,
  Span,
  Icon,
  LogoutButton,
  DivDots,
  Dot1,
  Dot2,
  Dot3,
  Dot4,
  Dot5,
} from "./styles";

function Split(n) {
  const name = n ? n : "";
  var nameSplit = name.split(" ");
  var name2 =
    nameSplit[0].split("")[0] +
    " " +
    nameSplit[nameSplit.length - 1].split("")[0] +
    "";

  return name2.toUpperCase();
}

function handleLogin(event) {
  // Renomear função de teste para handleLogin e adicionar evento de submissão de formulário
  // Impedir comportamento padrão de submissão do formulário
  localStorage.setItem("token", "");
}

const SidBar = (props) => {
  //const { colorPage } = useCustomerContext();
  const [sidBarState, setSidBarState] = useState(true);
  const { user, colorPageUser, setViewProfile } = useUserContext();
  const isAdm = user.level > 1 ? true : false;
  const colorAdmUser = "#FFFFFF";
  const colorAdm = user.level > 1 ? "rgba(228, 17, 101, 1)" : "#FFFFFF";
  const [selectedIcon, setSelectedIcon] = useState("");
  const location = useLocation();

  function handleIconClick(iconName) {
    setSelectedIcon(iconName);
  }

  const handleIconClickUser = (iconName) => {
    setSelectedIcon(iconName);
    setViewProfile(false);
  };

  useEffect(() => {
    const path = location.pathname;
    if (path === "/home") {
      setSelectedIcon("home");
    } else if (path === "/usersAdm") {
      setSelectedIcon("users");
    } else if (path === "/groups") {
      setSelectedIcon("groups");
    } else if (path === "/business") {
      setSelectedIcon("business");
    } else if (path === "/releasetrain") {
      setSelectedIcon("releasetrain");
    } else if (path === "/customer") {
      setSelectedIcon("customer");
    } else if (path === "/client") {
      setSelectedIcon("client");
    } else if (path === "/subject") {
      setSelectedIcon("subject");
    } else if (path === "/remark") {
      setSelectedIcon("remark");
    } else if (path === "/planner") {
      setSelectedIcon("planner");
    } else if (path === "/remarkreport") {
      setSelectedIcon("remarkreport");
    }
  }, [location]);

  return (
    <>
      <Container $column={props.column} $row={props.row} $mode={sidBarState}>
        <OpenClose
          $mode={sidBarState}
          onClick={() => setSidBarState(!sidBarState)}
        >
          <IconSystem icon="OpenClose" />
        </OpenClose>
        <User $mode={sidBarState}>
          <Img level={user.level} $mode={sidBarState}>
            <DivPhotoI>
              <Body type={"Body1"} name={Split(user.name)} />
            </DivPhotoI>
          </Img>
          {isAdm && (
            <DivDots $mode={sidBarState}>
              <Dot1 level={user.level} />
              <Dot2 level={user.level} />
              <Dot3 level={user.level} />
              <Dot4 level={user.level} />
              <Dot5 level={user.level} />
            </DivDots>
          )}
          <Name $mode={sidBarState}>{user.name}</Name>
          <Email $mode={sidBarState}>{user.email}</Email>
          <Id $mode={sidBarState}>{user.tcs_id}</Id>
        </User>
        <Ul $mode={sidBarState}>
          <Slink onClick={() => handleIconClick("home")} to="/home">
            <Li selected={selectedIcon === "home"} level={user.level}>
              <Icon $mode={sidBarState}>
                <Home fill={colorAdm} width={"18px"} height={"20px"} />
                <Span $mode={sidBarState}>Home</Span>
              </Icon>
            </Li>
          </Slink>
          {isAdm && (
            <>
              <Slink
                onClick={() => handleIconClickUser("users")}
                to="/usersAdm"
              >
                <Li selected={selectedIcon === "users"} level={user.level}>
                  <Icon $mode={sidBarState}>
                    <Users fill={colorAdm} width={"18px"} height={"20px"} />
                    <Span $mode={sidBarState}>User</Span>
                  </Icon>
                </Li>
              </Slink>
              <Slink onClick={() => handleIconClick("groups")} to="/groups">
                <Li selected={selectedIcon === "groups"} level={user.level}>
                  <Icon $mode={sidBarState}>
                    <Groups
                      fill={colorAdm}
                      style={{
                        width: "24",
                        height: "24",
                      }}
                    />
                    <Span $mode={sidBarState}>Groups</Span>
                  </Icon>
                </Li>
              </Slink>
              <Slink onClick={() => handleIconClick("business")} to="/business">
                <Li selected={selectedIcon === "business"} level={user.level}>
                  <Icon $mode={sidBarState}>
                    <Business fill={colorAdm} width={"18px"} height={"20px"} />

                    <Span $mode={sidBarState}>Business</Span>
                  </Icon>
                </Li>
              </Slink>
              <Slink
                onClick={() => handleIconClick("releasetrain")}
                to="/releasetrain"
              >
                <Li
                  selected={selectedIcon === "releasetrain"}
                  level={user.level}
                >
                  <Icon $mode={sidBarState}>
                    <Release fill={colorAdm} width={"18px"} height={"20px"} />
                    <Span $mode={sidBarState}>Release train</Span>
                  </Icon>
                </Li>
              </Slink>
              <Slink onClick={() => handleIconClick("customer")} to="/customer">
                <Li selected={selectedIcon === "customer"} level={user.level}>
                  <Icon $mode={sidBarState}>
                    <Costumer fill={colorAdm} width={"19px"} height={"19px"} />
                    <Span $mode={sidBarState}>Customer</Span>
                  </Icon>
                </Li>
              </Slink>
              <Slink
                onClick={() => handleIconClick("remarkreport")}
                to="/remarkreport"
              >
                <Li
                  selected={selectedIcon === "remarkreport"}
                  level={user.level}
                >
                  <Icon $mode={sidBarState}>
                    <Report fill={colorAdm} width={"22px"} height={"20px"} />
                    <Span $mode={sidBarState}>Report</Span>
                  </Icon>
                </Li>
              </Slink>
            </>
          )}
          {/*<DivUsers onClick={() => setUser(true)}><Client><DivUsers>
          {user && (

          )*/}
          <Slink onClick={() => handleIconClick("client")} to="/client">
            <Li selected={selectedIcon === "client"} level={user.level}>
              <Icon $mode={sidBarState}>
                <Client fill={colorAdmUser} width={"18px"} height={"20px"} />
                <Span $mode={sidBarState}>Client</Span>
              </Icon>
            </Li>
          </Slink>
          <Slink onClick={() => handleIconClick("subject")} to="/subject">
            <Li selected={selectedIcon === "subject"} level={user.level}>
              <Icon $mode={sidBarState}>
                <Subject fill={colorAdmUser} width={"18px"} height={"20px"} />
                <Span $mode={sidBarState}>Subjects</Span>
              </Icon>
            </Li>
            <Slink onClick={() => handleIconClick("remark")} to="/remark">
              <Li selected={selectedIcon === "remark"} level={user.level}>
                <Icon $mode={sidBarState}>
                  <Remark fill={colorAdmUser} width={"18px"} height={"20px"} />
                  <Span $mode={sidBarState}>Remark</Span>
                </Icon>
              </Li>
            </Slink>
          </Slink>
          <Slink onClick={() => handleIconClick("planner")} to="/planner">
            <Li selected={selectedIcon === "planner"} level={user.level}>
              <Icon $mode={sidBarState}>
                <Planner fill={colorAdmUser} width={"20px"} height={"20px"} />
                <Span $mode={sidBarState}>Planner</Span>
              </Icon>
            </Li>
          </Slink>
          <LogoutButton $mode={sidBarState}>
            <Slink onClick={() => handleIconClick("handleLogin")} to="/">
              <Li selected={selectedIcon === "Logout"} level={user.level}>
                <Icon $mode={sidBarState}>
                  <Logout
                    fill={"colorAdmUser"}
                    width={"18px"}
                    height={"20px"}
                  />

                  <Span $mode={sidBarState}>Logout</Span>
                </Icon>
              </Li>
            </Slink>
          </LogoutButton>
        </Ul>

        {/*<Logout $mode={sidBarState} onClick={handleLogin}>
          <Slink to="/">
            <IconSystem icon="Logout" width={"24px"} height={"24px"}/>
            <Span $mode={sidBarState}>Logout</Span>
          </Slink>
                    </Logout>*/}
      </Container>
    </>
  );
};

/*
class SidBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidBartState: "false",
    };
  }
  
  render() {
    const {user} = useUserContext()
    console.log(user)

    return (
      <>
        <Container
          $column={this.props.column}
          $row={this.props.row}
          $mode={this.state.sidBartState}
        >
          <OpenClose
            $mode={this.state.sidBartState}
            onClick={() =>
              this.setState({ sidBartState: !this.state.sidBartState })
            }
          >
            <IconSystem icon="OpenClose" />
          </OpenClose>
          <User $mode={this.state.sidBartState}>
            <Img $mode={this.state.sidBartState}>
              <DivPhotoI>
                <Body type={"Body1"} name={Split()} />
              </DivPhotoI>
            </Img>
            <Name $mode={this.state.sidBartState}>Héder Silva Oliveira</Name>
            <Email $mode={this.state.sidBartState}>meuemail@tcs.com</Email>
            <Id $mode={this.state.sidBartState}>ID:2555555</Id>
          </User>
          <Ul $mode={this.state.sidBartState}>
            <Slink to="/home">
              <Li>
                <Icon $mode={this.state.sidBartState}>
                  <IconSystem icon="Home" />
                  <Span $mode={this.state.sidBartState}>Home</Span>
                </Icon>
              </Li>
            </Slink>
            <Slink to="/client">
              <Li>
                <Icon $mode={this.state.sidBartState}>
                  <IconSystem icon="Client" />
                  <Span $mode={this.state.sidBartState}>Client</Span>
                </Icon>
              </Li>
            </Slink>

            <Slink to="/subject">
              <Li>
                <Icon $mode={this.state.sidBartState}>
                  <IconSystem icon="Subjects" />
                  <Span $mode={this.state.sidBartState}>Subjects</Span>
                </Icon>
              </Li>
            </Slink>

            <Slink to="/planner">
              <Li>
                <Icon $mode={this.state.sidBartState}>
                  <IconSystem icon="Planner" />
                  <Span $mode={this.state.sidBartState}>Planner</Span>
                </Icon>
              </Li>
            </Slink>

          </Ul>
          <Logout $mode={this.state.sidBartState} onClick={handleLogin}>
              <Slink to="/">
                <IconSystem icon="Logout"  />
                <Span $mode={this.state.sidBartState}>Logout</Span>
              </Slink>  
            </Logout>
        </Container>
      </>
    );
  }
}
*/
export default SidBar;
