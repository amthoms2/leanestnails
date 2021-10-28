import React from 'react'
// eslint-disable-next-line
import { NotificationsNone, Settings } from "@material-ui/icons";
import img from "../../../src/nailflower.jpg"
import {TopbarContainer, TopbarWrapper, Logo, Left, Right, Icon, Badge, Avatar} from './TopbarElements'

const Topbar = () => {
  return (
    <>
      <TopbarContainer>
        <TopbarWrapper>
          <Logo>Leana Admin</Logo>
          <Left>left</Left>
          <Right>
            <Icon>
              <NotificationsNone />
            <Badge>33</Badge>
            </Icon>
            <Icon>
              <Settings />
            </Icon>
            <Avatar src={img}></Avatar>
          </Right>
        </TopbarWrapper>
      </TopbarContainer>
    </>
  )
}

export default Topbar
