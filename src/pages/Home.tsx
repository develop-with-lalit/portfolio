import Contact from "../components/Contact";
import Education from "../components/Education";
// import Experience from "../components/Experience";
import Introduction from "../components/Introduction";
import MyTimeline from "../components/MyTimeline";
import Technologies from "../components/Technologies";

const Home = () => {
  return (
    <>
      <Introduction />
      <Technologies />
      <MyTimeline />
      {/* <Experience /> */}
      <Education />
      <Contact />
    </>
  );
};

export default Home;
