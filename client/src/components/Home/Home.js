import React, { useState, useEffect } from "react";
import { Container, Grid, Button } from "@material-ui/core";
import Form from "../Form/Form";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/posts";
import DataTable from "../DataTable/DataTable";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId]);
  return (
    <Container>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Form setCurrentId={setCurrentId} currentId={currentId} />
        </Grid>

        <Grid item xs={12} sm={7}>
          <DataTable posts={posts} setCurrentId={setCurrentId} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
