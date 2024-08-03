const Education = () => {
  return (
    <div
      id="education"
      className="mt-2 bg-white border border-gray-200 rounded-lg shadow p-2 sm:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <h2 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
        Educational Background
      </h2>
      <ol className="relative border-s border-gray-200 dark:border-gray-700 p-4">
        {/* <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            June 2021 - July 2023
          </time>
          <h3 className="text-md font-semibold text-gray-900 dark:text-white">
            Master of Science ( Computer Science ) From Kurukshetra University
          </h3>
        </li> */}
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            June 2014 - July 2018
          </time>
          <h3 className="text-md font-semibold text-gray-900 dark:text-white">
            Bachchelor of Technology ( Information Technology ) From YMCA
            University
          </h3>
        </li>
      </ol>
    </div>
  );
};

export default Education;
