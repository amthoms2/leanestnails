import React, { useState, useEffect, useMemo } from "react";
import Chart from "../../components/Chart";
import axios from "axios";
// import img from "../../nailflower.jpg";
// import { productData } from "../../data";
import { Link, useLocation } from "react-router-dom";
import {
  ProductContainer,
  ProductTitle,
  Title,
  ProductButton,
  Top,
  TopLeft,
  TopRight,
  InfoTop,
  InfoBottom,
  Image,
  ProductName,
  InfoItem,
  Key,
  Value,
  Bottom,
  Form,
  Left,
  Input,
  Select,
  Right,
  Upload,
  UploadImage,
} from "./ProductElements";
import { useSelector } from "react-redux";

let config = {
  headers: {
    token: `Bearer ${
      JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
        .currentUser.accessToken
    }`,
  },
};

const Product = () => {
  const location = useLocation();

  console.log(location.pathname)
  const productId = location.pathname.split("/")[2];

  const [productStats, setProductStats ] = useState([]);

  const product = useSelector(state => state.product.products.find((product) => product._id === productId));

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getProductStats = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/orders/income?productId" + productId, config);
        //sort the months in order
        const list = res.data.sort((a,b)=>{
            return a._id - b._id
        })
        list.map((item) =>
          setProductStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getProductStats();
  }, [productId, MONTHS]);


  return (
    <>
      <ProductContainer>
        <ProductTitle>
          <Title>Edit Product</Title>
          <Link to="/newProduct">
            <ProductButton>Create New Product</ProductButton>
          </Link>
        </ProductTitle>

        <Top>
          <TopLeft>
            <Chart
              data={productStats}
              //from line 80
              dataKey="Sales"
              title="Sales Performance"
            />
          </TopLeft>

          <TopRight>
            <InfoTop>
              <Image src={product.img}></Image>
              <ProductName>{product.title}</ProductName>
            </InfoTop>

            <InfoBottom>
              <InfoItem>
                <Key>id:</Key>
                <Value>{product._id}</Value>
              </InfoItem>

              <InfoItem>
                <Key>sales:</Key>
                <Value>14</Value>
              </InfoItem>

              <InfoItem>
                <Key>in stock:</Key>
                <Value>{product.inStock}</Value>
              </InfoItem>
            </InfoBottom>
          </TopRight>
        </Top>

        <Bottom>
          <Form>
            <Left>
              <label>Product Title</label>
              <Input type="text" placeholder={product.title}></Input>


              <label>Description</label>
              <Input type="text" placeholder={product.desc}></Input>

              <label>Price</label>
              <Input type="text" placeholder={product.price}></Input>

              <label>In Stock</label>
              <Select name="inStock" id="idStock">
                <option disabled selected></option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </Select>

              <label>Category</label>
              <Select name="category" id="category">
                <option disabled selected></option>
                <option value="press-ons">Press Ons</option>
                <option value="custom">Custom Press ons</option>
              </Select>

              <label>Nail Shape</label>
              <Select name="shape" id="shape">
                <option disabled selected></option>
                <option value="Short Oval">Short Oval</option>
                <option value="Long Stiletto">Long Stiletto</option>
                <option value="Short Square">Short Square</option>
                <option value="other">Other</option>
              </Select>

              <label>Color</label>
              <Select name="color" id="color">
                <option disabled selected></option>
                <option value="black">Black</option>
                <option value="white">White</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="multicolor">Multicolor</option>
              </Select>
            </Left>

            <Right>
              <Upload>
                <UploadImage src={product.img}></UploadImage>
              </Upload>

              <input type="file" id="file" />
              <ProductButton>Update</ProductButton>
            </Right>
          </Form>
        </Bottom>
      </ProductContainer>
    </>
  );
};

export default Product;
