import Contact from "../components/DigitalResume/Contact";
import Education from "../components/DigitalResume/Education";
import Introduction from "../components/DigitalResume/Introduction";
import WorkExperience from "../components/DigitalResume/WorkExperience";
import Technologies from "../components/DigitalResume/Technologies";
import MyNav from "../components/DigitalResume/MyNav";

const DigitalResume = () => {
  return (
    <>
      <div className="md:flex w-11/12 sm:w-4/5 mx-auto pt-12">
        <div className="fixed">
          <MyNav />
        </div>
        <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
          <Introduction />
          <Technologies />
          <WorkExperience />
          <Education />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default DigitalResume;
