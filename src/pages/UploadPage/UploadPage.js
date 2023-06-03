import "./UploadPage.scss";
import UploadPreview from "../../assets/images/Upload-video-preview.jpg";
import PublishIcon from "../../assets/icons/publish.svg";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UploadPage() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVideo = {
      title: e.target.title.value,
      description: e.target.description.value,
    };

    axios
      .post(process.env.REACT_APP_BASE_URL + "/videos", newVideo)
      .then(() => {
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <div className="upload__container">
        <div className="upload__thumbnail">
          <h2 className="upload__thumbnail-title">VIDEO THUMBNAIL</h2>
          <div className="upload__video">
            <img
              className="upload__preview"
              src={UploadPreview}
              alt="Upload preview"
            />
          </div>
        </div>
        <form className="upload__form" onSubmit={handleSubmit}>
          <label className="upload__form-title" htmlFor="title">
            TITLE YOUR VIDEO
          </label>
          <input
            type="text"
            className="upload__name"
            name="title"
            id="title"
            placeholder="Add a title to your video"
          />
          <label className="upload__form-title" htmlFor="text">
            ADD A VIDEO DESCRIPTION
          </label>
          <textarea
            className="upload__description"
            name="description"
            id="description"
            placeholder="Add a description to your video"
          ></textarea>
          <div className="upload__btns">
            <img
              className="upload__icon"
              src={PublishIcon}
              alt="Publish icon"
            />
            <button className="upload__publish" type="submit">
              PUBLISH
            </button>
            <button className="upload__cancel">CANCEL</button>
            <button className="upload__publish--bigscreen" type="submit">
              PUBLISH
            </button>
          </div>
        </form>
      </div>
      {/* <div className="upload__btns">
        <img className="upload__icon" src={PublishIcon} alt="Publish icon" />
        <button className="upload__publish" type="submit">
          PUBLISH
        </button>
        <button className="upload__cancel">CANCEL</button>
        <button className="upload__publish--bigscreen" type="submit">
          PUBLISH
        </button>
      </div> */}
    </section>
  );
}

export default UploadPage;
