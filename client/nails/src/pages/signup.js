import React from 'react'
import Register from '../components/SignUp'
// import styled from 'styled-components'
// import img from '../images/spilledpolish.jpg'

// const SignupContainer = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background: linear-gradient(
//     rgba(255, 255, 255, 0.5),
//     rgba(255, 255, 255, 0.5)
//     ),
//     url(${img});
//   background-size: cover;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `
// const SignupWrapper = styled.div`
//   padding: 20px;
//   width: 40%;
//   background-color: #fff;
// `
// const Title = styled.h1`
//   font-size: 24px;
//   font-weight: 400;
// `
// const Form = styled.form`
//   display: flex;
//   flex-wrap: wrap;
// `
// const Input = styled.input`
//   flex: 1;
//   min-width: 40%;
//   margin: 20px 10px 0px 0px;
//   padding: 10px;
// `
// const Policies = styled.span`
//   font-size: 12px;
//`


const Signup = () => {
  return (
    <>
    <Register />
      {/* <SignupContainer>
        <SignupWrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <Input placeholder='name' />
            <Input placeholder='lastName' />
            <Input placeholder='firstName' />
            <Input placeholder='email' />
            <Input placeholder='password' />
            <Input placeholder='confirm password' />
            <Policies>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos
            </Policies>
          </Form>
        </SignupWrapper>
      </SignupContainer> */}
    </>
  )
}

export default Signup
