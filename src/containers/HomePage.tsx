import HomeBanner from "../components/HomePageBanner";
import HomeCustomers from "../components/HomeCustomers";
import HomeCompany from "../components/HomeCompanyTabs";
import HomeBookCall from "../components/HomeBookCall";
import Faq from "../components/Faq/Faq";
import ReviewsAll from "../components/ReviewsContainer";

const HomePage = () => {
  return (
    <>
      <HomeBanner />
      <HomeCustomers />
      <HomeCompany />
      <HomeBookCall />
      <Faq />
      <ReviewsAll />
    </>
  );
};

export default HomePage;
