import React from "react";
import { Container, Logo, GoSearch, DivSear, DivIcon } from "./styles";
import { useState } from "react";
import { useSearchContext } from "../../../hook/useSearchContext";
import IconSystem from "../../../assets/IconSystem";

const NavBar = () => {
  const { setSearch } = useSearchContext();
  const [searchtState, setSearchtState] = useState(false);

  return (
    <>
      <Container>
        <Logo>
          <IconSystem icon={"TataLogo"} />
        </Logo>

        <DivSear>
          <DivIcon $mode={searchtState} onClick={() => setSearchtState("true")}>
            <IconSystem icon={"Search2"} />
          </DivIcon>
          <GoSearch
            type="search"
            placeholder="search..."
            onFocus={() => setSearchtState("true")}
            onBlur={() => setSearchtState("false")}
            onChange={(e) => setSearch(e.target.value)}
          ></GoSearch>
        </DivSear>
      </Container>
    </>
  );
};

export default NavBar;
