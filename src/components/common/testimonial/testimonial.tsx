"use client";

import Image from "next/image";
import { useState } from "react";

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
    <main className="mx-auto w-11/12 text-center 2xl:container">
      <section>
        <section className="my-9 xl:my-14">
          <section className="items-center gap-3 md:flex">
            <div className="flex-1">
              <h1 className="text-lg font-semibold">Our Testimonials</h1>
              <p className="mt-2 text-3xl text-primary">
                What People Say About Us
              </p>
            </div>
            {testimonialImages.map((t, index) => (
              <section key={t.id} className="">
                <div>
                  {t.image && (
                    <div className="hidden md:block">
                      <Image
                        src={t.image}
                        className={`h-12 w-12 cursor-pointer ${selectedTestimonial.id === index && "rounded-full border-2 border-primary duration-200"}`}
                        alt={t.name}
                        onClick={() => handleImageClick(index)}
                      />
                    </div>
                  )}
                </div>
              </section>
            ))}
          </section>

          <section>
            <div className="my-7 h-[1px] w-full bg-[#CECECE]" />

            <div className="gap-10 xl:flex">
              <Image
                src={message}
                className="hidden h-[110px] w-[240px] object-cover xl:block"
                alt={""}
              />

              <section>
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold">{selectedTestimonial.name}</h3>
                    <div>
                      {<StarRating rating={selectedTestimonial.rating} />}{" "}
                    </div>
                  </div>

                  <p className="absolute left-0 text-xs font-medium text-gray-500">
                    {selectedTestimonial.position}
                  </p>
                  <p className="mt-10 text-start text-sm">
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
