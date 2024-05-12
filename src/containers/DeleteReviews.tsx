import React from "react";

import ReviewBanner from "../components/DeleteReviews/Banner";
import ReviewSearcher from "../components/DeleteReviews/ReviewSearcher";
import Ablauf from "../components/DeleteReviews/Ablauf";
import Advantages from "../components/DeleteReviews/Advantages";
import Faq from "../components/DeleteReviews/Faq/Faq";
import Notification from "../components/DeleteReviews/Notification";
const DeleteReviews = () => {
  return (
    <>
      <ReviewBanner />
      <ReviewSearcher />
      <Ablauf />
      <Advantages />
      <Faq />
      <Notification/>
    </>
  );
};

export default DeleteReviews;
