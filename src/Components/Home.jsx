import NProgress from "nprogress";
import { useEffect } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../nprogress.css";
import AboutSection from "./AboutSection";
import Feedback from "./Feedback";
import Stats from "./Stats";
import WhyLearn from "./WhyLearn";
const slideImages = [
  "https://plus.unsplash.com/premium_photo-1722944969837-25bf2385056a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=2092&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1675384201056-a716dcc88843?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1688267224118-5adc98ac3c72?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const slideContainerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "500px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export default function Home() {
  useEffect(() => {
    // Start progress bar when component mounts
    NProgress.start();

    // Simulate loading
    const timer = setTimeout(() => {
      NProgress.done();
    }, 800); // Adjust time as needed

    // Clean up on unmount
    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, []);

  return (
    <>
      <div className="mt-20 mx-auto max-w-6xl px-4">
        <div className="slide-container w-full rounded-lg overflow-hidden shadow-xl">
          <Fade
            autoplay={true}
            duration={3000}
            transitionDuration={1100}
            infinite={true}
            indicators={false}
            arrows={false}
            pauseOnHover={false}
          >
            {slideImages.map((slideImage, index) => (
              <div key={index} className="each-slide">
                <div
                  className=""
                  style={{
                    ...slideContainerStyle,
                    backgroundImage: `url(${slideImage})`,
                  }}
                >
                  <h1 className="text-4xl bg-black/10 p-3 rounded-lg  text-white font-bold">
                    Learn <span className="text-[#ff6388]">Japanese</span>{" "}
                    Language
                  </h1>
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </div>

      <div className="my-12 w-11/12 mx-auto space-y-14">
        <AboutSection></AboutSection>
        <Stats></Stats>
      </div>

      <WhyLearn></WhyLearn>
      <Feedback></Feedback>
    </>
  );
}
