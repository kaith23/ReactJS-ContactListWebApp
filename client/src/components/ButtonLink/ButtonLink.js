import React from "react";
import Link from "@material-ui/core/Link";

const ButtonLink = () => {
  return (
    <Link
      component="button"
      variant="body3"
      onClick={() => {
        console.info("I'm a button.");
      }}
    >
     <b><h3> <a href="/create" style={{ color: 'white' }}>Let's Go</a></h3></b>
    </Link>
  );
};

export default ButtonLink;
