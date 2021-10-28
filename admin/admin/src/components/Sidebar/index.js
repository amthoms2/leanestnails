import React from 'react'
// eslint-disable-next-line
import { LineStyle, Timeline, TrendingUp, PermIdentity, Storefront, MailOutline, AttachMoney, BarChart, DynamicFeed, Report } from "@material-ui/icons";
// import { Link } from "react-router-dom";
import {SidebarContainer, SidebarMenu, SidebarWrapper, Title, List, ListItem} from "./SidebarElements"

const Sidebar = () => {
  return (
    <>
      <SidebarContainer>
        <SidebarWrapper>
          <SidebarMenu>
            <Title>Dashboard</Title>
            <List>
              <ListItem>
                <LineStyle />
                Home
              </ListItem>
              <ListItem>
                <Timeline />
                Analytics
              </ListItem>
              <ListItem>
                <TrendingUp />
                Sales
              </ListItem>
            </List>
          </SidebarMenu>

          <SidebarMenu>
            <Title>Quick Menu</Title>
            <List>
              <ListItem color={'primary'}>
                <PermIdentity />
                Users
              </ListItem>
              <ListItem>
                <Storefront />
                Products
              </ListItem>
              <ListItem>
                <AttachMoney />
                Transactions
              </ListItem>
              <ListItem>
                <BarChart />
                Reports
              </ListItem>
            </List>
          </SidebarMenu>

          <SidebarMenu>
            <Title>Notifications</Title>
            <List>
              <ListItem color={'primary'}>
                <MailOutline />
                Mail
              </ListItem>
              <ListItem>
                <DynamicFeed />
                Feedback
              </ListItem>
              <ListItem>
                <Report />
                Messages
              </ListItem>
            </List>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>

    </>
  )
}

export default Sidebar
