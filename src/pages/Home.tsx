import HomeIntro from "../components/HomeIntro";

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-around lg:flex-row w-11/12 lg:w-4/5 mx-auto pt-12 h-[67vh]">
        <HomeIntro />
        <div className="flex flex-col justify-between m-2 w-full lg:w-5/12 text-center min-h-[45vh] hidden lg:block">
          <img
            src="assets/lalit.png"
            alt="lalit-doodle"
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
