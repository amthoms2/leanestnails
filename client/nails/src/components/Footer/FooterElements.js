import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
  background-color: #101522;

`

export const FooterWrapper = styled.div`
  padding: 48px 244px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1100px;
  margin: 0 auto;

`

export const FooterLinks = styled.div`
display: flex;
justify-content: center;

@media screen and (max-width: 820px){
  padding-top: 32px;
}
`

export const LinksWrapper = styled.div`
display: flex;
@media screen and (max-width: 820px){
  flex-direction: column;
`

export const FooterItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 16px;
box-sizing: border-box;
text-align: left;
width: 160px;
color: #fff;
`

export const FooterH1 = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
  font-size: 14px;
  margin-bottom: 0.5rem;
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`
export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px){
    flex-direction: column;
  }

`

export const Logo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`

export const CopyRights = styled.small`
color: #fff;
margin-bottom: 16px;
`

export const SocialIcon = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;
`

export const SocialLink = styled.a`
color: #fff;
font-size: 24px;
`