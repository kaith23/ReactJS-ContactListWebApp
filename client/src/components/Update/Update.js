import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Avatar,
  Paper,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { setErrors } from "../../components/Validation/Validation";
import { createPost, updatePost } from "../../actions/posts";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import Link from "@material-ui/core/Link";
import { useParams } from "react-router";

import Navbar from "../Navbar/Navbar";

import Modal from "@material-ui/core/Modal";


const locations = [
  {
    value: "Manila",
    label: "Manila",
  },
  {
    value: "Cebu",
    label: "Cebu",
  },
];

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    minWidth: 275,
  },

  title: {
    fontSize: 14,
  },
}));

let Update = (currentId, setCurrentId) => {
  let { UpdateId } = useParams();

   currentId = UpdateId.split("*").slice(0, 1).join(" ");
  const xfullName = UpdateId.split("*").slice(1, 2).join(" ");
  const xemailAddress = UpdateId.split("*").slice(2, 3).join(" ");
  const xcontactNumber = UpdateId.split("*").slice(3, 4).join(" ");
  const xlocation = UpdateId.split("*").slice(4, 5).join(" ");
  const xregisteredDate = UpdateId.split("*").slice(5, 6).join(" ");

  // console.log(props.match.params.id)

  const [postData, setPostData] = useState({
    fullName: xfullName,
    emailAddress: xemailAddress,
    contactNumber: xcontactNumber,
    location: xlocation,
    registeredDate: xregisteredDate,
    errorMessage: {},
  });

  const [mistake, setMistake] = useState({
    fullName: "",
    emailAddress: "",
    contactNumber: "",
    location: "",
    registeredDate: "",
  });

  // const post = useSelector((state) =>
  //   currentId ? state.posts.find((message) => message._id === currentId) : null
  // );

  const dispatch = useDispatch();
  const classes = useStyles();

  // useEffect(() => {
  //   if (post) {
  //     setPostData(post);
  //   } else {
  //     setPostData({
  //       fullName: "",
  //       emailAddress: "",
  //       contactNumber: "",
  //       location: "",
  //       registeredDate: "",
  //     });
  //   }
  // }, [post]);

  // const clear = () => {
  //   setCurrentId(0);
  //   setPostData({
  //     fullName: "",
  //     emailAddress: "",
  //     contactNumber: "",
  //     location: "",
  //     registeredDate: "",
  //   });
  // };

  const validation = (
    fullName,
    emailAddress,
    contactNumber,
    location,
    registeredDate
  ) => {
    const setError = setErrors(
      fullName,
      emailAddress,
      contactNumber,
      location,
      registeredDate
    );
    setMistake(setError);
    return Object.values(setError).every((er) => er === "");
  };

  //  console.log(postData.errorMessage?.fullName);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Mistake", mistake);

    // console.log(postData);

    const { fullName, emailAddress, contactNumber, location, registeredDate } =
      postData;

    if (
      validation(
        fullName,
        emailAddress,
        contactNumber,
        location,
        registeredDate
      )
    ) {
      console.log("HEHEHE");
      console.log(postData);
      dispatch(updatePost(currentId, postData));
      // if (currentId === 0) {
      //   dispatch(createPost(postData));
      //   clear();
      //   window.location.reload();
      // } else {
      //   dispatch(updatePost(currentId, postData));
      //   clear();
      // }
    }
  };

  const [location, setLocation] = React.useState("");

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">
        Please confirm the Update to the following:
      </h2>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Email Address:{postData.emailAddress}
      </Typography>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Contact Number:{postData.contactNumber}
      </Typography>

      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Location:{postData.location}
      </Typography>
      <ButtonGroup disableElevation variant="contained" color="primary">
        {/* <Button
          onClick={() => {
            console.log(postData.contactNumber)
          }}
          // href="/create"
        >
          YES
        </Button> */}
        <Button
          onClick={handleSubmit}
          // href="/create"
        >
          YES
        </Button>
        <Button>NO</Button>
      </ButtonGroup>
    </div>
  );

  return (
    <>
      <Navbar />
      {/* <Grid container spacing={2}> */}
      <Grid item sm={5}>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              <TextField
                id="filled-error"
                name="fullName"
                variant="outlined"
                placeholder="Last Name, First Name Middle Initial"
                value={xfullName}
                fullWidth
                label="Full Name"
              />
            </Typography>

            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              <TextField
                id="outlined-error-helper-text"
                label="Error"
                helperText={mistake.emailAddress}
                placeholder="example@email.com"
                type="email"
                name="emailAddress"
                variant="outlined"
                defaultValue={xemailAddress}
                onChange={(e) =>
                  setPostData({ ...postData, emailAddress: e.target.value })
                }
                fullWidth
                label="Email Address"
              />
            </Typography>

            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              <TextField
                id="outlined-error-helper-text"
                label="Error"
                helperText={mistake.contactNumber}
                placeholder="09999999999"
                type="number"
                name="contactNumber"
                variant="outlined"
                defaultValue={xcontactNumber}
                onChange={(e) =>
                  setPostData({ ...postData, contactNumber: e.target.value })
                }
                fullWidth
                label="Contact Number"
              />
            </Typography>

            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              <select
                fullWidth
                label="Location"
                id="standard-select-location"
                className="form-select custom-select mr-sm-2 form-control"
                aria-label="Default select example"
                onChange={(e) =>
                  setPostData({ ...postData, location: e.target.value })
                }
                defaultValue={postData.location}
                name="location"
                placeholder=""
              >
                <option hidden>
                  Select Location
                </option>
                <option value="Manila">Manila</option>
                <option value="Cebu">Cebu</option>
              </select>
            </Typography>

            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Registered Date:{xregisteredDate}
            </Typography>
          </CardContent>
          <CardActions>
            <div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={() => {
                  console.info("I'm a button.");
                }}
                href="/create"
              >
                Back
              </Button>
            </div>
            <div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleOpen}
              >
                Save
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                {body}
              </Modal>
            </div>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};


export default Update;
