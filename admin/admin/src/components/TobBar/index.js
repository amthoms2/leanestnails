import React from 'react'
// eslint-disable-next-line
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import {TopbarContainer, TopbarWrapper, Logo, Left, Right, Icon, Badge} from './TopbarElements'

const Topbar = () => {
  return (
    <div>
      <TopbarContainer>
        <TopbarWrapper>
          <Logo>Leana Admin</Logo>
          <Left>left</Left>
          <Right>
            <Icon><NotificationsNone />
            <Badge>3</Badge>
            </Icon>
          </Right>
        </TopbarWrapper>
      </TopbarContainer>
    </div>
  )
}

export default Topbar
