import React from "react";
import { useState } from "react";
import assets from "../assets/assets.gif";
import axios from "axios";

export default function UploadImage({ url, setUrl }) {
  const [loading, setLoading] = useState(false);

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  function uploadSingleImage(base64) {
    setLoading(true);
    axios//https://petadoptionteam.azurewebsites.net/
      .post("http://localhost:5000/pets/uploadImage", { image: base64 })
      .then((res) => {
        setUrl(res.data);
        //console.log('hellooo' + res.data)
        //alert("Image uploaded Succesfully");
      })
      .then(() => setLoading(false))
      .catch(console.log);
  }

  const uploadImage = async (event) => {
    const files = event.target.files;

    if (files.length === 1) {
      const base64 = await convertBase64(files[0]);
      uploadSingleImage(base64);
      return;
    }

    const base64s = [];
    for (var i = 0; i < files.length; i++) {
      var base = await convertBase64(files[i]);
      base64s.push(base);
    }
    uploadMultipleImages(base64s);
  };

  function UploadInput() {
    return (
      <div className="flex items-center justify-center w-full">
        <label htmlFor="petPhoto">
          <span> Pet Photo!!</span>
          <input
            onChange={uploadImage}
            type="file"
            label="Pet Photo"
            name="petPhoto"
            id="file"
          />
        </label>
      </div>
    );
  }

  return (
    <div className="flex justify-center flex-col m-8 ">
      <div>
        {url && (
          <div>
            <img
              src={url}
              target="_blank"
              rel="noopener noreferrer"
              width={300}
            />
          </div>
        )}
      </div>
      <div>
        {loading ? (
          <div className="flex items-center justify-center">
            <img src={assets} />{" "}
          </div>
        ) : (
          <UploadInput />
        )}
      </div>
    </div>
  );
}
