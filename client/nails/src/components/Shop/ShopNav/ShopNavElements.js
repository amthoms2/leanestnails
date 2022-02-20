import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
// import { Link as LinkScroll} from 'react-scroll'

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  margin-top: -80px;
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;


  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`
//the nav will trigger on this screen size
export const AnnouncementContainer = styled.div`
  height: 25px;
  position: relative;
  background-color: #43E4DB;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  z-index: 2000;
`

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`

export const NavbarLogo = styled(LinkRouter)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`
//I could not see the responsive bar until I added the white color

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
  display: none;
  }

`

export const NavItem = styled.li`
  height: 80px;
`

export const NavLink = styled(LinkRouter)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active {
  border-bottom: 3px solid #01bf71;
}
`

export const NavLinks = styled(LinkRouter)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`
//@.active changed the border bottom color when scrolling down.

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;


  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(LinkRouter)`
  border-radius: 50px;
  /* background: #01bf71; */
  background: #43E4DB;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    // color: #00FFFF
  }

`


// import styled from 'styled-components'
// import { mobile } from '../../../responsive'

// export const NavContainer = styled.div`
//   height: 60px;
//   /* // z-index: 1;
//   // width: 100%;
//   //padding: 0 24px;z
//   // max-width: 1100px; */
//   /* ${mobile({ height: "50px" })} */

// `

// export const NavWrapper = styled.div`
//   padding: 10px 20px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   ${mobile({ padding: "10px 0px" })}
// `
// export const Left = styled.div`
//   flex: 1;
//   align-items: center;
//   display: flex;
//   ${mobile({ display: "none" })}
// `
// export const Center = styled.div`
//   flex: 1;
//   text-align: right;
// `
// export const Right = styled.div`
// flex: 1;
// display: flex;
// align-items: center;
// justify-content: flex-end;
// ${mobile({ justifyContent: "center" })}
// `

// export const Logo = styled.h1`
//   font-weight: bold;
//   text-align: center;
//   ${mobile({ fontSize: "24px" })}
// `

// export const MenuOffering = styled.div`
//   font-size: 14px;
//   cursor: pointer;
//   margin-left: 25px;
// `
// export const AnnouncementContainer = styled.div`
//   height: 30px;
//   background-color: #43E4DB;
//   color: #fff;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 14px;
//   font-weight: bold;
// `
