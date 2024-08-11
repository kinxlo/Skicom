import Accordions from "~/components/common/accordion/accordion-component";
import DataCard from "~/components/common/data-card/data-card";
import Testimonial from "~/components/common/testimonial/testimonial";

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
