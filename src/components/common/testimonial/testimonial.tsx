"use client";

import { useState } from "react";

import BlurImage from "~/components/miscellaneous/blur-image";
import StarRating from "~/lib/rating/star";
import four from "../../../../public/images/testimonials/four.png";
import message from "../../../../public/images/testimonials/msg.png";
import one from "../../../../public/images/testimonials/one.png";
import three from "../../../../public/images/testimonials/three.png";
import two from "../../../../public/images/testimonials/two.png";

const testimonialImages = [
  {
    id: 0,
    text: "Our Testimonials",
    subText: "What People Say About Us",
  },
  {
    id: 1,
    image: one,
    name: "John Doe",
    position: "Designer",
    message:
      "Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut. Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut.Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut.Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut.Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut. Lorem libero arcu ut. Lorem ips.",
    rating: 5,
  },
  {
    id: 2,
    image: two,
    name: "Jane Doe",
    position: "Developer",
    message:
      "Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut. Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut.Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut.Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut.Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut. Lorem libero arcu ut. Lorem ips.",
    rating: 2,
  },
  {
    id: 3,
    image: three,
    name: "James Doe",
    position: "Customer Service",
    message:
      "Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut. Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut.Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut.Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut.Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut. Lorem libero arcu ut. Lorem ips.",
    rating: 4,
  },
  {
    id: 4,
    image: four,
    name: "Doe Jame",
    position: "Customer Service",
    message:
      "Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut. Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut.Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut.Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut.Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut. Lorem libero arcu ut. Lorem ips.",
    rating: 3,
  },
];

const Testimonial = () => {
  const [selectedTestimonialIndex, setSelectedTestimonialIndex] = useState(1);

  const handleImageClick = (index: number) => {
    setSelectedTestimonialIndex(index);
  };

  const selectedTestimonial = testimonialImages[selectedTestimonialIndex];

  return (
    <main className="">
      <section>
        <section className="my-9 xl:my-14">
          <section className="items-center gap-3 md:flex">
            <div className="flex-1">
              <h1 className="text-[17px] font-semibold text-[#292929] xl:text-2xl">
                Our Testimonials
              </h1>
              <p className="mt-2 text-[28px] font-medium text-primary lg:text-5xl">
                What People Say About Us
              </p>
            </div>
            {testimonialImages.map((t, index) => (
              <section key={t.id} className="">
                <div>
                  {t.image && (
                    <div className="hidden md:block">
                      <BlurImage
                        src={t.image}
                        className={`h-20 w-20 cursor-pointer ${selectedTestimonial.id === index && "rounded-full border-2 border-primary duration-200"}`}
                        alt={t.name}
                        onClick={() => handleImageClick(index)}
                      />
                    </div>
                  )}
                </div>
              </section>
            ))}
          </section>

          <section className="relative">
            <div className="my-7 h-[1px] w-full bg-[#CECECE]" />

            <div className="gap-10 xl:flex">
              <BlurImage
                src={message}
                className="hidden h-[200px] w-[270px] object-cover xl:block"
                alt={""}
              />

              <div className="absolute right-0">
                {<StarRating rating={selectedTestimonial.rating} />}
              </div>

              <section>
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[16px] font-semibold text-[#292929] xl:text-[22px]">
                      {selectedTestimonial.name}
                    </h3>
                  </div>

                  <p className="absolute left-0 mt-1 text-[14px] font-medium text-gray-500 xl:text-[16px]">
                    {selectedTestimonial.position}
                  </p>
                  <p className="mt-14 max-w-7xl text-start text-[14px] leading-[23px] lg:text-xl">
                    {selectedTestimonial.message}
                  </p>
                </div>
              </section>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Testimonial;
