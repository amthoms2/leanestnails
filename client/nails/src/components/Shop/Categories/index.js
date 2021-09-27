import React from 'react';
import {categoryData} from '../../../data';
// eslint-disable-next-line
import CategoryItem from './CategoryItem';
import {CategoryContainer} from './CategoriesElements';

const Categories = () => {
  return (
    <>
      <CategoryContainer>
        {categoryData.map(item => (
          <CategoryItem item={item} key={item.id}/>
        ))}
      </CategoryContainer>
    </>
  )
}

export default Categories
