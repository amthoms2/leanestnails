import styled from 'styled-components'
import { mobile } from '../../../responsive'

export const NavContainer = styled.div`
  height: 60px;
  /* // z-index: 1;
  // width: 100%;
  //padding: 0 24px;
  // max-width: 1100px; */
  ${mobile({ height: "50px" })}

`

export const NavWrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`
export const Left = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  ${mobile({ display: "none" })}
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
${mobile({ justifyContent: "center" })}
`

export const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  ${mobile({ fontSize: "24px" })}
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
