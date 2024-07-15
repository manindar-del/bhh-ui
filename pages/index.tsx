import ConfirmationModal from "@/components/ConfirmationModal/ConfirmationModal";
/* eslint-disable import/no-named-as-default-member */
import GetStarted from "@/components/GetStarted/GetStarted";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import HomeSecndSection from "@/components/HomeSecndSection/HomeSecndSection";
import ServiceList from "@/components/ServiceList/ServiceList";
import assest from "@/json/assest";

import Wrapper from "@/layout/wrapper/Wrapper";


export default function Home() {
  return (
    <Wrapper>

      <HomeBanner title="Welcome to the virtual Clinic" subTitle="Learn how the Virtual Clinic can help you." bannerImg={assest.homeBanner} btnText="Get Started Today" />

      <HomeSecndSection title="Learn how the" titleStrong="Virtual Clinic help you." />
      <GetStarted />


      <ServiceList title="Lorem ipsum dolor" titleStrong="sit amet." subText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
                        error rerum modi placeat optio architecto similique praesentium,
                        debitis fuga sequi!" />
      <ConfirmationModal />
    </Wrapper>
  );
}
