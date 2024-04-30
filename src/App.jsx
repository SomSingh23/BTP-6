import saveAs from "file-saver";
import "./App.css";

const App = () => {
  const downloadApplication = () => {
    // Replace 'your_application.zip' with the actual filename of your zip
    fetch("/btp-6-application.zip")
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, "btp-6-application.zip"); // Set desired download filename here
      });
  };

  return (
    <>
      <div className="heading">
        <h1>SurakshaScan</h1>
        <p>A real time malware detection application</p>
      </div>
      <h2 className="projectsupervisior">
        <i>
          Project under supervision of Dr. Bhupendra Singh and Dr. Sonam Maurya.
        </i>
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
    </>
  );
};

export default App;
