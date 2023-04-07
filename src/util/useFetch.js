import { useState, useEffect } from 'react';

const useFetch = (url) => {
  /* useState를 이용하여 data, isPending, error를 정의하세요. */
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  /* useFetch 안의 중심 로직을 작성해주세요. */
  useEffect(() => {
    setTimeout(() => {
      fetch(url, {
        headers: {
          "Content-Type" : "application/json",
          Accept: "application/json"
        }
      })
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setData(data);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
      })
    }, 1000);
  }, [url])

  return [data, error];
}

 
export default useFetch;