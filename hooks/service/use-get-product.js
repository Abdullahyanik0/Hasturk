import { useState, useEffect } from 'react';

const useGetProduct = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/product')
      .then((res) => res.json())
      .then((response) => setData(response.data));
  }, []);

  return { data };
};

export default useGetProduct;
