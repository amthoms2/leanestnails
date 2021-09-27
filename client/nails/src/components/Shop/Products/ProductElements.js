import styled from 'styled-components'

export const ProductsContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Information = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
`

export const ProductContainer = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

&:hover ${Information}{
    opacity: 1;
  }
`
export const Circle = styled.div`
  width: 200px;
  height: 200px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
`
export const Image = styled.img`
  height: 75%;
  width: 80%;
  z-index: 2;
 object-fit: contain;
`
//remove object-fit if I want images to be all the same!

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.3 ease;

  &:hover{
    background-color: #43E4DB;
    transform: scale(1.1)
  }
`
