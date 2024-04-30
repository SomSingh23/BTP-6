import saveAs from "file-saver";

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
      <h1>SurakshaScan</h1>
      <div>
        <p>Download our application</p>
        <button onClick={downloadApplication}>Download Application</button>
      </div>
    </>
  );
};

export default App;
