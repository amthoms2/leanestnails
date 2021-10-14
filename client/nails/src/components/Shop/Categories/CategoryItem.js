import React from 'react';
import { Link } from 'react-router-dom';
import {ItemContainer, Information, Title, Button, Image} from './CategoriesElements';


const CategoryItem = ({item}) => {
  return (
    <>
    <ItemContainer>
      <Link to={`/products/${item.category}`}>
      <Image src={item.img}/>
      <Information>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Information>
      </Link>
    </ItemContainer>
    </>
  )
}

export default CategoryItem
