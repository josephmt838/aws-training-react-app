import React from "react";

export default props => {
  return (
    <section className="image-uploader">
      <h2>S3 Bucket Upload</h2>
      <span style={{ display: "flex", alignItems: "center" }}>
        <h6>Select image to upload: </h6>
        <input type="file" className="s3-input" accept="image/jpeg, png, svg" />
      </span>
      <figcaption className="warning">
        File Formats Accepted: jpeg, png, svg
      </figcaption>
    </section>
  );
};
