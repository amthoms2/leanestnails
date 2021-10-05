import React from 'react'
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
  return (
    <>
      <ProductListContainer>
        <ShopAnnouncements />
        <ShopNav />
        <Title> Press On Nails </Title>
        <FilterContainer>
          <Filter><FilterText>Filter Products: </FilterText>
            <Select>
              <Option disabled selected>Color</Option>
              <Option>Black</Option>
              <Option>White</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
              <Option>Multicolor</Option>
            </Select>
            <Select>
            <Option disabled selected>Shape</Option>
              <Option>Almond</Option>
              <Option>Long Stiletto</Option>
              <Option>Short Oval</Option>
              <Option>Short Square</Option>
            </Select>
          </Filter>

          <Filter><FilterText>Sort Products: </FilterText>
            <Select>
            <Option selected>Newest</Option>
            <Option>Best Sellers</Option>
            <Option>Price Low to High</Option>
            <Option>Price High to Low</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products />
        <Footer />
      </ProductListContainer>
    </>
  )
}

export default ProductList
