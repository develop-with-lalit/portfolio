import Contact from "../components/DigitalResume/Contact";
import Education from "../components/DigitalResume/Education";
import Introduction from "../components/DigitalResume/Introduction";
import WorkExperience from "../components/DigitalResume/WorkExperience";
import Technologies from "../components/DigitalResume/Technologies";
import MyNav from "../components/DigitalResume/MyNav";

const DigitalResume = () => {
  return (
    <>
      <div className="sm:flex sm:flex-row justify-between w-11/12 sm:w-4/5 mx-auto pt-12">
        <div className="flex-item w-full sm:w-1/5 ">
          <div className="sticky">
            <MyNav />
          </div>
        </div>
        <div className="flex-item p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full sm:w-4/5 ">
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
