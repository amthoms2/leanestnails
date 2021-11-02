import React, {useState} from 'react'
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import {productsRowsData} from "../../data"
import { ProductListContainer, ProductItem, Image, EditButton, DeleteButton} from './ProductListElements'

const ProductList = () => {
  const [data, setData] = useState(productsRowsData);

  const deleteButton = (id) => {
    const filteredRow = data.filter((row) => row.id !== id);
    setData(filteredRow);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 95 },
    {
      field: "product",
      headerName: "Product",
      width: 280,
      renderCell: (params) => {
        return (
          <ProductItem>
            <Image src={params.row.img} alt="">
            </Image>
            {params.row.name}
          </ProductItem>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 160 },
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
              <Link to={"/product/" + params.row.id}>
                <EditButton>Edit</EditButton>
              </Link>
              <DeleteButton
            onClick={() => deleteButton(params.row.id)}
            />
            </>
          );
        },
      },
  ];

  return (
    <>
    <ProductListContainer>
    <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
      </ProductListContainer>
    </>
  )
}

export default ProductList
