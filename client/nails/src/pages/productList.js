import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import ShopNav from '../components/Shop/ShopNav'
import ShopAnnouncements from '../components/Shop/ShopNav/ShopAnnouncements'
import Products from '../components/Shop/Products'
import Footer from '../components/Footer'
import { mobile } from '../responsive'

const ProductListContainer = styled.div``
const Title = styled.h1`
  margin: 20px;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`
const Filter = styled.div`
margin: 20px;
${mobile({ display: "flex", flexDirection: "column" })}
`
const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
`

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`

const Option = styled.option`
`

const ProductList = () => {
  const location = useLocation();
  // console.log(location.pathname.split("/")[2])
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('sort');

  const handleFilters = (evt) => {
    const val = evt.target.value;
    setFilters({
      ...filters,
      [evt.target.name]: val,
    })
  }
   //w/out the spread op, it would return two individual objects for color and shape

  const handleSort = (evt) => {
    const val = evt.target.value;
    setSort(val)
  }

  return (
    <>
      <ProductListContainer>
        <ShopAnnouncements />
        <ShopNav />
        <Title> Press On Nails </Title>
        <FilterContainer>
          <Filter><FilterText>Filter Products: </FilterText>
            <Select name="color" onChange={handleFilters}>
              <Option disabled selected>Color</Option>
              <Option>black</Option>
              <Option>white</Option>
              <Option>red</Option>
              <Option>blue</Option>
              <Option>yellow</Option>
              <Option>green</Option>
              <Option>multicolor</Option>
            </Select>
            <Select name="shape" onChange={handleFilters}>
              <Option disabled selected>Shape</Option>
              <Option>Almond</Option>
              <Option>Long Stiletto</Option>
              <Option>Short Oval</Option>
              <Option>Short Square</Option>
            </Select>
          </Filter>

          <Filter><FilterText>Sort Products: </FilterText>
            <Select onChange={handleSort}>
            <Option disabled selected>Sort</Option>
            <Option>Newest</Option>
            <Option>Price Low to High</Option>
            <Option>Price High to Low</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products category={category} filters={filters} sort={sort}/>
        <Footer />
      </ProductListContainer>
    </>
  )
}

export default ProductList
