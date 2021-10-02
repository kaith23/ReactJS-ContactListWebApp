import React, { useState, useEffect } from "react";
import "./style.css";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Avatar,
  Paper,
} from "@material-ui/core";
import useStyles from "./styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";
import { createPost, updatePost } from "../../actions/posts";
import { setErrors } from "../../components/Validation/Validation";

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

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    fullName: "",
    emailAddress: "",
    contactNumber: "",
    location: "",
    registeredDate: "",
    errorMessage: {},
  });

  const [mistake, setMistake] = useState({
    fullName: "",
    emailAddress: "",
    contactNumber: "",
    location: "",
    registeredDate: "",
  });

  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) {
      setPostData(post);
    } else {
      setPostData({
        fullName: "",
        emailAddress: "",
        contactNumber: "",
        location: "",
        registeredDate: "",
      });
    }
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({
      fullName: "",
      emailAddress: "",
      contactNumber: "",
      location: "",
      registeredDate: "",
    });
  };
  // FOR VALIDATION
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

  console.log(postData.errorMessage?.fullName);
  // END FOR VALIDATION

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(postData);

    const { fullName, emailAddress, contactNumber, location, registeredDate } =
      postData;

    //FOR VALIDATION
    if (
      validation(
        fullName,
        emailAddress,
        contactNumber,
        location,
        registeredDate
      )
    ) {
      console.log(postData);

      if (currentId === 0) {
        console.log("sfs");
        dispatch(createPost(postData));
        clear();
        window.location.reload();
      }
    }
    //END FOR VALIDATION
  };

  const [location, setLocation] = React.useState("");

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>
            <AccountCircleIcon />
          </Avatar>

          <Typography variant="h5">Create contacts</Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="filled-error"
                  name="fullName"
                  variant="outlined"
                  helperText={mistake.fullName}
                  placeholder="Last Name, First Name Middle Initial"
                  value={postData.fullName}
                  onChange={(e) =>
                    setPostData({ ...postData, fullName: e.target.value })
                  }
                  fullWidth
                  label="Full Name"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="outlined-error-helper-text"
                  label="Error"
                  helperText={mistake.emailAddress}
                  placeholder="example@email.com"
                  type="email"
                  name="emailAddress"
                  variant="outlined"
                  value={postData.emailAddress}
                  onChange={(e) =>
                    setPostData({ ...postData, emailAddress: e.target.value })
                  }
                  fullWidth
                  label="Email Address"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="outlined-error-helper-text"
                  label="Error"
                  helperText={mistake.contactNumber}
                  placeholder="09999999999"
                  type="number"
                  name="contactNumber"
                  variant="outlined"
                  value={postData.contactNumber}
                  onChange={(e) =>
                    setPostData({ ...postData, contactNumber: e.target.value })
                  }
                  fullWidth
                  label="Contact Number"
                />
              </Grid>

              <Grid item xs={12}>
                <MenuItem
                  fullWidth
                  label="Location"
                  helperText={mistake.location}
                  variant="outlined"
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
                    value={postData.location}
                    name="location"
                    placeholder=""
                  >
                    <option value="" hidden>
                      Select Location
                    </option>
                    <option value="Manila">Manila</option>
                    <option value="Cebu">Cebu</option>
                  </select>{" "}
                </MenuItem>
                <p>{mistake.location}</p>
              </Grid>

              <Grid item xs={12}>
                Registered Date
                <TextField
                  id="outlined-error-helper-text"
                  helperText={mistake.registeredDate}
                  type="date"
                  name="registeredDate"
                  variant="outlined"
                  value={postData.registeredDate}
                  onChange={(e) =>
                    setPostData({ ...postData, registeredDate: e.target.value })
                  }
                  fullWidth
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Add Contact
            </Button>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default Form;
