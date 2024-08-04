const Technologies = () => {
  return (
    <div
      id="technologies"
      className="mt-2 bg-white border border-gray-200 rounded-lg shadow p-2 sm:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <h2 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
        Technologies I use often:
      </h2>
      <ul className="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400 p-4">
        <li>
          <b>Languages</b>
          <ul className="flex flex-wrap ps-5 mt-1 space-y-1 list-inside">
            <li></li>
            <li className="mr-2"> JavaScript, </li>
            <li className="mr-2"> Typescript, </li>
            <li className="mr-2"> Go, </li>
            <li className="mr-2"> Python and </li>
            <li className="mr-2"> Java</li>
          </ul>
        </li>
        <li>
          <b>Frameworks and Technologies</b>
          <ul className="flex flex-wrap ps-5 mt-1 space-y-1 list-inside">
            <li></li>
            <li className="mr-2"> NodeJS, </li>
            <li className="mr-2"> ExpressJS, </li>
            <li className="mr-2"> NestJs, </li>
            <li className="mr-2"> ReactJs, </li>
            <li className="mr-2"> NextJs and </li>
            <li className="mr-2"> Jest</li>
          </ul>
        </li>
        <li>
          <b>Databases</b>
          <ul className="flex flex-wrap ps-5 mt-1 space-y-1 list-inside">
            <li></li>
            <li className="mr-2"> MongoDB, </li>
            <li className="mr-2"> Postgres SQL, </li>
            <li className="mr-2"> Redis and </li>
            <li className="mr-2"> Aerospike</li>
          </ul>
        </li>
        <li>
          <b>Tools</b>
          <ul className="flex flex-wrap ps-5 mt-1 space-y-1 list-inside">
            <li></li>
            <li className="mr-2"> GIT, </li>
            <li className="mr-2"> JIRA, </li>
            <li className="mr-2"> Docker, </li>
            <li className="mr-2"> Kafka,</li>
            <li className="mr-2"> Github Action,</li>
            <li className="mr-2"> Azure,</li>
            <li className="mr-2"> GCP and</li>
            <li className="mr-2"> AWS</li>
          </ul>
        </li>
        <li>
          <b>Others</b>
          <ul className="flex flex-wrap ps-5 mt-1 space-y-1 list-inside">
            <li></li>
            <li className="mr-2"> HTML,</li>
            <li className="mr-2"> CSS,</li>
            <li className="mr-2"> Tailwind,</li>
            <li className="mr-2"> Microservices, </li>
            <li className="mr-2"> REST API, </li>
            <li className="mr-2"> GraphQL, </li>
            <li className="mr-2"> CI/CD, </li>
            <li className="mr-2"> Agile and</li>
            <li className="mr-2"> Linux</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Technologies;
