import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import SimpleCard from "./components/SimpleCard/SimpleCard";
import Retrieve from "./components/Retrieve/Retrieve";
import Update from "./components/Update/Update";
import Delete from "./components/Delete/Delete";
// import 'app.css';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  console.log(currentId);
  return (
    <Container>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={SimpleCard} />
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
          {/* <Route path="/create" component={Home} />
                <Route path="/retrieve" component={Retrieve} />
                <Route path="/update" component={Update} />
                <Route path="/delete" component={Delete} /> */}
          {/* <Route path="/pagination" component={Pagination} /> */}
        </Switch>
      </BrowserRouter>
    </Container>
  );
};

export default App;
