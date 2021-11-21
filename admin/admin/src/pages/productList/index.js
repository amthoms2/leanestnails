import React, { useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { getStorage, ref, deleteObject } from "firebase/storage";
import app from "../../firebase";
import { getProducts } from "../../redux/api";
// import {productsRowsData} from "../../data"
import {
  ProductListContainer,
  ProductItem,
  Image,
  EditButton,
  DeleteButton,
} from "./ProductListElements";
import { ProductButton } from "../product/ProductElements";
import { deleteProducts } from "../../redux/api";

const ProductList = () => {
  // const [data, setData] = useState(productsRowsData);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const deleteButton = (id, img) => {
    // deleteProducts(id, dispatch)

    // const filteredRow = data.filter((row) => row.id !== id);
    // setData(filteredRow);

    // const confirmed = window.confirm("Are you sure?");
    // if(confirmed) {
    //   deleteProducts(id, dispatch)
    // }
    confirmAlert({
      title: "Confirm to submit",
      message:
        "Are you sure you want to do this? This item will be permanently deleted.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            deleteProducts(id, dispatch);
            // Delete the img file with product!
            const storage = getStorage(app);
            const desertRef = ref(storage, img);
            deleteObject(desertRef)
              .then(() => {
                // File deleted successfully
              })
              .catch((error) => {
                console.log(error);
              });

          },
        },
        {
          label: "No",
          // onClick: () => console.log("row Id", id),
        },
      ],
      closeOnEscape: true,
      closeOnClickOutside: true,
    });
  };

  const columns = [
    {
      field: "_id", headerName: "ID", width: 230,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id} style={{textDecoration: "none", color: "#000000DE"}}>{params.row._id}</Link>
          </>
        );
      },
   },
    {
      field: "product",
      headerName: "Product",
      width: 160,
      renderCell: (params) => {
        return (
          <ProductItem>
            <Image src={params.row.img} alt=""></Image>
            {params.row.title}
          </ProductItem>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 160 },
    { field: "quantity", headerName: "Qty", width: 160 },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <EditButton>Edit</EditButton>
            </Link>
            <DeleteButton
              onClick={() => deleteButton(params.row._id, params.row.img)}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      <ProductListContainer>
        <Link to="/newProduct">
          <ProductButton
            style={{ position: "relative", right: "10px", bottom: "10px" }}
          >
            Create New Product
          </ProductButton>
        </Link>

        <DataGrid
          rows={products}
          columns={columns}
          pageSize={10}
          getRowId={(row) => row._id}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </ProductListContainer>
    </>
  );
};

export default ProductList;
