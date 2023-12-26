import React from 'react'
import styled from 'styled-components'
import { IoIosArrowBack } from "react-icons/io";


function ShowDays() {
  return (
    <DateButton>
        <IoIosArrowBack fontSize="2.5rem"/>
        <div>
            26 Dec
        </div>
    </DateButton>
  )
}

export default ShowDays

const DateButton = styled.div`
font-size: 4rem;
color: #3b3b3b;
font-weight: 200;
gap: 10px;
display: flex;
align-items: center;
justify-content: center;
`;