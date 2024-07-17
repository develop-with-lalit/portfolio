const NoPage = () => {
  return (
    <>
      <section className=" bg-white dark:bg-gray-900 rounded-lg mt-20 w-11/12 sm:w-4/5 mx-auto pt-12">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-gray-800 dark:text-white">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-gray-900 dark:text-white">
              Something's missing.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.{" "}
            </p>
            <a
              href="https://develop-with-lalit.github.io/portfolio"
              className="inline-flex  hover:bg-grey-800 ring-4 ring-neutral-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4 text-gray-800 dark:text-white"
            >
              Back to Homepage
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default NoPage;
