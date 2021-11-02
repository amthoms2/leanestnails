import React from "react";
import Chart from "../../components/Chart";
import img from "../../nailflower.jpg";
import { productData } from "../../data";
import { Link } from "react-router-dom";
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
  UploadImage
} from "./ProductElements";

const Product = () => {
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
              data={productData}
              dataKey="Sales"
              title="Sales Performance"
            />
          </TopLeft>

          <TopRight>
            <InfoTop>
              <Image src={img}></Image>
              <ProductName>Cinderella Press Ons</ProductName>
            </InfoTop>

            <InfoBottom>
              <InfoItem>
                <Key>id:</Key>
                <Value>1</Value>
              </InfoItem>

              <InfoItem>
                <Key>sales:</Key>
                <Value>14</Value>
              </InfoItem>

              <InfoItem>
                <Key>active:</Key>
                <Value>yes</Value>
              </InfoItem>

              <InfoItem>
                <Key>in stock:</Key>
                <Value>no</Value>
              </InfoItem>
            </InfoBottom>
          </TopRight>
        </Top>

        <Bottom>
          <Form>
            <Left>
                <label>Product Name</label>
                <Input type="text" placeholder="Cinderella Press Ons"></Input>

                <label>In Stock</label>
                <Select name="inStock" id="idStock">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Select>


                <label>Active</label>
                <Select name="active" id="active">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Select>
            </Left>

            <Right>
              <Upload>
                <UploadImage src={img}></UploadImage>
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
