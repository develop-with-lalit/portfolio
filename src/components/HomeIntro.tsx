export default function HomeIntro() {
  const copyEmailId = (e: any) => {
    e.preventDefault();
    navigator.clipboard.writeText("develop.with.lalit@gmail.com");
  };

  return (
    <div className="flex flex-col justify-between m-2 w-full lg:w-5/12 text-center min-h-[45vh]">
      <h1 className="text-4xl lg:text-7xl">
        Hi 👋🏼! <br /> I am Lalit Kumar 👨🏻‍💻!
      </h1>
      <h2 className="text-xl lg:text-3xl p-2 border-gray-200 shadow-md">
        <span className="font-semibold text-4xl">Software Engineer,</span>{" "}
        currently based in{" "}
        <span className="font-semibold text-4xl">Canada 🇨🇦</span>
      </h2>
      <div className="p-4 text-md flex flex-col lg:flex-row justify-between border-t border-gray-200">
        <a href="tel:+14377994829">☎️ +1 (437) 799-4829</a>
        <a href="mailto:develop.with.lalit@gmail.com">
          📧: develop.with.lalit@gmail.com{" "}
          <button onClick={copyEmailId}>
            <img src="assets/copy.png" alt="copy icon" width="16px" />
          </button>
        </a>
      </div>
    </div>
  );
}
