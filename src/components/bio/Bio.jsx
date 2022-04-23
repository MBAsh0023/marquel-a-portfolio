import "./bio.scss";

export default function Bio() {
  return (
    <div className="bio" id="bio">
      <h1>About Me</h1>
      <div className="container">
        <p className="item">
          {" "}
          The moment I produced my first "Hello World" on the console sparked my
          interest and I have not looked back. Software Development has become
          an arena of challenge and creativity for me. Becoming a developer has
          introduced me to a passion that will continue to teach me for a
          lifetime. My skills to this point allow me to be proficent in HTML,
          CSS, JavaScript, and React. Ten years of airline operation mananagment
          has equipped me with analytical skills, communication skills and
          discipline to be an asset to any team.{" "}
        </p>
      </div>
      <div className="profiles">
        <div className="iconItem">
          <a href="assets/Marquel-Ashlock-Resume.pdf" download>
            <img src="assets/icons8-download-resume-100.png" alt="Resume" />
          </a>
          <h5>Resume Download</h5>
        </div>
        <div className="iconItem">
          <a href="https://github.com/MBAsh0023">
            <img src="assets/github-100.png" alt="GitHub" />
          </a>
          <h5>GitHub Profile</h5>
        </div>
        <div className="iconItem">
          <a href="https://www.linkedin.com/in/mbashlock/">
            <img src="assets/linkedin-100.png" alt="LinkedIn" />
          </a>
          <h5>LinkedIn Profile</h5>
        </div>
      </div>
    </div>
  );
}
