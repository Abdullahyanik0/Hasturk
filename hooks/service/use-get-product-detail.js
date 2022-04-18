import { useState, useEffect } from 'react';

const useGetProductDetail = (id) => {
  const [loading, setLoading] = useState(true);
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    setLoading(true);
    try {
      !!id &&
        fetch(`/api/product-details/${id}`)
          .then((res) => res.json())
          .then((response) => setProductDetail(response?.product[0]))
          .then(setLoading(false));
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  return { productDetail, loading };
};

export default useGetProductDetail;
