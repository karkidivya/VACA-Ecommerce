import { SimpleGrid, Card, Image, Text, Container, AspectRatio, Button } from '@mantine/core';
import classes from './Products.module.css';
import {  MantineProvider, createTheme, rem } from '@mantine/core';

import { useDispatch, useSelector } from "react-redux";
import { FC, useEffect, useState } from "react";

import { useNotifications } from "@mantine/notifications";


import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";
import Loading from "./Loading";
import { useNavigate } from "react-router";
import { ProductsCard } from './ProductsCard';
import { v4 as uuidv4 } from 'uuid';

interface Product {
  _id: string,  
  title: string,
  image: string[],
  oldPrice?: Number,
  price: Number,
};

// interface PageNum {
//   numb : Number
// }



const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem(300),
  xs: rem(400),
  sm: rem(500),
  md: rem(600),
  lg: rem(700),
  xl: rem(1500),
  xxl: rem(900),
};

const theme = createTheme({
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          '--container-size': fluid
            ? '100%'
            : size !== undefined && size in CONTAINER_SIZES
            ? CONTAINER_SIZES[size]
            : rem(size),
        },
      }),
    }),
  },
});


interface PageNum {
  page: number;
  pages: (data: number) => void; // Define a callback prop
};



const ArticlesCardsGrid: React.FC<PageNum> = ({page, pages}): JSX.Element => 
{
  
  const dispatch = useDispatch();
  //const notifications = useNotifications();

  //const [activePage, setActivePage] = useState(1);
  const navigate = useNavigate();
  const { getProducts } = bindActionCreators(actionCreators, dispatch);

  const { products, error, loading } = useSelector(
    (state: State) => state.products
  
  );
  // console.log("getproducts", products)
  // const handlerPageChange = () => {
  //   //setActivePage(page);
  //   getProducts();
  // };
useEffect(()=> {
  getProducts(page);
  
  //pages(products.pages)
}, [page])

  useEffect(() => {
    getProducts(1);
  }, [dispatch]);

  if(!loading) {
    pages(products.pages)
  }
  const cards =
  Object.keys(products).length 
   ? (
  products.products.map((product : Product ) => (
    <ProductsCard product = { product } key = { uuidv4()}/>
     )))
    : (
      <>hello world</>
    )
  return (
    <MantineProvider theme={theme}>
      <Container py="md" size="xl">
        <SimpleGrid cols={{ base: 1, xs: 2, sm: 3, md: 4}} spacing="xl">{cards}</SimpleGrid>
      
      </Container>  
    </MantineProvider>
  );
}

export default ArticlesCardsGrid