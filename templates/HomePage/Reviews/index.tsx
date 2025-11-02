// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import Item from "./Item";

import { reviews } from "@/mocks/reviews";

type ReviewsProps = {};

const Reviews = ({}: ReviewsProps) => {
    const pairs = [];

    for (let i = 0; i < reviews.length; i += 2) {
        pairs.push([reviews[i], reviews[i + 1]]);
    }

    return (
        <div className="mb-[8.125rem] mx-10 xl:mb-30 xl:mx-0 lg:mb-16">
            <div className="mb-16 text-center xl:mb-12 xl:px-6 md:mb-8 md:px-4">
                <h2 className="mb-4 text-h2 lg:mb-3 md:mb-2">Wall of Love</h2>
                <div className="text-body-xl text-secondary">
                    Discover what our happy users have to say.
                </div>
            </div>
            <div className="relative overflow-hidden before:absolute before:top-0 before:left-0 before:bottom-0 before:z-2 before:w-1/5 before:bg-gradient-to-r before:from-white before:to-white/0 after:absolute after:top-0 after:right-0 after:bottom-0 after:z-2 after:w-1/5 after:bg-gradient-to-l after:from-white after:to-white/0 lg:before:w-24 lg:after:w-24 md:before:w-18 md:after:w-18 dark:before:from-primary dark:before:to-primary/0 dark:after:from-primary dark:after:to-primary/0">
                <Splide
                    options={{
                        type: "loop",
                        gap: "1.25rem",
                        drag: "free",
                        arrows: false,
                        pagination: false,
                        autoWidth: true,
                        autoScroll: {
                            pauseOnHover: false,
                            pauseOnFocus: false,
                            rewind: false,
                            speed: 0.3,
                        },
                    }}
                    extensions={{ AutoScroll }}
                >
                    {pairs.map((review, index) => (
                        <SplideSlide className="w-[26.25rem]" key={index}>
                            {review[0] && <Item item={review[0]} />}
                            {review[1] && <Item item={review[1]} />}
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    );
};

export default Reviews;
