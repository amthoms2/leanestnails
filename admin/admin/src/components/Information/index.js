import React, { useEffect, useState } from "react";
import axios from "axios";
// import {ArrowDownward, ArrowUpward} from "@material-ui/icons"
import {
  InformationContainer,
  InfoItem,
  MoneyContainer,
  Price,
  Rate,
  Sub,
  Title,
  Icon,
  ArrowUp,
  ArrowDown,
} from "./InformationElements";

let config = {
  headers: {
    token: `Bearer ${
      JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
        .currentUser.accessToken
    }`,
  },
};

const Information = () => {
  const [cost, setCost] = useState([]);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const getCost = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/orders/income",
          config
        );
        console.log(res)
        setCost(res.data);
          console.log(1 - res.data[0].total / res.data[1].total);

        if (res.data[0]._id > res.data[1]._id) {
          setPercentage((1 - res.data[0].total / res.data[1].total) * 100);
        } else {
          setPercentage((1 - res.data[1].total / res.data[0].total) * 100);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getCost();
  }, [percentage]);
  console.log("cost", cost);
  return (
    <>
      <InformationContainer>
        <InfoItem>
          <Title>Sales</Title>
          <MoneyContainer>
            <Price>
              $
              {cost.length > 0 && cost[0]._id < cost[1]._id
                ? cost[0].total
                : cost.length > 0 && cost[1].total}
            </Price>
            <Rate>
              {Math.floor(percentage)}%{" "}

              {cost.length > 0 && cost[0]._id > cost[1]._id && cost[0].total < cost[1].total ? (
                <Icon>
                <ArrowDown />
              </Icon>
              ) : cost.length > 0 && cost[0]._id < cost[1]._id && cost[0].total > cost[1].total ?
              (
                <Icon>
                <ArrowDown />
              </Icon>
              ) : (
                <Icon>
                <ArrowUp />
              </Icon>
              )
            }
            </Rate>
          </MoneyContainer>
          <Sub>last month</Sub>
        </InfoItem>

        <InfoItem>
          <Title>Orders</Title>
          <MoneyContainer>
            <Price>23</Price>
            <Rate>
              -1.4{" "}
              <Icon>
                <ArrowDown />
              </Icon>
            </Rate>
          </MoneyContainer>
          <Sub>last month</Sub>
        </InfoItem>

        <InfoItem>
          <Title>Costs</Title>
          <MoneyContainer>
            <Price>$2400</Price>
            <Rate>
              1.9
              <Icon>
                <ArrowUp color="safe" />
              </Icon>
            </Rate>
          </MoneyContainer>
          <Sub>last month</Sub>
        </InfoItem>
      </InformationContainer>
    </>
  );
};

export default Information;
