import React from 'react'
import img from "../../../nailflower.jpg"
import {SmallContainer, Title, List, ListItem, Image, User, Username, UserTitle, Button, VisibilityIcon} from "./SmallElements"

const SmallWidget = () => {
  return (
    <>
      <SmallContainer>
        <Title>New Members</Title>
        <List>
          <ListItem>
          <Image src={img} />
            <User>
              <Username>Corbin</Username>
              <UserTitle>Basketball</UserTitle>
            </User>
            <Button>
              <VisibilityIcon style={{fontSize: '23px'}} />
              Display
            </Button>
          </ListItem>

          <ListItem>
          <Image src={img} />
            <User>
              <Username>Taylor</Username>
              <UserTitle>President </UserTitle>
            </User>
            <Button>
              <VisibilityIcon style={{fontSize: '23px'}} />
              Display
            </Button>
          </ListItem>

          <ListItem>
          <Image src={img} />
            <User>
              <Username>Kelsey</Username>
              <UserTitle>The pianist</UserTitle>
            </User>
            <Button>
              <VisibilityIcon style={{fontSize: '23px'}} />
              Display
            </Button>
          </ListItem>
        </List>
      </SmallContainer>
    </>
  )
}

export default SmallWidget
