const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
        You can reach me using below links
      </h5>
      {/* <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
          Stay up to date and move work forward with Flowbite on iOS & Android.
          Download the app today.
        </p> */}
      <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
        <a
          href="mailto:develop.with.lalit@gmail.com"
          className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        >
          <svg
            className="me-3 w-7 h-7"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="gmail"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 134 102"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M111.5 3.8L103 10.1L66.7 37.4L30.3 10.1L21.8 3.7C12.8 -3 0 3.4 0 14.7V26.8V92C0 97 4.1 101.1 9.1 101.1H30.3V49.5L66.7 76.8L103 49.5V101H124.2C129.2 101 133.3 96.9 133.3 91.9V26.8V14.7C133.3 3.4 120.5 -3 111.5 3.8Z"
              fill="white"
            />
          </svg>

          <div className="text-left rtl:text-right">
            <div className="mb-1 text-xs">Send me an</div>
            <div className="-mt-1 font-sans text-sm font-semibold">Email</div>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/developwithlalit/"
          className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 512 512"
            className="me-3 w-7 h-7"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google-play"
            role="img"
          >
            <path
              fill="#fff"
              d="M474.919 0H38.592C17.72 0 0 16.504 0 36.841V475.14C0 495.496 11.629 512 32.492 512h436.327C489.718 512 512 495.496 512 475.14V36.841C512 16.504 495.809 0 474.919 0zM195.043 195.043h68.928v35.136h.755c10.505-18.945 41.541-38.177 79.921-38.177 73.655 0 94.214 39.108 94.214 111.538v135.321h-73.148V316.883c0-32.427-12.947-60.883-43.227-60.883-36.768 0-54.295 24.889-54.295 65.758v117.103h-73.148V195.043zM73.139 438.861h73.148V195.043H73.139v243.818zm82.289-329.148c0 25.258-20.457 45.715-45.715 45.715-25.258 0-45.715-20.457-45.715-45.715 0-25.258 20.457-45.715 45.715-45.715 25.258 0 45.715 20.457 45.715 45.715z"
            />
          </svg>
          <div className="text-left rtl:text-right">
            <div className="mb-1 text-xs">Message me on </div>
            <div className="-mt-1 font-sans text-sm font-semibold">
              Linkedin
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
