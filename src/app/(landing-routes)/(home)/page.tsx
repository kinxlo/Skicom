import Accordions from "~/components/layout/accordion/accordion-component";
import DataCard from "~/components/layout/data-card/data-card";
import Testimonial from "~/components/layout/testimonial/testimonial";

function page() {
  return (
    <div>
      page
      <p>Lists of components below</p>
      <Accordions />
      <Testimonial />
      <DataCard />
    </div>
  );
}
export default page;
