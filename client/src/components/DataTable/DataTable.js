import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { DataGrid } from "@material-ui/data-grid";
import { IconButton } from "@material-ui/core";

const DataTable = ({ posts, setCurrentId }) => {
  const dispatch = useDispatch();

  console.log(posts);

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 110,
    },
    {
      field: "fullName",
      headerName: "Full Name",
      width: 200,
    },
    {
      field: "emailAddress",
      headerName: "Email Address",
      width: 200,
    },
    {
      field: "contactNumber",
      headerName: "ContactNumber",
      width: 200,
    },
    {
      field: "location",
      headerName: "Location",
      width: 200,
    },
    {
      field: "registeredDate",
      headerName: "Registered Date",
      width: 200,
    },
    {
      field: "",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <IconButton aria-label="delete">
              <Link
                to={`/delete/${params.row._id}*${params.row.fullName}*${params.row.emailAddress}*${params.row.contactNumber}*${params.row.location}*${params.row.registeredDate}`}
              >
                <DeleteIcon fontSize="small" color="primary" />
              </Link>
            </IconButton>

            <IconButton aria-label="update">
              <Link
                to={`/update/${params.row._id}*${params.row.fullName}*${params.row.emailAddress}*${params.row.contactNumber}*${params.row.location}*${params.row.registeredDate}`}
              >
                <CreateIcon fontSize="small" color="primary" />
              </Link>
            </IconButton>

            <IconButton aria-label="view">
              <Link
                to={`/retrieve/${params.row._id}*${params.row.fullName}*${params.row.emailAddress}*${params.row.contactNumber}*${params.row.location}*${params.row.registeredDate}`}
              >
                <AccountBoxIcon fontSize="small" color="primary" />
              </Link>
            </IconButton>
          </>
        );
      },
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={posts}
        columns={columns}
        pageSize={5}
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default DataTable;
