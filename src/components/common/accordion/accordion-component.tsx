import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

const Accordions = () => {
  return (
    <div>
      <Accordion
        type="single"
        collapsible
        className="my-5 w-full rounded-lg bg-[#FFFFFF] px-5"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <p className="text-sm font-bold">
              {" "}
              Q. How this theme is different from others in market?
            </p>
          </AccordionTrigger>
          <AccordionContent>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <p className="text-sm font-bold">
              {" "}
              Q. Does this theme supports plugins?
            </p>
          </AccordionTrigger>
          <AccordionContent>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <p className="text-sm font-bold">
              {" "}
              Q. How this theme is different from others in market?
            </p>
          </AccordionTrigger>
          <AccordionContent>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            <p className="text-sm font-bold">
              {" "}
              Q. Does this theme supports plugins?
            </p>
          </AccordionTrigger>
          <AccordionContent>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            <p className="text-sm font-bold">
              {" "}
              Q. How this theme is different from others in market?
            </p>
          </AccordionTrigger>
          <AccordionContent>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>
            <p className="text-sm font-bold">
              {" "}
              Q. Does this theme supports plugins?
            </p>
          </AccordionTrigger>
          <AccordionContent>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Accordions;
