import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <TopContainer>
      <div className="logo">Taskify</div>
      <div className="buttons">
        <a target="_black" href="https://github.com/myselfdhiraj/To-Do-App-">
        <Buttons>View Github</Buttons>

        </a>
      </div>
    </TopContainer>
  );
}

export default Header;

const TopContainer = styled.div`
  width: 98%;
  margin: 10px auto;
  padding: 8px 10px;
  border-radius: 15px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    padding-left: 20px;
    font-size: 1.2rem;
    font-weight: 600;
  }
  .buttons a{
    text-decoration: none;
    color: black;
  }
`;
export const Buttons = styled.button`
  all: unset;
  padding: 8px 15px;
  font-size: 1.0rem;
  font-weight: 600;
  border-radius: 10px;
  border: 2px solid #fc3b6e;
  transition: all 0.3s ease-in-out;
  &:hover{
      color: #fff;
      background-color: #fc3b6e;
  }
`;
