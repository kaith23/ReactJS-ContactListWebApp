import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import SimpleCard from "./components/SimpleCard/SimpleCard";
import Retrieve from "./components/Retrieve/Retrieve";
import Update from "./components/Update/Update";
import Delete from "./components/Delete/Delete";
const App = () => {
  const [currentId, setCurrentId] = useState(0);
  console.log(currentId);
  return (
    <Container>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SimpleCard} />

          <Route path="/create">
            <Home currentId={currentId} setCurrentId={setCurrentId} />
          </Route>

          <Route path="/retrieve/:id">
            <Retrieve currentId={currentId} />
          </Route>

          <Route path="/update/:UpdateId">
            <Update currentId={currentId} />
          </Route>

          <Route path="/delete/:id">
            <Delete currentId={currentId} />
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  );
};

export default App;
