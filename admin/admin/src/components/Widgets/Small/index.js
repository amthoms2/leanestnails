import React, { useState, useEffect } from "react";
import axios from "axios";
import img from "../../../nailflower.jpg";
import config from "../../../config";
import {
  SmallContainer,
  Title,
  List,
  ListItem,
  Image,
  User,
  Username,
  Button,
  VisibilityIcon,
} from "./SmallElements";

const SmallWidget = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/users/?new=true", config
        );
        console.log(res)
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);

  return (
    <>
      <SmallContainer>
        <Title>New Members</Title>
        <List>
          {users.map((user) => (
            <ListItem key={user._id}>
              <Image src={img} />
              <User>
                <Username>{user.username}</Username>
              </User>
              <Button>
                <VisibilityIcon style={{ fontSize: "23px" }} />
                Display
              </Button>
            </ListItem>
          ))}
        </List>
      </SmallContainer>
    </>
  );
};

export default SmallWidget;
