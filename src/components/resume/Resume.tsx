import { ReadOutlined } from "@ant-design/icons";
import Reveal from "../reveal/Reveal";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { HiCalendar } from "react-icons/hi";
import { useTranslation } from "react-i18next";

interface ResumeTimelineItem {
  year: string;
  title: string;
  text: string;
}

export default function Resume() {
  const { t, i18n } = useTranslation("resume");

  const subtitle = t("subtitle", { defaultValue: "Rezyume yuklanmadi" });
  const title = t("title", { defaultValue: "Ta'lim Tajriba" });

  // returnObjects: true — massiv/obyekt qaytarish uchun shart
  const timeline = t("timeline", {
    returnObjects: true,
    defaultValue: [],
  }) as ResumeTimelineItem[];

  const titleParts = title.split(" ");

  console.log(i18n.language);
  console.log(i18n.getDataByLanguage(i18n.language));

  return (
    <div className="resume">
      <Reveal direction="up">
        <div className="resume__subtitle" id="Resume">
          <ReadOutlined /> <p>{subtitle}</p>
        </div>
      </Reveal>

      <Reveal direction="up">
        <h2 className="resume__title">
          {titleParts[0]} & <span>{titleParts[2]}</span>
        </h2>
      </Reveal>

      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 },
          "& .MuiTimelineContent-root": { color: "#fff" },
          "& .MuiTimelineConnector-root": { backgroundColor: "#C5C5C5" },
          "& .MuiTimelineDot-root": { backgroundColor: "#555" },
        }}
      >
        {timeline.length > 0 ? (
          timeline.map((item, i) => (
            <Reveal key={i} direction="left">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot>
                    <HiCalendar className="resume__icon" />
                  </TimelineDot>
                  {i !== timeline.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <div className="resume__item">
                    <span className="resume__item-year">{item.year}</span>
                    <h3 className="resume__item-title">{item.title}</h3>
                    <p className="resume__item-text">{item.text}</p>
                  </div>
                </TimelineContent>
              </TimelineItem>
            </Reveal>
          ))
        ) : (
          <p>Ma'lumotlar yuklanmadi</p>
        )}
      </Timeline>
    </div>
  );
}

// import { ReadOutlined } from "@ant-design/icons";
// import Reveal from "../reveal/Reveal";
// import Timeline from "@mui/lab/Timeline";
// import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
// import TimelineSeparator from "@mui/lab/TimelineSeparator";
// import TimelineConnector from "@mui/lab/TimelineConnector";
// import TimelineContent from "@mui/lab/TimelineContent";
// import TimelineDot from "@mui/lab/TimelineDot";
// import { HiCalendar } from "react-icons/hi";
// import { useTranslation } from "react-i18next";

// // ✅ TypeScript interface
// interface ResumeData {
//   subtitle: string;
//   title: string;
//   timeline: {
//     year: string;
//     title: string;
//     text: string;
//   }[];
// }

// export default function Resume() {
//   const { i18n } = useTranslation("resume"); // i18n ob'ektini qo'shdik

//   // 🔹 Butun resume namespace ob'ektini olish
//   const resume = i18n.getResourceBundle(i18n.language, "resume") as ResumeData | undefined;

//   // Debugging uchun: konsolda ma'lumotlarni tekshirish
//   // console.log("Current language:", i18n.language);
//   // console.log("Resume data:", resume);

//   const titleParts = resume?.title?.split(" ") || ["Ta'lim", "Tajriba"];
//   const timeline = resume?.timeline || [];

//   return (
//     <div className="resume">
//       <Reveal direction="up">
//         <div className="resume__subtitle" id="Resume">
//           <ReadOutlined /> <p>{resume?.subtitle || "Rezyume yuklanmadi"}</p>
//         </div>
//       </Reveal>

//       <Reveal direction="up">
//         <h1 className="resume__title">
//           {titleParts[0]} & <span>{titleParts[2]}</span>
//         </h1>
//       </Reveal>

//       <Timeline
//         sx={{
//           [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 },
//           "& .MuiTimelineContent-root": { color: "#fff" },
//           "& .MuiTimelineConnector-root": { backgroundColor: "#C5C5C5" },
//           "& .MuiTimelineDot-root": { backgroundColor: "#555" }
//         }}
//       >
//         {timeline.length > 0 ? (
//           timeline.map((item, i) => (
//             <Reveal key={i} direction="left">
//               <TimelineItem>
//                 <TimelineSeparator>
//                   <TimelineDot>
//                     <HiCalendar className="resume__icon" />
//                   </TimelineDot>
//                   {i !== timeline.length - 1 && <TimelineConnector />}
//                 </TimelineSeparator>
//                 <TimelineContent>
//                   <div className="resume__item">
//                     <span className="resume__item-year">{item.year}</span>
//                     <h3 className="resume__item-title">{item.title}</h3>
//                     <p className="resume__item-text">{item.text}</p>
//                   </div>
//                 </TimelineContent>
//               </TimelineItem>
//             </Reveal>
//           ))
//         ) : (
//           <p>Ma'lumotlar yuklanmadi</p>
//         )}
//       </Timeline>
//     </div>
//   );
// }