import Link from 'next/link';
import { MainTemplate, Meta } from '../templates';
import { ProductCard } from '../components';
import { Grid, GridItem } from '@chakra-ui/react';

//local imports
import { useGetProduct } from '../hooks/service';

export default function Kestirme() {
  const { data } = useGetProduct();

  return (
    <MainTemplate
      meta={<Meta title="Kestirme | Hastürk Fırça" description="hakkımızda vırt zırt" />}>
      <Grid
        templateColumns={{
          sm: 'repaat(1,1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)'
        }}
        gap={6}>
        {data?.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <GridItem w="100%">
              <ProductCard data={product} />
            </GridItem>
          </Link>
        ))}
      </Grid>
    </MainTemplate>
  );
}
