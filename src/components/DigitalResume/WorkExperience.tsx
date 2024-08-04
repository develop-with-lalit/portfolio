export default function WorkExperience() {
  return (
    <div
      id="experience"
      className="mt-2 bg-white border border-gray-200 rounded-lg shadow p-2 sm:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <h2 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
        My Work Experiences
      </h2>
      <ol className="relative border-s border-gray-200 dark:border-gray-700 p-4">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            July 2023 - July 2024
          </time>
          <h3 className="text-md font-semibold text-gray-900 dark:text-white">
            Senior Software Engineer @ C2FO
          </h3>
          <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li>
              Technologies Used: Typescript, Go, NodeJs, NestJs, ReactJs,
              PostgresSQL, Kafka, Docker.
            </li>
            <li>
              Lead the designing(HLD, LLD) and implementation of an event
              tracking system aimed at measuring the cost to serve, using
              technologies like Typescript, Kafka, PostgresSQL which will be
              playing a pivotal role in data-driven decision-making processes
              for current and future features in the system which is expected to
              bring up to <b> 20% reduction in cost to serve.</b>
            </li>
            <li>
              Contributed towards migration from a monolithic stack to a modern
              microservice's architecture for the Dynamic Supplier Finance
              program by utilizing Technologies such as Go and PostgresSQL.
            </li>
            <li>
              <b>
                Improved data freshness and reduced latency for internal
                dashboards by 2 hours.
              </b>{" "}
              Analyzed and addressed performance bottlenecks in the data syncing
              process using NodeJs, Kafka, and Postgre SQL. This resulted in
              real-time data updates within the database.
            </li>
          </ul>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            February 2022 - July 2023
          </time>
          <h3 className="text-md font-semibold text-gray-900 dark:text-white">
            Manager Technology @ Airtel Payments Bank [ SDE II ]
          </h3>
          <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li>
              Technologies Used: Javascript, ReactJs, NodeJs, PostgresSQL,
              Redshift, Kafka, Java, Spring Boot.
            </li>
            <li>
              <b>Improved the transaction success rate by 5% </b> by integrating
              beneficiary bank down alerts for end users which facilitates them
              to better time their transactions using Typescript and ReactJs.
            </li>
            <li>
              Automated the contract signing journey for new artists onboarding
              on the platform by integrating third party API using NodeJs,
              Typescript and PostgresSQL, which resulted in the{" "}
              <b> reduction of contract signing time by 75%.</b>
            </li>
            <li>
              Designed and developed the entire journey for new Label's
              Onboarding on Wynk Studio using NodeJs, Typescript and AWS, which
              is expected to bring{" "}
              <b>100+ new labels on the platform within 1 year.</b>
            </li>
            <li>
              Lead the creation of a framework called “Cronos” to manage the
              code of various lambda functions into a single repository
              resulting in ease of management of code.{" "}
            </li>
          </ul>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            November 2020 - February 2022
          </time>
          <h3 className="text-md font-semibold text-gray-900 dark:text-white">
            Senior Software Engineer @ IndusOS
          </h3>
          <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li>
              Technologies Used: Javascript, NodeJs, MongoDB, Redis, Aerospike,
              Python.
            </li>
            <li>
              Architect and developed{" "}
              <b>
                microservices for A/B testing and serving Personalized content
              </b>
              , which provides facility to create dynamic variations of content,
              helpful in testing multiple user experiences and personalisation
              algorithms, which resulted in up to{" "}
              <b>50% increase in application downloads.</b>
            </li>
            <li>
              Implemented a feature of location wise blacklisting of apps using
              NodeJs and MongoDB in order to make the system compliant with the
              government mandates.
            </li>
            <li>
              Organized and led training programs for interns, enhancing their
              onboarding and professional development.
            </li>
          </ul>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            January 2018 - November 2020
          </time>
          <h3 className="text-md font-semibold text-gray-900 dark:text-white">
            Software Engineer @ Gemini Solutions
          </h3>
          <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li>
              Technologies Used: Javascript, Typescript, NodeJs, MongoDB,
              Angular, ReactJs, NextJs, Redis, GCP, AWS.
            </li>
            <li>
              Developed the client facing web app for an Insurance provider
              using NodeJs , Serverless framework at backend and NextJs, ReactJs
              at Frontend.
            </li>
            <li>
              Developed a web-based application using the MEAN stack for HDFC
              Ergo, supporting over{" "}
              <b>50,000 on-field agents in after-sales policy management.</b>
            </li>
            <li>
              Worked alongside the UX designers to develop the Front-End for a
              project called Behtar-India for CSR of Republic TV, using ReactJs
              which <b> helped to achieve over 1.1M user registrations.</b>
            </li>
            <li>
              Introduced caching layer in the backend of multiple projects to
              achieve over <b>90% reduction in APIs response time.</b>
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
}
