import React from "react";
import { Container, Logo, GoSearch, DivSear, DivIcon,DivNotification, NotificationBadge, DivInfoNotication} from "./styles";
import { useState, useEffect } from "react";
import { useSearchContext } from "../../../hook/useSearchContext";
import IconSystem from "../../../assets/IconSystem";
import { ReactComponent as NotificationRemarks } from "../../../assets/svg/NotificationRemarks.svg";
import RemarkNotification from "./NotificationModal";
import { useRemarkContext } from "../../../hook/useRemarkContent";

import { FaRegCalendarAlt, FaChevronCircleDown } from "react-icons/fa";

const NavBar = () => {
  const { setSearch, setNotification, notification} = useSearchContext();
  const [searchtState ] = useState(false);


  const handleNotification = () => {
    setNotification(!notification)
  };

  useEffect(() => {
    setSearch(false);
  }, []);

  return (

    <>
      <Container>
     
        <Logo>
          <IconSystem icon={"TataLogo"} />
        </Logo>

        <DivSear>
          <DivIcon $mode={searchtState} >
            <IconSystem icon={"Search2"} />
          </DivIcon>
          <GoSearch
            type="search"
            placeholder="search..."
            onChange={(e) => setSearch(e.target.value)}
          ></GoSearch>

  
        </DivSear>

  
        <DivNotification>
        <NotificationRemarks
            onClick={() => handleNotification()}
            style={{
             fill:"white",
             cursor:"pointer",
            }}/>


            </DivNotification>
     
      <DivInfoNotication>
      {notification && (
               <RemarkNotification
                  setNotification={setNotification}
                  />
               )}
        </DivInfoNotication>
                </Container>
    </>

  );
};

export default NavBar;
