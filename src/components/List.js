import {useState, useEffect} from 'react'
import useFetch from '../util/useFetch';

function List() {

    const [data, error] = useFetch('http://localhost:4000/todos');

    return (
    <div>
        {data !== undefined && data !== null && data.length > 0 &&
            data.map((item) => (
                <div>{item.text}</div>
        ))}
    </div>
    )
}

export default List;