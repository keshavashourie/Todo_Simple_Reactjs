import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { button, card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

//https://towardsdatascience.com/build-a-simple-todo-app-using-react-a492adc9c8a4
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
