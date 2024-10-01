import React from "react";
import "./aboutPage.css";
import { Navbar } from "../components/navbar";
import touring from "../images/touring-collage.png";
import ic6 from "../images/ic6.png";
import backgroundCollage from "../images/background-collage.png";
import artsCouncil from "../images/artCouncil.png";
import mobo from "../images/mobo.png";
import bafta from "../images/bafta.png";

const AboutPage = () => {
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
              AS A PERCUSSIONIST, SKANDA SABBAGH HAS TOURED NATIONALLY &
              INTERNATIONALLY (SXSW, WOMAD, CULLY JAZZ...) PRIMARILY WITH THE
              15-PIECE WEST AFRICAN JAZZ SUPERGROUP BALIMAYA PROJECT.
            </div>
            <div class="touring-paragraph-2">
              ORIGINALY RECORDING ON ATARIS AND DIY BUILT PCS IN THE EARLY
              2000S, SKANDA HAS BEEN PRODUCING MUSIC FOR OVER 20 YEARS.
            </div>
            <div class="touring-paragraph-3">
              IN 2020, SKANDA LAUNCHED A TYPE BEAT LICENSING YOUTUBE AND ONLINE
              BEAT STORE (IC6), SPECIALIZING IN HIGH ENERGY UK DRILL MUSIC AND
              HAS ACCUMULATED HUNDREDS OF THOUSANDS OF VIEWS.
            </div>
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
        </section>
        <section className="background-container">
          <div className="paragraph-column">
            <h2 className="background-subtitle">BACKGROUND</h2>
            <div className="background-paragraph-1">
              STUDYING MUSIC PERFORMANCE AND COMPOSITION SKANDA GRADUATED FROM
              KINGSTON UNIVERSITY LONDON AND WAS AWARDED A TRAVEL SCHOLARSHIP TO
              EXTEND HIS STUDIES IN WEST AFRICAN PERCUSSION. +DAKAR/SENEGAL +
              ABIDJAN/IVORY COAST + GHANA/ACCRA + MOROCCO/MARRAKESH
            </div>
            <div className="background-paragraph-2">
              SKANDA ALSO WORKS PART TIME AT ARTS COUNCIL ENGLAND SPECIALISING
              IN THE DEVELOPMENT, SUPPORT AND INCUBATION OF BLACK MUSIC
              ORGANISATIONS AND ARTISTS. HIS WORK ALSO ADDRESSES THE AT RISK
              GRASSROOTS ECOLOGY OF UK MUSIC SUPPORTING MUSIC VENUES, FESTIVALS
              AND RECORDING STUDIOS ON THE EDGE OF CLOSURE
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
            <a href="/contact" class="home-contact-button">
              CONTACT
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
export default AboutPage;
