import React from "react";
import { Link } from "@reach/router";
import { Store } from "./Store";

function App(props: any): JSX.Element {
  const { state } = React.useContext(Store);

  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favourite eposode!!!</p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/faves">favourite(s) {state.favourites.length}</Link>
        </div>
      </header>
      {props.children}
    </React.Fragment>
  );
}

export default App;
