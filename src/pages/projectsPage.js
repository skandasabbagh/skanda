import React, { useEffect, useState } from "react";
import "./projectsPage.css";
import { Navbar } from "../components/navbar";
import { projectsVideosUrls } from "../constants";

const tekaz = projectsVideosUrls[0];
const blueprint = projectsVideosUrls[1];
const wishYouWereHere = projectsVideosUrls[3];
const cf = projectsVideosUrls[2];

const ProjectsPage = () => {
  const [videoMuteStatus, setVideoMuteStatus] = useState({
    tekaz: false,
    wishYouWereHere: false,
    blueprint: false,
    heroVideo: false,
    cf: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active-center");
          }
        });
      },
      { threshold: 0.05 }
    );

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

        <div className="video-grid-container">
          <section className="video-grid">
            {/* Video 1 */}
            <div className="video-wrapper">
              <h3>Wish You Were Here</h3>
              <video
                src={wishYouWereHere}
                id="wishYouWereHere"
                controls
                muted={videoMuteStatus.wishYouWereHere} // Allow user to toggle sound via button
                playsInline
                preload="auto"
                className="video-slide-in-center"
              ></video>
              <p>
                Bafta Nominated Short Film depicting a lonely elderly pensioner
                that turns to trolling social media for social interaction. Dark
                humour with noteworthy intense anduneasy soundtracking to
                reflect social isolation and OAP adrenaline.
              </p>
            </div>

            {/* Video 2 */}
            <div className="video-wrapper">
              <h3>BFA Gamer</h3>
              <video
                src={blueprint}
                id="blueprint"
                controls
                muted={videoMuteStatus.blueprint}
                playsInline
                preload="auto"
                className="video-slide-in-center"
              ></video>
              <p>
                High energy African drums and polyrhythms platforming the
                resilience and dynamic approach of BFA recruitment charity to
                support young Global Majority people to navigate the current
                climate and find fruitful pathways to employment.
              </p>
            </div>

            {/* Video 3 */}
            <div className="video-wrapper">
              <h3>Community Focus</h3>
              <video
                src={cf}
                id="cf"
                controls
                muted={videoMuteStatus.cf}
                playsInline
                preload="auto"
                className="video-slide-in-center"
              ></video>
              <p>
                Upbeat and celebratory sounds, live drums and sampled solo
                trumpets showcasing the positive advocacy and charitable work of
                ‘Community Focus’ to create access to life changing and
                inclusivity for people with disabilities.
              </p>
            </div>

            {/* Video 4 */}
            <div className="video-wrapper">
              <h3>Tekaz </h3>
              <video
                src={tekaz}
                id="tekaz"
                controls
                muted={videoMuteStatus.tekaz}
                playsInline
                preload="auto"
                className="video-slide-in-center"
              ></video>
              <p>
                Independent release of high energy, hard hitting UK Drill and
                Dub instrumental music; featuring West African Kora. Expect
                walls of sound, gliding uncontrollable bass, found sounds and
                percussion.
              </p>
            </div>
          </section>
        </div>

        <section className="projects-get-in-touch-container">
          <div className="projects-get-in-touch-title-continer">
            <div className="projects-get-in-touch-title">
              GET IN TOUCH WITH US
            </div>
            <p className="email-address">info@skandasabbagh.co.uk</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectsPage;
