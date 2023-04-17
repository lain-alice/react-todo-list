import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../util/useFetch';
import styled from 'styled-components';

function List() {
  const data = useFetch('http://localhost:4000/todos/');
  const { id } = useParams();

  const handleDeleteClick = () => {
    fetch(`http://localhost:4000/todos/12`, {
      method: 'DELETE',
    })
      .then(() => {
        window.location.href = 'http://localhost:3000/';
      })
      .catch((error) => {
        console.error('Error', error);
      });
  };

  return (
    <ListArea>
      <div className="list-box">
        {data !== undefined &&
          data !== null &&
          data.length > 0 &&
          data.map((item) => (
            <div className="list" key={item.id}>
              {item.text}
              <button onClick={handleDeleteClick}>삭제</button>
            </div>
          ))}
      </div>
    </ListArea>
  );
}

const ListArea = styled.div`
  .list-box {
    margin-top: 20px;
  }
  .list {
    width: 500px;
    padding: 5px;
    text-align: center;
    background-color: #fff;
    border-radius: 5px;
    margin: 5px;
  }

  @media only screen and (max-width: 768px) {
    .list {
      width: 80%;
    }
  }
`;

export default List;
