import React, { useState } from "react";
import 'semantic-ui-css/semantic.min.css'


const App = () => {
  const [file, setFile] = useState([]);

  function uploadSingleFile(e) {
    setFile([...file, URL.createObjectURL(e.target.files[0])]);
    console.log("file", file);
    console.log(e.target.files)
  }

  function upload(e) {
    e.preventDefault();
    console.log(file);
  }

  function deleteFile(e) {
    const s = file.filter((item, index) => index !== e);
    setFile(s);
    console.log(s);
  }

  return (
    
    <form class="ui center aligned container">
      <h2 class="ui header"><img src="https://cdn.theatlantic.com/thumbor/mORGMuM_Oh1Rc3YJzLc3bwoApIY=/1071x0:3826x2755/1080x1080/media/img/mt/2021/07/GettyImages_473437806_copy/original.jpg" alt="" class1="ui circular image"/> Upload your image!</h2>
      <div class="ui hidden divider">
        {file.length > 0 &&
          file.map((item, index) => {
            return (
              <div key={item}>
                <img class="ui card" class1="ui medium rounded image" src={item} alt="" />
                <button class="heart icon" type="button" onClick={() => deleteFile(index)}>
                  delete
                </button>
              </div>
            );
          })}
      </div>

      <div class="ui hidden divider">
        <input 
          type="file"
          disabled={file.length === 5}
          className="form-control"
          onChange={uploadSingleFile}
        />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <button 
        class="ui primary button"
        type="button"
        className="btn btn-primary btn-block"
        onClick={upload}
      >
        Upload
      </button>
    </form>
  );
};

export default App;
