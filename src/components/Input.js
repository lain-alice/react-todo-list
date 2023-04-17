import React, { useState } from 'react';
import styled from 'styled-components';

const BREAK_POINT_TABLET = 768;

const Input = () => {
  const [todo, setTodo] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:4000/todos/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        text: todo,
        checked: false,
      }),
    })
      .then(() => {
        window.location.href = 'http://localhost:3000/';
      })
      .catch((error) => {
        console.error('Error', error);
      });
  }

  return (
    <>
      <InputArea>
        <div className="input-box">
          <input
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            placeholder="할 일을 입력하세요"
          />
          <button onClick={handleSubmit}>등록</button>
        </div>
      </InputArea>
    </>
  );
};

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
    }
    button {
    }
  }
`;

export default Input;
