import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ButtonLink from "../ButtonLink/ButtonLink";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(2),
    marginTop: 250,
    width: 500,
    marginLeft: 320,
    flex: 10,
    backgroundImage: `url(https://www.electronics.ca/wp/wp-content/uploads/2014/05/high-tech-markets-963x350.jpg)`,
    backgroundSize: "cover",
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
  },
}));

const SimpleCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h4" component="h6" style={{ color: "white" }}>
          <b> Manage Your Contacts Now!</b>
        </Typography>
      </CardContent>
      <CardActions className={classes.button}>
        <ButtonLink />
      </CardActions>
    </Card>
  );
};

export default SimpleCard;
