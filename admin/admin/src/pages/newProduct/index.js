import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  NewProductContainer,
  Title,
  Form,
  Item,
  NewProductButton,
  Input,
} from "./NewProductElements.js";
import app from "../../firebase";
import { addProducts } from "../../redux/api.js";

const NewProduct = () => {
  const [inputs, setInputs] = useState({});
  const [imgFile, setImgFile] = useState(null);
  const dispatch = useDispatch();

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
    //this will prevent files w/ same name to override each other
    const fileName = new Date().getTime() + imgFile.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    //upload process begins here
    const uploadTask = uploadBytesResumable(storageRef, imgFile);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
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
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = {...inputs, img:downloadURL };
          addProducts(product, dispatch)
        });
      }
    );
  };
  console.log(inputs);
  console.log(imgFile);
  return (
    <>
      <NewProductContainer>
        <Title>New Product</Title>
        <Form>
          <Item>
            <label>
              <b>Image</b>
            </label>
            <Input
              type="file"
              name="img"
              id="file"
              onChange={handleFile}
            ></Input>
          </Item>

          <Item>
            <label>Title</label>
            <Input
              name="title"
              type="text"
              placeholder="Product Name"
              onChange={handleChange}
            ></Input>
          </Item>

          <Item>
            <label>Description</label>
            <Input
              name="desc"
              type="text"
              placeholder="Description"
              onChange={handleChange}
            ></Input>
          </Item>

          <Item>
            <label>Price</label>
            <Input
              name="price"
              type="number"
              placeholder="Amount"
              onChange={handleChange}
            ></Input>
          </Item>

          <Item>
            <label>Stock</label>
            <select name="inStock" onChange={handleChange}>
              <option disabled selected></option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </Item>

          <Item>
            <label>Category</label>
            <select name="categories" onChange={handleChange}>
              <option disabled selected></option>
              <option value="press-ons">Press Ons</option>
              <option value="custom">Custom Press ons</option>
            </select>
          </Item>

          <Item>
            <label>Nail Shape</label>
            <select name="shape" onChange={handleChange}>
              <option disabled selected></option>
              <option value="Short Oval">Short Oval</option>
              <option value="Long Stiletto">Long Stiletto</option>
              <option value="Short Square">Short Square</option>
              <option value="other">Other</option>
            </select>
          </Item>

          <Item>
            <label>Color</label>
            <select name="color" onChange={handleChange}>
              <option disabled selected></option>
              <option value="black">Black</option>
              <option value="white">White</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="multicolor">Multicolor</option>
            </select>
          </Item>

          <NewProductButton onClick={handleClick}>Create</NewProductButton>
        </Form>
      </NewProductContainer>
    </>
  );
};

export default NewProduct;
