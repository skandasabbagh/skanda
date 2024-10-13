import React from "react";
import "./aboutPage.css";
import { Navbar } from "../components/navbar";
import touring from "../images/touring-collage.png";
import ic6 from "../images/ic6.png";
import backgroundCollage from "../images/background-collage.png";
import artsCouncil from "../images/artCouncil.png";
import mobo from "../images/mobo.jpeg";
import bafta from "../images/bafta.png";

const AboutPage = () => {
  const email = "your-email@example.com";

  return (
    <div>
      <div class="main-page-container">
        <section class="about-hero">
          <Navbar />
          <div class="about-hero-title-container">
            <h1 class="about-hero-title">ABOUT</h1>
          </div>
        </section>
        <section class="touring-container">
          <div class="image-column">
            <img src={touring} alt="touring" class="touring-image" />
          </div>
          <div class="paragraphs-column">
            <h2 class="touring-subtitle">TOURING & RECORDING</h2>
            <div class="touring-paragraph-1">
              As a North Londoner of North African descent, Skanda has toured
              nationally and internationally (SXSW Austin, Womad, Cully Jazz)
              and sold out Ronnie Scotts and mainstage Barbican with the
              15-piece West African jazz supergroup, Balimaya Project.
            </div>
            <div class="touring-paragraph-2">
              Pivoting in the pandemic in 2020, Skanda launched a new type beat
              licensing youtube and online beat store (IC6_Beats) specializing
              in high-energy Uk drill music and has accumulated hundreds of
              thousands of views.
            </div>
            {/* <div class="touring-paragraph-3">
              IN 2020, SKANDA LAUNCHED A TYPE BEAT LICENSING YOUTUBE AND ONLINE
              BEAT STORE (IC6), SPECIALIZING IN HIGH ENERGY UK DRILL MUSIC AND
              HAS ACCUMULATED HUNDREDS OF THOUSANDS OF VIEWS.
            </div> */}
            <div class="touring-paragraph-4">
              <img
                src={ic6}
                alt="ic6"
                class="ic6-image"
                style={{ width: "200px", marginTop: "20px" }}
              />
            </div>
          </div>
        </section>
        <section class="about-logos-container">
          <div className="logos-wrapper">
            <ul>
              <li>
                <img
                  src={artsCouncil}
                  alt="collage"
                  class="logos-image"
                  style={{ width: "200px", height: "auto" }}
                />
              </li>
              <li>
                <img
                  src={mobo}
                  alt="mobo"
                  class="logos-image"
                  style={{ width: "200px", height: "auto" }}
                />
              </li>
              <li>
                <img
                  src={bafta}
                  alt="bafta"
                  class="logos-image"
                  style={{ width: "200px", height: "auto" }}
                />
              </li>
            </ul>
          </div>
        </section>
        <section className="background-container">
          <div className="paragraph-column">
            <h2 className="background-subtitle">BACKGROUND</h2>
            <div className="background-paragraph-1">
              Skanda studied music performance and composition, graduating from
              Kingston University and was awarded a travel scholarship to extend
              his studies in West African Percussion and arranging. Skanda has
              studied by ear with numerous masters including Moustapha Tettey
              Ade (Ghana Accra), Kisama Djabate (Dakar, Senegal), Sidiki Dembele
              (Abidjan, Ivory Coast), Khalifa Conte (Dakar, Senegal), Gnawa Dar
              Marrakesh/Ali Iazane (Marrakesh, Morocco)
            </div>
            <div className="background-paragraph-2">
              t's not always about the money—Skanda also supports Arts Council
              England, specialising in the development and capacity building of
              Black and Brown-led music organisations and artists. His work also
              addresses the at-risk grassroots ecology of UK music, supporting
              music venues, festivals, and recording studios facing potential
              closure.
            </div>
          </div>
          <div className="image-column">
            <img
              src={backgroundCollage}
              alt="backgroundCollage"
              className="backgroundCollage"
            />
          </div>
        </section>
        <section class="about-get-in-touch-container">
          <div class="about-get-in-touch-title-continer">
            <div class="about-get-in-touch-title">GET IN TOUCH WITH US</div>
            <p className="email-address">info@skandasabbagh.co.uk</p>
          </div>
        </section>
      </div>
    </div>
  );
};
export default AboutPage;
