import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBackgroundImage } from "./backgroundImageSlice";

const BackgroundImage = () => {
  const { imageUrls, currentImageUrlIndex } = useSelector(
    (state) => state.backgroundImage
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBackgroundImage());
  }, [dispatch]);

  return (
    <div id="background-image-container">
      <img src={imageUrls[currentImageUrlIndex]} alt="" id="background-image" />
    </div>
  );
};

export default BackgroundImage;