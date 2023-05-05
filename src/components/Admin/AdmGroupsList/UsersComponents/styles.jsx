import styled from "styled-components";

// Select Label //

export const Label = styled.label`
  padding-left: 0px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.8);
`;

// Container Father //
export const ContainerSelect = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`;

export const SelectContainer = styled.div`
  position: relative;
  margin-bottom: 25px;
`;

// Container Options Selected //
export const SelectedOptionsContainer = styled.div`
  padding: 2%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
`;

export const ContainerOptions = styled.div`
  display: flex;
  background-color: white;
  border-radius: 5px;
  border: 2px solid #888c95;
  height: 100%;
  max-height: 100%;
  position: relative;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-track-piece {
    margin-top: 15px;
  }

  &::-webkit-scrollbar-thumb {
    height: 80%;
  }
`;

// MenuList Select //
export const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
  z-index: 1;
  height: 100px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
    background-color: #fff;
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #ccc;
  }

  &::-webkit-scrollbar-track-piece {
    margin-top: 15px;
  }

  &::-webkit-scrollbar-thumb {
    height: 80%;background-color: #fff;
  }
`;

export const DropdownOption = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;

export const DropdownButton = styled.button`
  width: 100%;
  border-radius: 5px;
  border: 2px solid #888c95;
  height: 33px;
  background-color: #fff;
  cursor: pointer;
  position: relative;
  color: grey;
`;

// Option Selected //
export const SelectedOption = styled.div`
  background-color: #eee;
  height: 20px;
  width: fit-content;
  padding: 4px 8px;
  border-radius: 4px;
  margin-right: 8px;
  margin-bottom: 8px;
  font-size: 16px;
`;

// Button Remove Option Selected //
export const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  color: #999;
  font-size: 16px;
  margin-left: 4px;
  cursor: pointer;
`;

export const DivIconAndSelect = styled.div`
  text-align: left;
  display: flex;
  padding-left: 2%;
  font-size: 1rem;
  justify-content: space-between;
`;

export const IconUser = styled.div`
  display: flex;
  padding-right: 5%;
  padding-top: 1%;
`;

export const DivNoOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1%;
  font-size: 1rem;
`;
