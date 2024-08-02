import { useEffect } from "react";

const ComingSoon = () => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     window.location.href = "https://bit.ly/develop-with-lalit";
  //   }, 4000);
  // });

  return (
    <>
      <div className="wrapper">
        <h1>
          Coming Soon<span className="dot">.</span>
        </h1>
        <p>
          Website's work is in Progress, Redirectig to resume for time being...
        </p>
      </div>
    </>
  );
};

export default ComingSoon;
