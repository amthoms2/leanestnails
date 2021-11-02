import React from "react";
import {
  PermIdentity,
  PhoneAndroid,
  MailOutline,
  LocationSearching,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import {
  UserContainer,
  UserTitle,
  Title,
  UserButton,
  UserDisplay,
  UserShow,
  UserUpdate,
  Top,
  TopTitle,
  Username,
  Bottom,
  BottomTitle,
  InfoTitle,
  Information,
  Icon,
  UpdateTitle,
  Form,
  UpdateItem,
  Left,
  Input,
} from "./UserElements";

const User = () => {
  return (
    <>
      <UserContainer>
        <UserTitle>
          <Title>Edit User</Title>
          <Link to="/newUser">
            <UserButton>Create</UserButton>
          </Link>
        </UserTitle>

        <UserDisplay>
          <UserShow>
            <Top>
              <TopTitle>
                <Username>John Snow</Username>
              </TopTitle>
            </Top>

            <Bottom>
              <BottomTitle>Account</BottomTitle>
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

          <UserUpdate>
            <UpdateTitle>Edit</UpdateTitle>
            <Form>
              <Left>
                <UpdateItem>
                  <label>Full Name</label>
                  <Input type="text" placeholder="John Snow"></Input>
                </UpdateItem>

                <UpdateItem>
                  <label>Username</label>
                  <Input type="text" placeholder="jsw"></Input>
                </UpdateItem>

                <UpdateItem>
                  <label>Phone</label>
                  <Input type="text" placeholder="573-335-6790"></Input>
                </UpdateItem>

                <UpdateItem>
                  <label>Email</label>
                  <Input type="email" placeholder="jsnow@gmail.com"></Input>
                </UpdateItem>

                <UpdateItem>
                  <label>Location (City, State)</label>
                  <Input type="text" placeholder="Chicago, Il"></Input>
                </UpdateItem>
              </Left>
            </Form>
          </UserUpdate>
        </UserDisplay>
      </UserContainer>
    </>
  );
};

export default User;
