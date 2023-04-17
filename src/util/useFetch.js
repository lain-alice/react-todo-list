import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);

  /* useFetch 안의 중심 로직을 작성해주세요. */
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.error(`useFetch(${url}) error : `, err);
      });
  }, [url]);

  return data;
};

export default useFetch;
