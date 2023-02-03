import React, { useState } from "react";

// import assets
import camera from "../../assets/camera.png";
import success from "../../assets/success.png";
import error from "../../assets/radioError.png";

function UploadPhoto({ files, setFiles, setValue, uploadFileError }) {
  const [dragActive, setDragActive] = useState(false);
  const [img, setImg] = useState("");

  const handleDrop = (e) => {
    e.preventDefault();
    setFiles(e.dataTransfer.files);
    setDragActive(false);
    setValue("fileUpload", e.dataTransfer.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    if (
      e.target.className == "desktop-upload-photo-container" ||
      "upload-photo-title" ||
      "mobile-upload-photo-container"
    ) {
      setDragActive(true);
    }
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    if (
      e.target.className != "desktop-upload-photo-container" ||
      "mobile-upload-photo-container"
    ) {
      setDragActive(false);
    }
  };

  // uploadFileFunctions

  const handleChange = (e) => {
    setFiles(e.target.files);
  };

  return (
    <>
      <input
        type="file"
        name="fileUpload"
        id="fileUpload"
        className="upload-photo"
        onChange={(e) => handleChange(e)}
      ></input>{" "}
      {files ? (
        <section className="mobile-section">
          <div className="uploadedPhoto-container">
            {Array.from(files).map((file, id) => {
              return (
                <img
                  className="added-photo"
                  src={file ? URL.createObjectURL(file) : null}
                  key={id}
                  id="img"
                ></img>
              );
            })}
            <div className="re-upload-container">
              <div className="uploadedPhoto-info">
                <img src={success} />
                {Array.from(files).map((file, id) => {
                  const fileLength = file.name.length;
                  const startIndex = fileLength - 3;
                  const fileFormat = file.name.substring(
                    startIndex,
                    fileLength
                  );
                  // bytes to mb
                  let size = file.size;
                  let bytes = size * 1;
                  let mb = bytes / Math.pow(10, 6);
                  let mb_rounded = mb.toFixed(2);
                  return (
                    <div className="fileInfo-wrapper" key={id}>
                      <p className="fileName-title">
                        {file.name.length <= 15
                          ? file.name
                          : file.name.substring(0, 15) + "." + fileFormat}
                        ,
                      </p>
                      <span className="fileSize-title">{mb_rounded} MB</span>
                    </div>
                  );
                })}
              </div>
              <label htmlFor="fileUpload" className="reUpload-btn">
                თავიდან ატვირთე
              </label>
            </div>
          </div>
        </section>
      ) : (
        <div
          className={
            uploadFileError
              ? "mobile-upload-photo-container upload-error"
              : "mobile-upload-photo-container"
          }
          id={dragActive ? "photo-active" : undefined}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragEnter={(e) => handleDragEnter(e)}
          onDragLeave={(e) => handleDragLeave(e)}
        >
          <img src={camera} className="camera-img" />
          <label htmlFor="fileUpload" className="upload-photo-title">
            ლეპტოპის ფოტოს ატვირთვა
          </label>
          {uploadFileError && <img src={error} className="uploadPhoto-error" />}
        </div>
      )}
      {/* desktop */}
      {files.length > 0 ? (
        <section className="desktop-section">
          <div className="uploadedPhoto-container">
            {Array.from(files).map((file, id) => {
              return (
                <img
                  className="added-photo"
                  src={file ? URL.createObjectURL(file) : null}
                  key={id}
                  id="img"
                ></img>
              );
            })}
            <div className="re-upload-container">
              <div className="uploadedPhoto-info">
                <img src={success} />
                {Array.from(files).map((file, id) => {
                  const fileLength = file.name.length;
                  const startIndex = fileLength - 3;
                  const fileFormat = file.name.substring(
                    startIndex,
                    fileLength
                  );
                  // bytes to mb
                  let size = file.size;
                  let bytes = size * 1;
                  let mb = bytes / Math.pow(10, 6);
                  let mb_rounded = mb.toFixed(2);
                  return (
                    <div className="fileInfo-wrapper" key={id}>
                      <p className="fileName-title">
                        {file.name.length <= 15
                          ? file.name
                          : file.name.substring(0, 15) + "." + fileFormat}
                        ,
                      </p>
                      <h4 className="fileSize-title">{mb_rounded} mb</h4>
                    </div>
                  );
                })}
              </div>
              <label htmlFor="fileUpload" className="reUpload-btn">
                თავიდან ატვირთე
              </label>
            </div>
          </div>
        </section>
      ) : (
        <div
          className={
            uploadFileError
              ? "desktop-upload-photo-container upload-error"
              : "desktop-upload-photo-container"
          }
          id={dragActive ? "photo-active" : undefined}
          onDrop={(e) => handleDrop(e)}
          onDragOver={handleDragOver}
          onDragEnter={(e) => handleDragEnter(e)}
          onDragLeave={(e) => handleDragLeave(e)}
        >
          {uploadFileError && <img src={error} className="err-img" />}
          <p className="upload-photo-title">ჩააგდე ან ატვირთე ლეპტოპის ფოტო</p>
          <input
            type="file"
            id="fileUpload"
            className="upload-photo"
            name="fileUpload"
          ></input>
          <label htmlFor="fileUpload" className="upload-btn">
            ატვირთე
          </label>
        </div>
      )}
    </>
  );
}

export default UploadPhoto;
