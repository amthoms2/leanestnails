import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import { DataGrid } from "@material-ui/data-grid";
import ShopNav from "../../components/Shop/ShopNav";
import Footer from "../../components/Footer";
import styled from "styled-components";
import img from "../../images/lighting.jpg";
import { services } from "../../data";

// import { useSelector } from "react-redux";

const BookingWrapper = styled.div`
  background-image: url(${img});
  background-size: cover;
  /* background-size: cover; */
  backdrop-filter: blur(8.5px);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  height: 80vh;
  width: 60vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
`;

const Book = () => {
  const [selectionModel, setSelectionModel] = useState([]);
  // const checkState = useSelector((state) => state);
  // console.log(checkState)
  const bookingPage = true;

  const columns = [
    {
      field: "services",
      headerName: "Select Services",
      width: 230,
      renderCell: (params) => {
        return (
          <>
            {params.row.name}
          </>
        );
      },
    },
  ];

  // const handleClick = (evt) => {
  //   evt.preventDefault();
  //   <Link to="/book/calendar">

  //       </Link>

  // }

  return (
    <>
      <ShopNav isBooking={bookingPage} />
      <h1>Book Appointment</h1>
      <BookingWrapper>
        <MainContainer>
          <DataGrid
            rows={services}
            columns={columns}
            /* pageSize={10} */
            getRowId={(row) => row.id}
            rowsPerPageOptions={[10]}
            checkboxSelection
            hideFooterPagination
            disableSelectionOnClick
            onSelectionModelChange={(newSelectionModel) => {
              setSelectionModel(newSelectionModel);
            }}
            selectionModel={selectionModel}
          />
          {/* {console.log(selectionModel)} */}
        </MainContainer>
        <Link to="/book/calendar">
        <button>Click</button>
          </Link>
      </BookingWrapper>
      <Footer />
    </>
  );
};

export default Book;
