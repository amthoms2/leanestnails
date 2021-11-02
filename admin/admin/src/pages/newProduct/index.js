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
          <Input name="title" type="text" placeholder="Cinderella Press Ons"></Input>
        </Item>

        <Item>
          <label>Description</label>
          <Input name="description" type="text" placeholder="description"></Input>
        </Item>

        <Item>
          <label>Price</label>
          <Input name="price" type="number" placeholder="50"></Input>
        </Item>

        <Item>
          <label>Stock</label>
          <select>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </Item>

        <Item>
          <label>Categories</label>
          <Input type="text" placeholder="press ons, custom press ons"></Input>
        </Item>

        <NewProductButton>Create</NewProductButton>
      </Form>
   </NewProductContainer>

    </>
  )
}

export default NewProduct
