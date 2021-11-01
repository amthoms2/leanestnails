import React from 'react'
import { PermIdentity, PhoneAndroid, MailOutline, LocationSearching } from '@material-ui/icons'
import { UserContainer, UserTitle, Title, UserButton, UserDisplay, UserShow, UserUpdate, Top, TopTitle, Username, Bottom, BottomTitle, InfoTitle, Information, Icon} from "./UserElements"


const User = () => {
  return (
    <>
      <UserContainer>
        <UserTitle>
          <Title>Edit</Title>
          <UserButton>Create</UserButton>
        </UserTitle>

      <UserDisplay>
        <UserShow>
          <Top>
            <TopTitle>
              <Username>John Snow</Username>
            </TopTitle>
          </Top>
          <Bottom>
            <BottomTitle>
              Account
            </BottomTitle>
          <Information>
            <Icon>
            <PermIdentity />
            </Icon>
            <InfoTitle>jsw</InfoTitle>
            </Information>

            <Information>
            <PhoneAndroid />
            <InfoTitle>573-335-6790</InfoTitle>
            </Information>

            <Information>
            <MailOutline />
            <InfoTitle>jsno2@gmail.com</InfoTitle>
            </Information>

            <Information>
            <LocationSearching />
            <InfoTitle>Chicago, Il</InfoTitle>
            </Information>

          </Bottom>
        </UserShow>
        <UserUpdate></UserUpdate>
      </UserDisplay>
      </UserContainer>
    </>
  )
}

export default User
