import { CommentOutlined } from "@ant-design/icons";
import Reveal from "../reveal/Reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/pagination";

interface TestimonialItem {
  name: string;
  position: string;
  company: string;
  text: string;
}

export default function Testimonials() {
  const { t } = useTranslation("testimonials");

  const subtitle = t("subtitle", { defaultValue: "" });
  const title = t("title", { defaultValue: "" });
  const highlight = t("highlight", { defaultValue: "" });

  const items = t("items", {
    returnObjects: true,
    defaultValue: [],
  }) as TestimonialItem[];

  return (
    <div className="testimonials">
      <Reveal direction="up">
        <div className="testimonials__subtitle" id="Testimonials">
          <CommentOutlined /> <p>{subtitle}</p>
        </div>
      </Reveal>

      <Reveal direction="up">
        <h1 className="testimonials__title">
          {title} <span>{highlight}</span>
        </h1>
      </Reveal>

      <Reveal direction="up">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={items.length > 1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={30}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {items.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="testimonials__col">
                <div className="testimonials__col-subtitle">
                  <div className="testimonials__col-subtitle-left">
                    {item.name.charAt(0)}
                  </div>
                  <div className="testimonials__col-subtitle-right">
                    <h3>{item.name}</h3>
                    <p>
                      {item.position}
                      {/* <span>{item.company}</span> */}
                    </p>
                  </div>
                </div>
                <p>{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Reveal>
    </div>
  );
}

// import { CommentOutlined } from "@ant-design/icons";
// import Reveal from "../reveal/Reveal";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import { useTranslation } from "react-i18next";

// import "swiper/css";
// import "swiper/css/pagination";

// interface TestimonialsData {
//     subtitle: string;
//     title: string;
//     highlight: string;
//     items: {
//         name: string;
//         position: string;
//         company: string;
//         text: string;
//     }[];
// };

// export default function Testimonials() {
//     const { i18n } = useTranslation("testimonials");

//     const testimonials = i18n.getResourceBundle(i18n.language, "testimonials") as TestimonialsData | undefined;

//     const items = testimonials?.items || [];

//     return (
//         <div className="testimonials">

//             <Reveal direction="up">
//                 <div className="testimonials__subtitle" id="Testimonials">
//                     <CommentOutlined /> <p>{testimonials?.subtitle}</p>
//                 </div>
//             </Reveal>

//             <Reveal direction="up">
//                 <h1 className="testimonials__title">
//                     {testimonials?.title}  <span>{testimonials?.highlight}</span>
//                 </h1>
//             </Reveal>

//             <Reveal direction="up">
//                 <Swiper
//                     modules={[Autoplay, Pagination]}
//                     loop={items.length > 1}
//                     autoplay={{ delay: 5000, disableOnInteraction: false }}
//                     spaceBetween={30}
//                     pagination={{ clickable: true }}
//                     className="mySwiper"
//                 >
//                     {items.map((item, i) => (
//                         <SwiperSlide key={i}>
//                             <div className="testimonials__col">
//                                 <div className="testimonials__col-subtitle">
//                                     <div className="testimonials__col-subtitle-left">
//                                         {item.name.charAt(0)}
//                                     </div>
//                                     <div className="testimonials__col-subtitle-right">
//                                         <h3>{item.name}</h3>
//                                         <p>
//                                             {item.position}
//                                             {/* <span>{item.company}</span> */}
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <p>{item.text}</p>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </Reveal>
//         </div>
//     );
// }