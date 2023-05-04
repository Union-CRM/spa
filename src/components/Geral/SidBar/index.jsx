import React,{useState} from "react";
import IconSystem from "../../../assets/IconSystem";
import { ReactComponent as Groups } from "../../../assets/svg/Groups.svg";
import Body from "../../../assets/FontSystem/Body";
import {useUserContext} from "../../../hook/useUserContext"
import { ReactComponent as Client } from "../../../assets/svg/Client.svg"
import { ReactComponent as Subject } from "../../../assets/svg/Subjects.svg"
import { ReactComponent as Planner } from "../../../assets/svg/Planner.svg"
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
  Logout,
  DivDots,
  Dot1,
  Dot2,
  Dot3,
  Dot4,
  Dot5,
} from "./styles";


function Split(n) {
  const name= n? n:""
  var nameSplit=name.split(" ")
  var name2=nameSplit[0].split("")[0]+" "+nameSplit[nameSplit.length-1].split("")[0]+"";

  return name2.toUpperCase();
}

function handleLogin(event) { // Renomear função de teste para handleLogin e adicionar evento de submissão de formulário
  // Impedir comportamento padrão de submissão do formulário
  localStorage.setItem("token","");
}


const SidBar =(props)=>{
  const [sidBarState,setSidBarState]=useState(true);
  const {user}=useUserContext();
  const isAdm = user.level > 1 ? true : false;
  const colorAdm = user.level > 1 ? "#007BFF" : "#FFFFFF";
 
  return (
    <>
      <Container
        $column={props.column}
        $row={props.row}
        $mode={sidBarState}
      >
        <OpenClose
          $mode={sidBarState}
          onClick={() =>
            setSidBarState(!sidBarState)
          }
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
            <Dot1 level={user.level}/>
            <Dot2 level={user.level}/>
            <Dot3 level={user.level}/>
            <Dot4 level={user.level}/>
            <Dot5 level={user.level}/>
          </DivDots>
          )}
          <Name $mode={sidBarState}>{user.name}</Name>
          <Email $mode={sidBarState}>{user.email}</Email>
          <Id $mode={sidBarState}>{user.tcs_id}</Id>
        </User>
        <Ul $mode={sidBarState}>
          <Slink to="/home">
            <Li level={user.level}>
              <Icon $mode={sidBarState}>
                <IconSystem icon="Home" />
                <Span $mode={sidBarState}>Home</Span>
              </Icon>
            </Li>
          </Slink>
          {isAdm && (
            <>
            <Slink to="/usersAdm">
              <Li level={user.level}>
                <Icon $mode={sidBarState}>
                  <IconSystem icon="User"/>
                  <Span $mode={sidBarState}>User</Span>
                </Icon>
              </Li>
              </Slink>
              <Slink to="/groups">
              <Li level={user.level}>
              <Icon $mode={sidBarState}>
              <Groups
                  style={{
                    fill: "#FFF",
                    width: "26",
                    height: "30",
                  }}
                />
                <Span $mode={sidBarState}>Groups</Span>
              </Icon>
            </Li>
            </Slink>
            <Slink to="/business">
            <Li level={user.level}>
              <Icon $mode={sidBarState}>
                <IconSystem icon="Business"/>
                <Span $mode={sidBarState}>Business</Span>
              </Icon>
            </Li>
            </Slink>
            <Slink to="/releasetrain">
            <Li level={user.level}>
              <Icon $mode={sidBarState}>
                <IconSystem icon="Release"/>
                <Span $mode={sidBarState}>Release train</Span>
              </Icon>
            </Li>
            </Slink>
            <Slink to="/customer">
            <Li level={user.level}>
              <Icon $mode={sidBarState}>
                <IconSystem icon="Costumer"/>
                <Span $mode={sidBarState}>Custumer</Span>
              </Icon>
            </Li>
            </Slink>
          </>
            )}
          <Slink to="/client">
            <Li level={user.level}>
              <Icon $mode={sidBarState}>
                <Client fill={colorAdm}/>
                <Span $mode={sidBarState}>Client</Span>
              </Icon>
            </Li>
          </Slink>
          <Slink to="/subject">
            <Li level={user.level}>
              <Icon $mode={sidBarState}>
                <Subject fill={colorAdm}/>
                <Span $mode={sidBarState}>Subjects</Span>
              </Icon>
            </Li>
          </Slink>
          <Slink to="/planner">
            <Li level={user.level}>
              <Icon $mode={sidBarState}>
                <Planner fill={colorAdm} />
                <Span $mode={sidBarState}>Planner</Span>
              </Icon>
            </Li>
          </Slink>
        </Ul>
        <Logout $mode={sidBarState} onClick={handleLogin}>
            <Slink to="/">
              <IconSystem icon="Logout"  />
              <Span $mode={sidBarState}>Logout</Span>
            </Slink>  
          </Logout>
      </Container>
    </>
  );
}

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
