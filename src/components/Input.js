import React, { useState } from 'react';
import styled from 'styled-components';

const BREAK_POINT_TABLET = 768;

const InputArea = styled.div`
  .input-box {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }
  .input-box > input {
    width: 400px;
    height: 80px;
    border-radius: 5px;
    border: none;
    margin-right: 10px;
    padding: 5px;
  }
  .input-box > button {
    width: 100px;
    height: 90px;
    border-radius: 5px;
    border: none;
    background-color: #24afff;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    text-align: center;
  }
  .input-box > button:hover {
    background-color: #5affe4;
    cursor: pointer;
  }

  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    .input-box {
    }
    input {
      flex: 3 0 0;
    }
    button {
      flex: 1 0 0;
    }
  }
`;

const Input = () => {
  return (
    <>
      <InputArea>
        <div className="input-box">
          <input type="text" placeholder="할 일을 입력하세요" />
          <button>바보바보</button>
        </div>
      </InputArea>
    </>
  );
};

export default Input;
