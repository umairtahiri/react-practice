import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./containers/HomePage";
import DeleteReviews from "./containers/DeleteReviews";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/delete-reviews"} element={<DeleteReviews />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
