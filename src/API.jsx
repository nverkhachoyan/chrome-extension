
import { useEffect, useState } from "react";
import { createApi } from "unsplash-js";

const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: "secret_key"
})


function useUnsplashAPI() {
  const [data, setPhotosResponse] = useState(null);

  fetch("https://api.unsplash.com/photos/random/?client_id=<<secret_key>>&orientation=landscape")
  .then(res => res.json())
  .then(data => console.log('Fetch >> ', data.urls))

  useEffect(() => {
    api.search
      .getPhotos({ query: "cat", orientation: "landscape" })
      .then(result => {
        setPhotosResponse(result.response.results[0].urls.regular);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, []);

  return {data, setPhotosResponse}
}

export default useUnsplashAPI