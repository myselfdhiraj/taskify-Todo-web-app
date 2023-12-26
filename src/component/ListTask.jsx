import React from "react";
import styled from "styled-components";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { TiPin , TiPinOutline} from "react-icons/ti";

function ListTask() {
  return (
    <ListTasks>
      <MdCheckBoxOutlineBlank fontSize="25px"/>
      <div className="text">
       hello
      </div>
      <TiPinOutline fontSize="25px"/>
    </ListTasks>
  );
}

export default ListTask;

const ListTasks = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 8px 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #e6e6e6;
  border-radius: 10px;

  .text {
    margin: auto;
    width: 88%;
    height: 30px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 4px 0px;
  }
`;
