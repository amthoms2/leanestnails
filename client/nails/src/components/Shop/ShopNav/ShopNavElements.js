import styled from 'styled-components'

export const NavContainer = styled.div`
  height: 60px;
  // z-index: 1;
  // width: 100%;
  //padding: 0 24px;
  // max-width: 1100px;
`

export const NavWrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Left = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
`
export const Center = styled.div`
  flex: 1;
  text-align: right;
`
export const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`

export const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
`

export const MenuOffering = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`
export const AnnouncementContainer = styled.div`
  height: 30px;
  background-color: #43E4DB;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
`
