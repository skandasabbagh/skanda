import React from "react";
import "./index.css";
import { Navbar } from "../components/navbar";

const IndexPage = () => {
  return (
    <div>
      <div class="main-page-container">
        <section class="index-hero">
          <Navbar />
          <div class="index-hero-title-container">
            <h1 class="index-hero-title m-t=5">Skanda Home page</h1>
          </div>
        </section>
      </div>
    </div>
  );
};
export default IndexPage;
