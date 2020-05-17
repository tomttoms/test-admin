import React from "react";
import { Admin, Resource, ListGuesser, ShowGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={ListGuesser} show={ShowGuesser} />
  </Admin>
);

export default App;
