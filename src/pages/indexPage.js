import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon component
import { faVolumeHigh, faVolumeMute } from "@fortawesome/free-solid-svg-icons"; // Import specific icons
import "./index.css";
import { Navbar } from "../components/navbar";
import heroVideo from "../videos/hero-video.MP4";
import drill from "../videos/drill.mp4";
import blueprint from "../images/blueprint.png";
import granny from "../images/granny.png";
import collage from "../images/collage.png";
import artsCouncil from "../images/artCouncil.png";
import mobo from "../images/mobo.png";
import bafta from "../images/bafta.png";

const IndexPage = () => {
  const videoRef = useRef(null); // Reference to control the video
  const [isMuted, setIsMuted] = useState(true); // State to track mute status

  // Function to toggle mute/unmute
  const handleSoundToggle = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };
  const handleMouseEnter = (e) => {
    e.target.muted = false; // Unmute on hover
    e.target.play().catch((error) => {
      console.error("Playback failed: ", error);
    }); // Play the video
  };

  const handleMouseLeave = (e) => {
    e.target.muted = true; // Mute when not hovering
    e.target.pause(); // Pause the video
  };

  return (
    <div>
      <div className="main-page-container">
        <section className="index-hero">
          {/* Background video element */}
          <video
            ref={videoRef}
            className="background-video"
            src={heroVideo} // Use the imported video
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <Navbar />
          {/* Overlay content */}
          <div className="index-hero-title-container">
            <h3 className="index-hero-title-top m-t=5">
              Composition, production and sound design
            </h3>
            <h1 className="index-hero-title m-t=5">SKANDA SABBAGH</h1>
            <h3 className="index-hero-title-bottom m-t=5">
              for film and advertising
            </h3>
          </div>
          {/* Sound Toggle Button */}
          <button
            className="sound-toggle"
            onClick={handleSoundToggle}
            style={{
              backgroundColor: "transparent",
              border: "0px",
              padding: "0",
              margin: "0",
            }}
          >
            {isMuted ? (
              <span>
                <FontAwesomeIcon
                  icon={faVolumeHigh}
                  size="2x"
                  style={{
                    backgroundColor: "transparent",
                    padding: "0",
                    margin: "0",
                    color: "white",
                  }}
                />
              </span>
            ) : (
              <FontAwesomeIcon
                icon={faVolumeMute}
                size="2x"
                style={{
                  backgroundColor: "transparent",
                  padding: "0",
                  margin: "0",
                  color: "white",
                }}
              />
            )}
          </button>
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
          <div className="media-container">
            <div className="media-item">
              <img
                src={blueprint}
                alt="blueprint-still"
                style={{ width: "350px", height: "300px" }}
              />
            </div>
            <div className="media-item">
              <video
                src={drill} // Use the imported video
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: "350px",
                  height: "400px",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              ></video>
            </div>
            <div className="media-item">
              <img
                src={granny}
                alt="granny-still"
                style={{
                  width: "350px",
                  height: "300px",
                }}
              />
            </div>
            <div className="media-item">
              <video
                src={heroVideo} // Use the imported video
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "350px", height: "400px" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              ></video>
            </div>
          </div>
        </section>
        <section class="working-with-us-container">
          <div class="working-with-us-title-container">
            <div class="working-with-us-title">WORKING WITH US</div>
          </div>
          <div class="working-with-us-content">
            <div class="working-with-us-paragraphs-container">
              <p class="working-with-us-paragraph 1">
                Skanda is a composer, beat maker, percussionist, and arranger
                with an obsession for found noises, looping, sampling, layering
                and chasing down new sounds. Specialising for over 10 years in
                the licencing of UK Bass genres Drill, Grime, Dub, Garage but
                can venture into Trap, House, Techno if relevant to the project
                brief.
              </p>
              <p class="working-with-us-paragraph 2">
                From gritty orchestral scoring to film, to having the UKs best
                sessions musicians from UK Jazz, Middle Eastern and West African
                Diasporas only a phone call away, Skanda’s music thrives on the
                edge of 2024’s musical possibilities…..
              </p>
              <p class="working-with-us-paragraph 3">
                Skanda is always open to composing bespoke musical scores,
                tailored to the clients production needs, with fast turn arounds
                - Please feel free to reach out via the contact page below for
                any inquiries.
              </p>
            </div>
            <div class="working-with-us-picture-container">
              <img src={collage} alt="collage" class="working-with-us-image" />
            </div>
          </div>
          <section class="logos-container">
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
        </section>

        <section class="get-in-touch-container">
          <div class="get-in-touch-title-continer">
            <div class="get-in-touch-title">GET IN TOUCH WITH US</div>
            <p className="home-contact-button">skanda@skandasabbagh.com</p>
          </div>
        </section>
      </div>
    </div>
  );
};
export default IndexPage;
