import React, { useState } from 'react';
import styled from 'styled-components';
import '../App.css';

import Input from './Input'
import List from './List'

// const [ todos, setTodos ] = useState();

const BREAK_POINT_TABLET = 768;

const MainArea = styled.div`
  
  width: 100%;
  height: 100vh;
  display:flex;
  flex-flow:row wrap;
  justify-content:center;
  align-items:center;

  h1{
    font-size:30px;
    font-weight:700;
    color:#fff;
  }

  .main-box {
    width: 600px;
    height: 800px;
    margin: 0 auto;
    background-color: #98f3ff;
    border-radius: 5px;
    display:flex;
    flex-flow:column wrap;
    justify-content: center;    
    align-items: center;
  }
  
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    .main-box{
      width:90%;
    }
    h1{
      font-size:1.8rem;
    }
  }
  
`;

const Main = () => {
  return (
    <>
      <MainArea>
        <div className="main-box">
            <h1>To-Do List</h1>
            <Input />
            <List />
        </div>
      </MainArea>
    </>
  );
};

export default Main;
