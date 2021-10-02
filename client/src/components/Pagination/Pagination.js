import React from "react";
import Navbar from "../Navbar/Navbar";
import { Button } from "@material-ui/core";
import DataTable from "../DataTable/DataTable";

const Pagination = () => {
  return (
    <>
      <Navbar />
      <DataTable />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        // onClick={() => {
        //   console.info("I'm a button.");
        // }}
        href="/create"
      >
        Back
      </Button>
    </>
  );
};

export default Pagination;
