import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
import "i18n/i18n";
import Loading from "images/loader/loading.gif";
import tw from "twin.macro";
import styled from "styled-components";
import Loader from "components/loader";
Modal.setAppElement("#root");

const LoaderImg = styled.img`
  display: block;
  margin: auto;
  width: 25%;
`;

ReactDOM.render(
  <Suspense
    fallback={
        <Loader/>
    }
  >
    <App />
  </Suspense>,
  document.getElementById("root")
);
