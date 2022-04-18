import React from 'react';
import { useRouter } from 'next/router';
import { Spinner } from '@chakra-ui/react';

//local imports
import { useGetProductDetail } from '../../hooks/service';

const ProductsDetail = () => {
  const {
    query: { id }
  } = useRouter();
  const { productDetail, loading } = useGetProductDetail(id);

  return <>{!!loading ? <Spinner color="red.500" /> : <h1>İsim:{productDetail?.name}</h1>}</>;
};

export default ProductsDetail;
