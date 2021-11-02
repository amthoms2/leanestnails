import React from 'react'
import {NewUserContainer, Title, Form, Item, NewUserButton, Input} from "./NewUserElements.js"


const NewUser = () => {
  return (
    <>
    <NewUserContainer>

      <Title>New User</Title>
      <Form>
        <Item>
          <label>Full Name</label>
          <Input type="text" placeholder="Full Name"></Input>
        </Item>

        <Item>
          <label>Username</label>
          <Input type="text" placeholder="username"></Input>
        </Item>

        <Item>
          <label>Email</label>
          <Input type="email" placeholder="email"></Input>
        </Item>

        <Item>
          <label>Password</label>
          <Input type="password" placeholder="password"></Input>
        </Item>

        <Item>
          <label>Phone</label>
          <Input type="text" placeholder="phone"></Input>
        </Item>

        <Item>
          <label>Address</label>
          <Input type="text" placeholder="City, State"></Input>
        </Item>

        <NewUserButton>Create</NewUserButton>
      </Form>
    </NewUserContainer>

    </>
  )
}

export default NewUser
