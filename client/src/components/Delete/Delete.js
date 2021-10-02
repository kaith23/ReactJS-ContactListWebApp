import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useDispatch } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { Grid } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import { deletePost } from "../../actions/posts";
import { useParams } from "react-router";

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

const Delete = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const xid = id.split("*").slice(0, 1).join(" ");

  const xfullName = id.split("*").slice(1, 2).join(" ");
  const xemailAddress = id.split("*").slice(2, 3).join(" ");
  const xcontactNumber = id.split("*").slice(3, 4).join(" ");
  const xlocation = id.split("*").slice(4, 5).join(" ");
  const xregisteredDate = id.split("*").slice(5, 6).join(" ");

  const classes = useStyles();
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
        Are you sure you want to delete the record?
      </h2>
      <ButtonGroup disableElevation variant="contained" color="primary">
        <Button
          onClick={() => {
            dispatch(deletePost(xid));
          }}
          href="/create"
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
      <Grid item sm={5}>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              ID: &nbsp; {xid}
              <span></span>
            </Typography>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Full Name:{xfullName}
            </Typography>

            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Email Address:{xemailAddress}
            </Typography>

            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Contact Number:{xcontactNumber}
            </Typography>

            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Location:{xlocation}
            </Typography>

            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Registered Date: {xregisteredDate}
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
                Delete
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

export default Delete;
