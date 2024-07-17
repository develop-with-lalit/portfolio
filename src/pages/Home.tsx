import Contact from "../components/Contact";
import Education from "../components/Education";
import Introduction from "../components/Introduction";
import WorkExperience from "../components/WorkExperience";
import Technologies from "../components/Technologies";

const Home = () => {
  return (
    <>
      <div className="mt-14 w-11/12 sm:w-4/5 mx-auto pt-12">
        <Introduction />
        <Technologies />
        <WorkExperience />
        <Education />
        <Contact />
      </div>
    </>
  );
};

export default Home;
