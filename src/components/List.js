import { useState, useEffect } from 'react';
import useFetch from '../util/useFetch';
import styled from 'styled-components';

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

function List() {
  const data = useFetch('http://localhost:4000/todos');

  return (
    <ListArea>
      <div className="list-box">
        {data !== undefined &&
          data !== null &&
          data.length > 0 &&
          data.map((item) => (
            <div className="list" key={item.id}>
              {item.text}
            </div>
          ))}
      </div>
    </ListArea>
  );
}

export default List;
