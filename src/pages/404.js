import * as React from "react";
import * as Style from "./404.module.scss";

const PageNotFound = () => (
  <>
    <div className={Style.notFound}>
      <h1>404: Page not found</h1>
      <p>You just hit a route that doesn’t exist... the sadness :(</p>
    </div>
  </>
);

export default PageNotFound;
