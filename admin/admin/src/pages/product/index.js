import React, { useState, useEffect, useMemo } from "react";
import Chart from "../../components/Chart";
import axios from "axios";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
// import img from "../../nailflower.jpg";
// import { productData } from "../../data";
import app from "../../firebase";
import { Link, useLocation, useHistory } from "react-router-dom";
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
import { useSelector, useDispatch } from "react-redux";
// import { updateProduct } from "../../redux/productRedux";
import { updateProducts } from "../../redux/api";

let config = {
  headers: {
    token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWY2MDgwOTQ5NTdkZTg5ZGRhNjM2NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzI2MTk4MSwiZXhwIjoxNjQyNDQ1OTgxfQ.Suv0vGZ8dRzvbY8PGj3M46Dz1A5V5Nbz8ZoxC0Swh2E"
  },
};

const Product = () => {
  const [inputs, setInputs] = useState({});
  const [imgFile, setImgFile] = useState(null);
  const dispatch = useDispatch();
  let history = useHistory();
  const location = useLocation();
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

  const handleFile = (evt) => {
    setImgFile(evt.target.files[0]);
  };

  const handleChange = (evt) => {
    setInputs((prev) => {
      return { ...prev, [evt.target.name]: evt.target.value };
    });
  };

  const handleClick = (evt) => {
    evt.preventDefault();

    if(imgFile){
      const fileName = new Date().getTime() + imgFile.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);
    //upload process begins here
    const uploadTask = uploadBytesResumable(storageRef, imgFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
          default:
            console.log(error)
        }
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const updatedProduct = { ...inputs, img: downloadURL };
          updateProducts(product._id, updatedProduct, dispatch);
        });
      }
    );
    history.push("/products");
    } else {
      alert('Missing Fields')
    }

    // const updatedProduct = { ...inputs };
    // updateProducts(product._id, updatedProduct, dispatch)
  }

  // useEffect(() => {
  //   updateProduct(dispatch);
  // }, [dispatch]);


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
              <Input type="text" name="title" placeholder={product.title} onChange={handleChange}></Input>

              <label>Description</label>
              <Input type="text" name="desc" placeholder={product.desc} onChange={handleChange}></Input>

              <label>Price</label>
              <Input type="number" name="price" placeholder={product.price} onChange={handleChange}></Input>

              <label>Qty</label>
              <Input type="number" name="quantity" placeholder={product.quantity} onChange={handleChange}></Input>

              <label>In Stock</label>
              <Select name="inStock" id="idStock" onChange={handleChange}>
                <option disabled selected></option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </Select>

              <label>Category</label>
              <Select name="category" id="category" onChange={handleChange}>
                <option disabled selected></option>
                <option value="press-ons">Press Ons</option>
                <option value="custom">Custom Press ons</option>
              </Select>

              <label>Nail Shape</label>
              <Select name="shape" id="shape" onChange={handleChange}>
                <option disabled selected></option>
                <option value="Short Oval">Short Oval</option>
                <option value="Long Stiletto">Long Stiletto</option>
                <option value="Short Square">Short Square</option>
                <option value="other">Other</option>
              </Select>

              <label>Color</label>
              <Select name="color" id="color" onChange={handleChange}>
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

              <input type="file" name="img" id="file" onChange={handleFile}/>
              <ProductButton onClick={handleClick}>Update</ProductButton>
            </Right>
          </Form>
        </Bottom>
      </ProductContainer>
    </>
  );
};

export default Product;
