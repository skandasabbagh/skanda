import React, { useEffect, useRef, useState } from "react";
import "./projectsPage.css";
import { Navbar } from "../components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon component
import { faVolumeHigh, faVolumeMute } from "@fortawesome/free-solid-svg-icons"; // Import specific icons
import wishYouWereHere from "../videos/wish_you_were_here.mp4";
import blueprint from "../videos/blueprint.mp4";
import tekaz from "../videos/tekaz.mp4";

const AboutPage = () => {
  // Create state variables to manage mute status for each video
  const [videoMuteStatus, setVideoMuteStatus] = useState({
    tekaz: true,
    wishYouWereHere: true,
    blueprint: true,
  });

  // Handle the sound toggle for specific videos
  const handleSoundToggle = (videoId) => {
    const video = document.getElementById(videoId);
    if (video) {
      video.muted = !video.muted;
      setVideoMuteStatus((prevState) => ({
        ...prevState,
        [videoId]: video.muted,
      }));
    }
  };

  useEffect(() => {
    // Create an IntersectionObserver instance to trigger animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("video-slide-in-left")) {
              entry.target.classList.add("active-left");
            } else if (
              entry.target.classList.contains("video-slide-in-center")
            ) {
              entry.target.classList.add("active-center");
            } else if (
              entry.target.classList.contains("video-slide-in-right")
            ) {
              entry.target.classList.add("active-right");
            }
          }
        });
      },
      { threshold: 0.05 }
    );

    // Select and observe all video elements
    const videoElements = document.querySelectorAll("video");
    videoElements.forEach((video) => observer.observe(video));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="main-page-container">
        <section className="projects-hero">
          <Navbar />
          <div className="projects-hero-title-container">
            <h1 className="projects-hero-title">PROJECTS</h1>
          </div>
        </section>

        <div className="all-videos">
          <section className="videoSection" id="tekaz">
            <div className="video-wrapper">
              <video
                src={tekaz}
                id="tekaz"
                autoPlay
                loop
                muted={videoMuteStatus.tekaz}
                playsInline
                className="video-slide-in-left"
                style={{ width: "600px", height: "auto" }}
              ></video>
              <button
                className="sound-toggle-button"
                onClick={() => handleSoundToggle("tekaz")}
              >
                {videoMuteStatus.tekaz ? (
                  <FontAwesomeIcon
                    icon={faVolumeMute}
                    size="2x"
                    color="white"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faVolumeHigh}
                    size="2x"
                    color="white"
                  />
                )}
              </button>
            </div>
          </section>

          <section className="videoSection" id="wishYouWereHere">
            <div className="video-wrapper">
              <video
                src={wishYouWereHere}
                id="wishYouWereHere"
                autoPlay
                loop
                muted={videoMuteStatus.wishYouWereHere}
                playsInline
                className="video-slide-in-center"
                style={{ width: "600px", height: "auto" }}
              ></video>
              <button
                className="sound-toggle-button"
                onClick={() => handleSoundToggle("wishYouWereHere")}
              >
                {videoMuteStatus.wishYouWereHere ? (
                  <FontAwesomeIcon
                    icon={faVolumeMute}
                    size="2x"
                    color="white"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faVolumeHigh}
                    size="2x"
                    color="white"
                  />
                )}
              </button>
            </div>
          </section>

          <section className="videoSection" id="blueprint">
            <div className="video-wrapper">
              <video
                src={blueprint}
                id="blueprint"
                autoPlay
                loop
                muted={videoMuteStatus.blueprint}
                playsInline
                className="video-slide-in-right"
                style={{ width: "600px", height: "auto" }}
              ></video>
              <button
                className="sound-toggle-button"
                onClick={() => handleSoundToggle("blueprint")}
              >
                {videoMuteStatus.blueprint ? (
                  <FontAwesomeIcon
                    icon={faVolumeMute}
                    size="2x"
                    color="white"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faVolumeHigh}
                    size="2x"
                    color="white"
                  />
                )}
              </button>
            </div>
          </section>
        </div>

        <section className="projects-get-in-touch-container">
          <div className="projects-get-in-touch-title-continer">
            <div className="projects-get-in-touch-title">
              GET IN TOUCH WITH US
            </div>
            <a href="/contact" className="home-contact-button">
              CONTACT
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
