import "./UploadPage.scss";
import { Link } from "react-router-dom";
import UploadPreview from "../../assets/images/Upload-video-preview.jpg";
import PublishIcon from "../../assets/icons/publish.svg";

function UploadPage() {
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
        <form className="upload__form">
          <label className="upload__form-title" htmlFor="title">
            TITLE YOUR VIDEO
          </label>
          <input
            type="text"
            className="upload__name"
            id="name"
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
        </form>
      </div>
        <div className="upload__btns">
          <img className="upload__icon" src={PublishIcon} alt="Publish icon" />
          <Link className="upload__publish" to="/">
            PUBLISH
          </Link>
          <Link className="upload__cancel" to="/">
            CANCEL
          </Link>
          <Link className="upload__publish--bigscreen" to="/">
            PUBLISH
          </Link>
        </div>
      
    </section>
  );
}

export default UploadPage;
