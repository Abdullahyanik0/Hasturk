import React from 'react';
import Link from 'next/link';
import { MainTemplate, Meta } from '../templates';
import { ProductCard } from '../components';
import { Grid, GridItem } from '@chakra-ui/react';

const data = [
  {
    id: 1,
    isNew: true,
    imageURL:
      'https://cdn.dsmcdn.com/mnresize/1200/1800/ty343/product/media/images/20220225/20/58611618/194779232/1/1_org_zoom.jpg',
    name: 'Kestirme No:1',
    price: 50
  },
  {
    id: 2,

    isNew: true,
    imageURL:
      'https://cdn.dsmcdn.com/ty344/product/media/images/20220225/20/58608087/194778148/1/1_org_zoom.jpg',
    name: 'Kestirme No:1/5',
    price: 50
  },
  {
    id: 3,
    isNew: true,
    imageURL:
      'https://cdn.dsmcdn.com/mnresize/1200/1800/ty342/product/media/images/20220225/20/58606595/194778508/1/1_org_zoom.jpg',
    name: 'Kestirme No:2',
    price: 50
  },
  {
    id: 4,
    isNew: true,
    imageURL:
      'https://cdn.dsmcdn.com/mnresize/1200/1800/ty342/product/media/images/20220225/20/58596040/194778405/1/1_org_zoom.jpg',
    name: 'Fırça',
    price: 50
  },
  {
    id: 5,
    isNew: true,
    imageURL:
      'https://cdn.dsmcdn.com/mnresize/1200/1800/ty342/product/media/images/20220225/20/58593251/194779490/1/1_org_zoom.jpg',
    name: 'Fırça',
    price: 50
  },
  {
    id: 6,
    isNew: true,
    imageURL:
      'https://cdn.dsmcdn.com/mnresize/1200/1800/ty342/product/media/images/20220225/20/58587891/194779457/1/1_org_zoom.jpg',
    name: 'Fırça',
    price: 50
  }
];

export default function Kestirme() {
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
          <Link href={`/products/${product.id}`}>
            <GridItem w="100%">
              <ProductCard data={product} />
            </GridItem>
          </Link>
        ))}
      </Grid>
    </MainTemplate>
  );
}
