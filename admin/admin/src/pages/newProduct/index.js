import React from 'react'
import {NewProductContainer, Title, Form, Item, NewProductButton, Input} from "./NewProductElements.js"


const NewProduct = () => {
  return (
    <>
    <NewProductContainer>
      <Title>New Product</Title>
      <Form>
        <Item>
          <label><b>Image</b></label>
          <Input type="file"
            id="file"></Input>
        </Item>

        <Item>
          <label>Title</label>
          <Input name="title" type="text" placeholder="Product Name"></Input>
        </Item>

        <Item>
          <label>Description</label>
          <Input name="desc" type="text" placeholder="Description"></Input>
        </Item>

        <Item>
          <label>Price</label>
          <Input name="price" type="number" placeholder="Amount"></Input>
        </Item>

        <Item>
          <label>Stock</label>
          <select>
            <option disabled selected></option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </Item>

        <Item>
          <label>Category</label>
          <select>
                <option disabled selected></option>
                <option value="press-ons">Press Ons</option>
                <option value="custom">Custom Press ons</option>
          </select>
        </Item>

        <Item>
          <label>Nail Shape</label>
          <select>
            <option disabled selected></option>
            <option value="Short Oval">Short Oval</option>
            <option value="Long Stiletto">Long Stiletto</option>
            <option value="Short Square">Short Square</option>
            <option value="other">Other</option>
          </select>
        </Item>

        <Item>
          <label>Color</label>
          <select>
          <option disabled selected></option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="multicolor">Multicolor</option>

          </select>
        </Item>

        <NewProductButton>Create</NewProductButton>
      </Form>
   </NewProductContainer>

    </>
  )
}

export default NewProduct
