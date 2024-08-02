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
              Technologies Used: NodeJs, Javascript, Go, React, Postgres, Kafka,
              Docker.
            </li>
            <li>
              Lead the designing and implementation of an event tracking system
              aimed at measuring the cost to serve, which will be playing a
              pivotal role in data-driven decision-making processes for current
              and future features in the system.
            </li>
            <li>
              Transitioned my tech stack by learning Go(Programming Language)
              and contributed towards migration from a monolithic stack to a
              modern microservice's architecture for the Dynamic Supplier
              Finance program.
            </li>
            <li>
              Identified and addressed performance bottlenecks in existing APIs
              by introduction of Kafka Streams resulting in improved API
              response time and faster page loads for internal tools.
            </li>
          </ul>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            February 2022 - July 2023
          </time>
          <h3 className="text-md font-semibold text-gray-900 dark:text-white">
            Manager Technology @ Airtel Payments Bank
          </h3>
          <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li>
              Technologies Used: React, NodeJs, Javascript, Postgres, Redshift,
              Kafka, Java.
            </li>
            <li>
              Improved the transaction success rate by 5% by integrating
              beneficiary bank down alerts for end users which facilitates them
              to better time their transactions.
            </li>
            <li>
              Lead the creation of a framework called “Cronos” to manage the
              code of various lambda functions into a single repository
              resulting in ease of management of code.
            </li>
            <li>
              Automated the contract signing journey for new artists onboarding
              on the platform resulting in the reduction of contract signing
              time from 30+ days to less than 1 week.
            </li>
            <li>
              Designed and developed the entire journey for new Label's
              Onboarding on Wynk Studio and their song submission journey which
              is expected to bring 100+ new labels on the platform within 1
              year.
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
              Technologies Used: NodeJs, MongoDB, Redis, Aerospike, Python, AWS.
            </li>
            <li>
              Architect and developed bridge microservices for AB testing and
              serving Personalized content, which provides facility to create
              dynamic variations of content, helpful in testing multiple user
              experiences and personalisation algorithms simultaneously.
            </li>
            <li>
              Implemented a feature of location wise blacklisting of apps in
              order to make the system compliant with the government mandates.
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
              Technologies Used: NodeJs, MongoDB, Angular, React, NextJs, Redis,
              GCP, AWS.
            </li>
            <li>
              Developed the client facing web app for TATA AIG using Serverless
              framework and also replaced the client’s previous web app without
              any downtime.
            </li>
            <li>
              Developed web-based application for HDFC Ergo, which serves more
              than 50K on field agents for their after sales policy management.
            </li>
            <li>
              Worked alongside the UX designers to develop the Front-End for a
              project called Behtar-India for CSR of Republic TV which helped to
              achieve over 1.1M user registrations.
            </li>
            <li>
              Introduced caching layer in the backend of multiple projects to
              achieve over 90% reduction in APIs response time.
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
}
