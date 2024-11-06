import saveAs from "file-saver";
import "./App.css";

const App = () => {
  const downloadApplication = () => {
    // Replace 'your_application.zip' with the actual filename of your zip
    fetch("/btp-7-application.zip")
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, "btp-7-application.zip"); // Set desired download filename here
      });
  };

  return (
    <>
      <div className="heading">
        <h1>🛡️ SurakshaScan 🛡️</h1>
        <p>
          {" "}
          Inspired by pe-sieve and hollows hunter with a few minor
          modifications.
        </p>
      </div>
      <h2 className="projectsupervisior">
        <i>Project under supervision of Dr. Bhupendra Singh.</i>
      </h2>
      <div className="download">
        <p>Download our application</p>
        <button className="downloadbutton" onClick={downloadApplication}>
          Download
        </button>
      </div>
      <div className="teamdetails">
        <h2 className="teamheading">Team Details</h2>
        <ol className="listofteammember">
          <li>Shashank Garg </li>
          <li>Som Singh Lodhi</li>
          <li>Sourish Mittal</li>
          <li>Steve Raphael Pulikottil</li>
          <li>Vatsal Tiwari</li>
        </ol>
      </div>
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} BTP Project SurakshaScan. All rights
          reserved.
        </p>
      </footer>
    </>
  );
};

export default App;
