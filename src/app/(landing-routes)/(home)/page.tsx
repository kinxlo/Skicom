import Hero from "~/components/home/hero";

import "./../../../components/home/home.css";

import { SectionFour } from "./_views/section-four";
import { SectionOne } from "./_views/section-one";
import { SectionThree } from "./_views/section-three";
import { SectionTwo } from "./_views/section-two";

function page() {
  return (
    <section>
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </section>
  );
}
export default page;
