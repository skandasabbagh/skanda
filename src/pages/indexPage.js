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
            <h3 class="index-hero-title-top m-t=5">
              COMPOSITION / PRODUCTION / SOUND DESIGN
            </h3>
            <h1 class="index-hero-title m-t=5">SKANDA SABBAGH</h1>
            <h3 class="index-hero-title-bottom m-t=5">
              TRAILERS / FILMS / ALBUMS / COMMERCIALS
            </h3>
          </div>
        </section>
        <section class="projects-container">
          <div class="projects-title-continer">
            <div class="projects-container-title">PROJECTS</div>
          </div>
          <div class="projects-subtitle-container">
            <h3 class="projects-subtitle">
              BESPOKE MUSIC FOR ADVERTS, FILM, FASION & TV
            </h3>
          </div>
        </section>
        <section class="working-with-us-container">
          <div class="working-with-us-title-continer">
            <div class="working-with-us-title">WORKING WITH US</div>
          </div>
          <div class="working-with-us-paragraphs-container">
            <p class="working-with-us-paragraph 1">
              specialising in the creation of music to sync to film and visuals
              ...from the subtle to the epic, high energy or bubbly we can
              fulfill your brief and vision with short turnarounds
            </p>
            <p class="working-with-us-paragraph 2">
              ELECTRONIC BASS MUSIC GENRES INC GRIME, DRILL AND DUB FUSED WITH
              ORCHESTRAL SCORING, PERCUSSION AND ACCESS TO A BROAD NETWORK OF
              COLLABORATERS INCLUDING SESSION MUSICIANS AND COMPOSERS FROM UK
              JAZZ MIDDLE EASTERN AND WEST AFRICAN MUSIC GENRES.
            </p>
            <p class="working-with-us-paragraph 3">
              WE HAVE A VARIETY OF MUSIC AVAILABLE THAT CAN BE LICENCED However
              WE ARE always interested to discuss composing music specifically
              for your production requirements; you can contact US VIA THIS
              WEBSITE ON THE CONTACT PAGE BELOW
            </p>
          </div>
          <button>CONTACT</button>
        </section>
        <section class="get-in-touch-container">
          <div class="get-in-touch-title-continer">
            <div class="get-in-touch-title">GET IN TOUCH WITH US</div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default IndexPage;
