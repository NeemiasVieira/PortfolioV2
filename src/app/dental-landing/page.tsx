import { DentalLandingHeader } from "./components/DentalLandingHeader";
import { Demo } from "./sections/Demo/Demo";
import { Differentials } from "./sections/Differentials/Differentials";
import { FAQ } from "./sections/FAQ/FAQ";
import { Hero } from "./sections/Hero/Hero";
import { Pricing } from "./sections/Pricing/Pricing";
import { Problem } from "./sections/Problem/Problem";
import { Process } from "./sections/Process/Process";
import Solution from "./sections/Solution/Solution";

const DentalLanding = () => {
  return (
    <>
      <DentalLandingHeader />
      <Hero />
      <Problem />
      <Solution />
      <Demo />
      <Differentials />
      <Process />
      <Pricing />
      <FAQ />
    </>
  );
};

export default DentalLanding;
