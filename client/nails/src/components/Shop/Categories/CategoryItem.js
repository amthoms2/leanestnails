import React from 'react';
import {ItemContainer, Information, Title, Button, Image} from './CategoriesElements';


const CategoryItem = ({item}) => {
  return (
    <>
    <ItemContainer>
      <Image src={item.img}/>
      <Information>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Information>
    </ItemContainer>
    </>
  )
}

export default CategoryItem
